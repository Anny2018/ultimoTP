const express = require('express');
const router = express.Router();
const itineraryModel = require('../citiesModel/itineraryModel');

router.get('/iteneraris',(req, res) => {
    itineraryModel.find((err, iteneraris) => {
        if (err) {
            console.log('Error find users: ', err);
            return res.status(500).json({ err: 'Error al consultar usuarios.'})
        }
        res.status(200).json({iteneraris});
        console.log(iteneraris)
    });
});
/* function searchingFor(term) {
    return function (x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  } */

//----------------------relacione ciudad.itinerary---------------------
/* router.get('/itinerary/:id',(req, res) =>{

    let cityId = req.params.id;
    console.log(cityId);

    itineraryModel.find({cityId:cityId})
        .populate({path:'cityId'})
        .then(itineraries =>{     
            console.log(itineraries.length)       
            if (!itineraries.length){
                return res.status(404).send({message: `Not found: itineraries with cityId ${cityId} do not exist`});
            }
            res.status(200).send({ itineraries });
        })
        .catch(err => {
            if (err) return res.status(500).send({message: `Error: ${err}`});
        });
}); */

router.route('/iteneraris/:idCity').get(function (req, res) {
    console.log('entro  abuscar ');
    console.log(req.params.idCity);
    
    itineraryModel.find({
            cityId: req.params.idCity  // search query
        }).populate({path:'cityId'})
        .catch(err => {
            console.error(err)
        })
        .then(doc => {
   
            return res.send(doc)
        })
        
});


/* router.get("/itineraries/:id", function (req, res) {
    itineraryModel.find({id : req.params.iteneraris}).then(function (itineraries) {
        res.send(itineraries);
        console.log(res);
    })
}); */
//--------------------------------------------------------------------------------






router.post('/itinerary', (req, res) => {
    const newCity = new itineraryModel(req.body);
    newCity.save((err, city) => {
        if (err) {
            console.log('Error save user: ', error);
            return res.status(500).json({ err: 'Error al guardar usuario.'})
        }
        res.status(200).json({city});
    })
});

router.put('/itinerary/:id',(req,res) =>{
    itineraryModel.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        if (err) {
            console.log('Error update cities: ', error);
            return res.status(500).json({ err: 'Error al actualizar usuario.'})
        }
        res.status(200).json({ cityUpdated: updated });
    });
})

router.delete('/itinerary/:id',(req,res) => {
    itineraryModel.findByIdAndRemove(req.params.id, (err, deleted) => {
        if (err) {
            console.log('Error delete user: ', error);
            return res.status(500).json({ err: 'Error al borrar usuario.'})
        }
        res.status(200).json({ cityDeleted: deleted });
    });
});

module.exports = router;