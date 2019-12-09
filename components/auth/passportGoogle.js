const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var usuarioModel = require('../citiesModel/userModel');
const key = require('./secretKey');
const jwt = require('jsonwebtoken');


passport.use(new GoogleStrategy({
    clientID: "705485582474-9r9gujmqqock10rd6l5dtqpan1ujk6uu.apps.googleusercontent.com",
    clientSecret: "x_WseuYeQ3jFc-lJgsyXagJc",
    callbackURL: "http://localhost:3001/api/auth/google/callback",
    // userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    // 'https://www.googleapis.com/auth/userinfo.profile',
    // 'https://www.googleapis.com/auth/userinfo.email'
},
    function (accessToken, refreshToken, profile, cb) {
        console.log('perfil: ', profile);
        console.log('name:', profile.name);

        // const user=profile;
        // usuarioModel.findOne({ email: profile.emails[0].value }, function (err, user) {
        // console.log('user: ', user);
        // return cb(profile)
        // });

        let query = { email: profile.emails[0].value };
        let update = {
            $setOnInsert: {
                userName: profile.emails[0].value,
                password: null,
                email: String,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
            }
        };

        let options = { upsert: true };
        usuarioModel.findOneAndUpdate(query, update, options)
            .catch(error => console.error(error))
            .then(user => {
                cb(null,user)
            })
    }
));

