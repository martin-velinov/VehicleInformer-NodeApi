var express = require('express');
var router = express.Router();
const truckController = require('../controllers/truck');




router.get('/truck', truckController.index) 

      .get('/truck/create', truckController.createTruck)
      .get('/truck/:id/view', truckController.viewTruck) 
      .get('/truck/:id/edit', truckController.editTruck)
      .post('/truck', truckController.postCreate)
      .put('/truck/:id', truckController.putEditTruck)
      .delete('/truck/:id', truckController.deleteTruck)
      
      
module.exports = router;
