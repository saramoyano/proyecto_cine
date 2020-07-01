const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cines";
 
const PUERTO = process.env.PORT || 80;
 
app.use(express.static('public'));
app.use(express.json());

app.get('/pases', function (req, res, next) {
  let busqueda = req.query.buscar
  var palabrasFiltro = []
  var resultado = {}
  resultado.horas = new Set();
  

  if (busqueda != null || busqueda.length > 0) {
    palabrasFiltro = busqueda.split(" ");
    var listaOrs = []

    palabrasFiltro.forEach(palabra => {
      var exreg = new RegExp(palabra, 'i')
      listaOrs.push({ $or: [{ titulo: { $regex: exreg } }, { cine: { $regex: exreg } }] });
     
    });
    app.pases.find({ $and: listaOrs },   { collation: { locale: "es", strength: 1 } })
      .toArray()
      .then(arrayPases =>{
        var listaPases =[];
        for (let index = 0; index < arrayPases.length; index++) {
          resultado = {}
          resultado.horas = [];
          resultado.horas.push(arrayPases[index].hora);
          for (let i = 0; i < arrayPases.length; i++) {  
            if ( index != i 
              && arrayPases[index].titulo == arrayPases[i].titulo 
              && arrayPases[index].cine == arrayPases[i].cine 
              && arrayPases[index].sala == arrayPases[i].sala
              &&(resultado.horas.indexOf(arrayPases[i].hora)== -1)
              ){
              resultado.horas.push(arrayPases[i].hora);
          }
        }
         
          resultado.titulo = arrayPases[index].titulo
          resultado.poster = arrayPases[index].poster
          resultado.sala = arrayPases[index].sala
          resultado.cine = arrayPases[index].cine

          listaPases.push(resultado)
      }
        res.status(200).json({listaPases })
      })
  } else {
    listaPases = app.pases.find({})
      .toArray()
      .then(arrayPases => {
        var listaPases =[];
        for (let index = 0; index < arrayPases.length; index++) {
          resultado = {}
          resultado.horas = [];
          resultado.horas.push(arrayPases[index].hora);
          for (let i = 0; i < arrayPases.length; i++) {  
            if ( index != i 
              && arrayPases[index].titulo == arrayPases[i].titulo 
              && arrayPases[index].cine == arrayPases[i].cine 
              && arrayPases[index].sala == arrayPases[i].sala
              &&(resultado.horas.indexOf(arrayPases[i].hora)== -1)
              ){
              resultado.horas.push(arrayPases[i].hora);
          }
        }
         
          resultado.titulo = arrayPases[index].titulo
          resultado.poster = arrayPases[index].poster
          resultado.sala = arrayPases[index].sala
          resultado.cine = arrayPases[index].cine

          listaPases.push(resultado)
          console.log(resultado)  
      }
        res.status(200).json({listaPases })
      }).catch();
  }
});

app.get('/butacas', function (req, res, next) {
  let cine_ = req.query.cine
  let sala_ = req.query.sala
  let hora_ = req.query.hora
  var arrayFinal = {};
  var por = 0;
  if ((cine_ != null) && (sala_ != null) && (hora_ != null)) {
    app.cines.find({ nombre: cine_, "salas.sala": sala_ })
      .toArray()
      .then(arrayCines => {
        app.pases.find({ cine: cine_, sala: sala_, hora: hora_ }).toArray()
          .then(arrayPases => {
            arrayFinal.cine = arrayPases[0].cine
            arrayFinal.sala = arrayPases[0].sala
            arrayFinal.hora = arrayPases[0].hora
            arrayFinal.titulo = arrayPases[0].titulo
            arrayFinal.reservadas = arrayPases[0].cine
            arrayFinal.butacas = arrayCines[0].salas[sala_ - 1].butacas
            arrayFinal.filas = arrayCines[0].salas[sala_ - 1].filas

            res.status(200).json(arrayFinal)
          })
      })
  }
});

var XButacasReservadas = 0;
app.post('/reservas', function (req, res, next) {
  let cine_ = req.query.cine
  let sala_ = req.query.sala
  let hora_ = req.query.hora
  let cuerpo = req.body
  
  
 
  cuerpo.forEach(butaca =>
        XButacasReservadas = XButacasReservadas +1
    );
    
    app.pases.findOneAndUpdate({cine: cine_, sala: sala_, hora: hora_}, {$push: {"reservadas":{$each: cuerpo}}})
      
        
         res.status(201).header({XRecuentoButacas:XButacasReservadas}).send();     
});

app.get('/videos', function (req, res, next){
  let busqueda = req.query.tema;
  let rta= 'https://www.youtube.com/results?search_query='+busqueda;
    res.status(302).header({Location:rta}).send();

})

app.get('/pases/:hora', function (req, res, next) {
  let horario = req.params.hora
  
  var resultado = {}
  resultado.horas = new Set();
  

  if (horario != null) {
   
    app.pases.find({ hora:horario })
      .toArray()
      .then(arrayPases =>{
        var listaPases =[];
        for (let index = 0; index < arrayPases.length; index++) {
          resultado = {}
          resultado.horas = [];
          resultado.horas.push(arrayPases[index].hora);
          for (let i = 0; i < arrayPases.length; i++) {  
            if ( index != i 
              && arrayPases[index].titulo == arrayPases[i].titulo 
              && arrayPases[index].cine == arrayPases[i].cine 
              && arrayPases[index].sala == arrayPases[i].sala
              &&(resultado.horas.indexOf(arrayPases[i].hora)== -1)
              ){
              resultado.horas.push(arrayPases[i].hora);
          }
        }
         
          resultado.titulo = arrayPases[index].titulo
          resultado.poster = arrayPases[index].poster
          resultado.sala = arrayPases[index].sala
          resultado.cine = arrayPases[index].cine

          listaPases.push(resultado)
      }
        res.status(200).json({listaPases })
      })
  } else {
    listaPases = app.pases.find({})
      .toArray()
      .then(arrayPases => {
        var listaPases =[];
        for (let index = 0; index < arrayPases.length; index++) {
          resultado = {}
          resultado.horas = [];
          resultado.horas.push(arrayPases[index].hora);
          for (let i = 0; i < arrayPases.length; i++) {  
            if ( index != i 
              && arrayPases[index].titulo == arrayPases[i].titulo 
              && arrayPases[index].cine == arrayPases[i].cine 
              && arrayPases[index].sala == arrayPases[i].sala
              &&(resultado.horas.indexOf(arrayPases[i].hora)== -1)
              ){
              resultado.horas.push(arrayPases[i].hora);
          }
        }
         
          resultado.titulo = arrayPases[index].titulo
          resultado.poster = arrayPases[index].poster
          resultado.sala = arrayPases[index].sala
          resultado.cine = arrayPases[index].cine

          listaPases.push(resultado)
          console.log(resultado)  
      }
        res.status(200).json({listaPases })
      }).catch();
  }
});

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var db = client.db('cines');
  app.pases = db.collection("pases")
  app.cines = db.collection("cines")
  app.listen(PUERTO, () => console.log(`Servicio escuchando en ${PUERTO}`));
});