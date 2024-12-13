//Sin especificar una ruta, busca en el node_modules
const express = require('express'); //require --> Importar un módulo

const app = express(); //Permite configurar al servidor web

const port = 8000;

//Con el .use se definen los midleware

app.use( express.json() ); //Sirve para convertir un json en un objeto de JavaScript
app.use( express.urlencoded({ extended: true }) );

require('./config/mongoose.config');

const allRestaurantesRoutes = require('./routes/restaurante.routes');
allRestaurantesRoutes(app);


app.listen(port, () => {
  console.log("Server listening at port", port);
});
/*

const restaurantes = [
    {
        id: "1",
        nombre: "Restaurante El Buen Sabor",
        tipo: "Tradicional",
        horario: "12:00-22:00",
        imagen: ""
      },
      {
        id: "2",
        nombre: "Café del Valle",
        tipo: "Cafetería",
        horario: "08:00 - 20:00",
        imagen: ""
      },
      {
        id: "3",
        nombre: "La Parrilla de San José",
        tipo: "Parrillada",
        horario: "12:00 - 17:00",
        imagen: ""
      }

]

// app.gert ('/restaurantes', (_req,res)) --> Todo esto es una ruta

app.get('/restaurantes', (_req,res) => {
    res.json(restaurantes);
});

app.post("/restaurantes", (req,res) =>{
    console.log(req.body);
    restaurantes.push(req.body);

    res.status(200).json(restaurantes);
    
});


//params retorna un objeto de tipo javascript
app.get('/restaurantes/:id', (req, res) => {
  console.log(req.params.id);

  res.status(200).json(restaurantes[req.params.id]);
});

app.put('/restaurantes/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  restaurantes[req.params.id] = req.body;

  res.status(200).json(restaurantes);
});

app.delete('/restaurantes/:id', (req, res) => {
  console.log(req.params.id);

  restaurantes.splice(req.params.id, 1);

  res.status(200).json(restaurantes);
});

 
//Configurar una ruta en el servidor web, es decir, un ENDPOINT. function es la función manejadora
//req y res son dos objetos
//req parámetros que envia el cliente mediante la url
//res contiene los métedos que permiten responder al cliente
app.get('/', function (req, res) {
    //Con el send se termina el ciclo solicitud-respuesta
    res.status(200).json({mensaje:"Hola"});
});

app.listen(port, function () {
    console.log('server.js escuchando en el puerto', port);
});*/