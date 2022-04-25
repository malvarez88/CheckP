'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../todos.js')
module.exports = router;

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users", (req, res) => {
    const td = todos.listPeople();
    res.status(200).send(td);
  });

  