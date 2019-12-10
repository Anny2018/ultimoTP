const express = require('express');
const router = express.Router();
const citiesModel = require('../citiesModel/citiesModel');

router.get('/city',(req, res) => {
    citiesModel.find((err, cities) => {
        if (err) {
            console.log('Error find users: ', error);
            return res.status(500).json({ err: 'Error al consultar usuarios.'})
        }
        res.status(200).json(cities);
    });
});

const getCityItinerary = (req,res) =>{
    let cityRequested = req.params._id;  
    City
    .findOne({_id:cityRequested})
    .populate("iteneraris") //modelo del que trae los docs
    .then((city)=>{res.send(city).status(204)}
    )};  

router.post('/city', (req, res) => {
    const newCity = new citiesModel(req.body);
    newCity.save((err, citySaved) => {
        if (err) {
            console.log('Error save user: ', error);
            return res.status(500).json({ err: 'Error al guardar usuario.'})
        }
        res.status(200).json({ newCity: citySaved});
    })
});

router.put('/city/:id',(req,res) =>{
    citiesModel.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        if (err) {
            console.log('Error update cities: ', error);
            return res.status(500).json({ err: 'Error al actualizar usuario.'})
        }
        res.status(200).json({ cityUpdated: updated });
    });
})

router.delete('/city/:id',(req,res) => {
    citiesModel.findByIdAndRemove(req.params.id, (err, deleted) => {
        if (err) {
            console.log('Error delete user: ', error);
            return res.status(500).json({ err: 'Error al borrar usuario.'})
        }
        res.status(200).json({ cityDeleted: deleted });
    });
});

module.exports = router;