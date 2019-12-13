const passportJwt = require("passport-jwt");
const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt;
// require('passport-jwt').ExtractJwt; 

const passport = require('passport');
var usuarioModel = require('../citiesModel/userModel');
const key = require('./secretKey');

const opts={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport.use(

    new JwtStrategy(opts, (jwt_payload, done) => {
        usuarioModel.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    })
);