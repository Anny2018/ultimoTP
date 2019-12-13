/* const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const itinerarySchema = new Schema({
 title:{
     type:String
 },
 profilePic:{
     type:String
 },
 rating:{
     type:Number
 },
 duration:{
     type:Number
 },
 price:{
     type: Number
 } */
/*  hashtap:{
     type:Array
 } */
//});

//module.exports = mongoose.model('itinerary', itinerarySchema);

const mongoose = require('mongoose');

const itinerarySchema=mongoose.Schema({
    title:{
        type:String
    },
    profilePic:{
        type:String
    },
    rating:{
        type:Number
    },
    duration:{
        type:Number
    },
    price:{
        type: Number
    },
   /*  hashtap:{
        type:Array
    } */

    cityId: {
        type: mongoose.Types.ObjectId,
        ref: 'cities'
    }
   });
    


module.exports = mongoose.model('iteneraris', itinerarySchema)