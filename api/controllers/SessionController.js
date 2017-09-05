/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
process.env.SECRET = "MY SECRET KEY";
module.exports = {
	create:(req, res, next) => {
    requireEmailAndPassword()
    .then(validateEmail)
    .then(validatePassword)
    .then(logUserIn)
    .then(updateUser)
    .then((session) => {
        const data = req.session;
        delete data.cookie.path;
        delete data.cookie.originalMaxAge;
        console.log('SessionController: create success');
        res.status(200).send(data);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
    function requireEmailAndPassword(){
      const promise = new Promise((resolve, reject) => {
        if(!req.param('email') || !req.param('password')){
          const requireEmailAndPasswordError = [{name:'requireEmailAndPassword', message:'Please input your password and email to continue..'}]
          reject(requireEmailAndPasswordError);
        }else{
          const data = {
            email:req.param('email'),
            password: req.param('password')
          }
          //console.log(data);
          resolve(data);
        }
      })
      return promise;
    }
    function validateEmail(data){
      const promise = new Promise((resolve, reject) => {
        User.findOneByEmail(data.email)
          .then((user) => {
          if(!user){
            //console.log(user);
            const validateEmailError = [{name: 'validateEmailError', message:'Email '+data.email+' is not registered'}]
            reject(validateEmailError);
          }else{
            data.user = user;
            resolve(data);
          }
        }).catch((err) => {
          reject({err:'findUserError'});
        })
      })
      return promise;
    }
    function validatePassword(data){
      const promise = new Promise((resolve, reject) => {
        bcrypt.compare(data.password, data.user.encryptedPassword).then(function(res){
          if(!res){
            const passwordMismatchError = [{name:'passwordMismatchError', message:'Invalid email and password combination'}]
            reject(passwordMismatchError);
          }else{
            resolve(data);
          }
        }).catch((err) => {
          reject({err:'comparePasswordError'});
        })
      })
      return promise;
    }
    function logUserIn(data){
      const promise = new Promise((resolve, reject) => {
        if(data.user){
            req.session.authenticated = true;
            delete data.user.encryptedPassword;
            delete data.user.createdAt;
            delete data.user.updatedAt;
            delete data.user.username;
            req.session.User = data.user;
            req.session.token = jwToken.issue({id: data.user.id});
            resolve(data);
        }else{
          const userLoginError = [{name:'userError', message:'There is a error in logging the user'}]
          reject(userLoginError);
        }  
      })
      return promise;
    }
    function updateUser(data){
        const promise = new Promise((resolve, reject) => {
          User.update({id:data.user.id},{online: true})
            .then((user) => {
		    data.user = user[0];
            resolve(data);
          }).catch((err) => {
            const updateUserError = [{name:'updateUserError', message:'Unable to update user: '+user.name,err:err}]
            reject(updateUserError);
          })
        })
        return promise;
      }
	}
};