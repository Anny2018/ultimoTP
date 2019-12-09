var express = require('express');
var router = express.Router();
var usuarioModel = require('../citiesModel/userModel');
/* const jwt = require("jsonwebtoken");
const key = require('../auth/secretKey'); */
// const UserModel = require('../modelos/modeloUser')

router.post('/usuariosModel', function (req, res) {

    console.log('post con usuarioModel');
    var usuario = new usuarioModel(req.body);
    usuario.save(function (err, respuesta) {
        if (err) {
            res.send(err)
        }
        res.send(respuesta);
    })

})
router.get('/usuarios', function (req, res) {

    console.log('get en usuario model');
    usuarioModel.find(function (err, usuarios) {
        if (err) {
            res.send(err)
        }
        res.send(usuarios);
    })

})

router.get('/usuariosModel/:id', function (req, res) {
    console.log(req.params);
    console.log(req.headers);
    usuarioModel.findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            res.send(err)
        }
        res.send(user);
    })

})

router.delete('/usuariosModel/:id', function (req, res) {
    console.log(req.params);
    usuarioModel.remove({ _id: req.params.id }, function (err, user) {
        if (err) {
            res.send(err)
        }
        res.json({ msg: 'usuario elminado' });
    })

})

router.put('/usuariosModel/:id', function (req, res) {
    console.log(req.params);
    usuarioModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, user) {
        if (err) {
            res.send(err)
        }
        res.send(user);
    })

})


module.exports = router;