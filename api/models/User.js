/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
module.exports = {
	schema: true,
  attributes: {
		username: {
			type: 'string',
			required: false,
			unique : true
		},
		email:{
		  type: 'string',
			required: true,
			email: true,
			unique: true
		},
		encryptedPassword: {
			type: 'string'
		},
		displayName: {
			type: 'string'
			
		},
		avatar: {
			type: 'string'
		},
		lastname:{
			type: 'string'
		},
		firstname:{
			type: 'string'
		},
		title:{
			type: 'string',
			enum: ['DR.', 'MR.','MS']
		},
		program:{
			model: 'program'
		},
		userRestriction:{
			model: 'restriction'
		},
		class:{
			collection:'class',
			via: 'user'
		}
  },
  beforeCreate: (values, next) => {
		const programRestriction = RegistrationCodeService.convertCode(values.invitationCode);
    if(!values.password || values.password != values.confirmation){
			return next({err:["Password doesn't match password confirmation."]});
		}else if(!programRestriction){
			return next({err:["Invalid Invitation Code."]});
    }else{
			bcrypt.hash(values.password, 10)
			.then((encryptedPassword) => {
				values.firstname = values.firstname.toUpperCase();
				values.lastname = values.lastname.toUpperCase();
				values.encryptedPassword = encryptedPassword;
				values.program = programRestriction.program;
				values.userRestriction = programRestriction.restriction;
        next();
      }).catch((err) => {
        return next(err);
      })
    }
  }
};

