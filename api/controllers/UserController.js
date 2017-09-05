/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find:(req, res, next) => {
        User.find()
        .then((users) => {
            res.send(200, users);
        }).catch((err) => {
            res.send(500, err);
        })
    },
	create:(req, res, next) => {
        /* User.create(req.body)
        .then((user) => {
            console.log(user);
            res.send(200, user);
        }).catch((err) => {
            console.log(err);
            res.send(500, err);
        }) */
        console.log(req.body);
        res.send(200, req.body);
    }
};

