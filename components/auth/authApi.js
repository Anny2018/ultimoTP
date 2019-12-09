var express= require('express');
var router = express.Router();
const passport= require('passport');
const jwt= require('jsonwebtoken');
var usuarioModel=require('../citiesModel/userModel');
const key =require('../auth/secretKey');
require('./passportGoogle')

router.post('/logins', function (req, res) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('login+++++++++++++');
        console.log(err);
        console.log(user);
        console.log(info);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            user.password = null;
            const token = jwt.sign(user.toJSON(), secret, {
                expiresIn: 604800 // 1 week
            });

            return res.json({ user, token });
        });
    })
        (req, res);
})


router.post('/login', function (req, res) {
    usuarioModel.findOne({ userName: req.body.userName })
        .then(user => {
            console.log(user);

            if (!user) {
                return res.send({ message: 'Incorrect userName.' });
            }

            if (user.password === req.body.password) {
                const payload = {
                    id: user._id,
                    userName: user.userName,
                    // avatarPicture: user.avatarPicture
                };
                const options = { expiresIn: 2592000 };
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,
                    (err, token) => {
                        if (err) {
                            res.json({
                                success: false,
                                token: "There was an error"
                            });
                        } else {
                            res.json({
                                success: true,
                                token: token
                            });
                        }
                    }
                );
            } else {
                res.send({ message: 'Incorrect password.' });
            }
        })
        .catch(err => {
            return req.send(err);
        });
})


router.post('/register', function (req, res) {
    console.log('body register: ', req.body);
    var usuario = new usuarioModel(req.body);
    usuario.save(function (err, respuesta) {
        if (err) {
            res.send(err)
        }
        res.send(respuesta);
    })
})


router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:5000/', session: false }),
    function (req, res) {
        console.log('entro', req.user);
        const token = jwt.sign(req.user.toJSON(), secret, {
            expiresIn: 604800 // 1 week
        });

        // res.redirect('http://localhost:3000/home');
        res.redirect('http://localhost:5001/api/auth/' + token);
    });


function isUserAuthenticated(req, res, next) {
    console.log('luego de ingresar a la cuenta: ', req.user);
    
    if (req.user) {
        next();
    } else {
        res.send('You must login!');
    }
}

router.get('/auth/:token', isUserAuthenticated, (req, res) => {
    // res.send('You have reached the secret route');
    console.log(req);
    return res.json({ user: req.user, toke: req.params.token });
});


module.exports = router;