const express = require('express'); //express es el que dota a  nodeJS las propiedades de servidor web 
const bodyParser =require('body-parser')// el http no te maneja json x defecto,
//para recibir en formato json y adema en urlencode, utilizamos body parser,los datas lo parsea 
var cors = require('cors');

const mongoose = require('mongoose');//ORM -mongoose me permite realizar petisones a la bd
//x q utilizar mongoose o cualquier ORM? sql hace las petisones, orm me da seguridad, y es mas facil
//definimos una aplicacion servidor

// Configurar base de datos
mongoose.connect('mongodb+srv://ana2019:ana2019maria@mytinerary-4irgq.mongodb.net/Iteneraty?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Importar
//agrega los archivos,los archivos tiene que tener export para poder acceder
const app = express();

const citiesRoutes = require("./components/citiesRouter/citiesRouter")
const itineraryRoutes = require("./components/citiesRouter/itineraryRouter")
const userRoutes= require("./components/citiesRouter/userRouter")
app.use(cors());
//configuramos para 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//passport configuration current
//require('./src/auth/passport1')

//passport google configuration current
require('./components/auth/passportGoogle')

//Los middlewares son funciones que se ejecutan 
//antes de llegar a las rutas:  app.use(cors()) app.use(express.json()) 
// routes
app.use('/api',itineraryRoutes);
app.use('/api',userRoutes);
app.use('/api', citiesRoutes); 

 app.use('/api',userRoutes);


/*app.use('/api', productsRoutes);
app.use('/api', rolsRoutes);*/



app.get('/', (req, res) => {
    res.send('Servidor express de ana');
});

//lanzamos el servidor"node server.js",
app.listen(5000, () => {
    console.log('Servidor express corriendo en puerto 5000');
})
