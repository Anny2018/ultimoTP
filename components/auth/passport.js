const passport = require('passport');
// const passportJWT = require('passport-jwt');
const UserModel = require('../citiesModel/userModel');
// const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const JWTStrategy = require('passport-jwt').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
    function (userName, password, cb) {

        //Assume there is a DB module pproviding a global UserModel
        return UserModel.findOne({ username, password })
            .then(user => {
                console.log(user);

                if (!user) {
                    return cb(null, false, { message: 'Incorrect username or password.' });
                }

                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'algo secreto'
},
    function (jwtPayload, cb) {
        return UserModel.findById(jwtPayload._id)
            .then(user => {
                console.log('user', user);
                return cb(null, user);
            })
            .catch(err => {
                console.log('error', err);
                return cb(err);
            });
    }
));