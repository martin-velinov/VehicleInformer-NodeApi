var express = require('express');
var router = express.Router();
const carController = require('../controllers/car');




router.get('/car', carController.index) 

      .get('/car/create', carController.createCar)
      .get('/car/:id/view', carController.viewCar) 
      .get('/car/:id/edit', carController.editCar)
      .post('/car', carController.postCreate)
      .put('/car/:id', carController.putEditCar)
      .delete('/car/:id', carController.deleteCar)
      
      
module.exports = router;
