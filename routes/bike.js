var express = require('express');
var router = express.Router();
const bikeController = require('../controllers/bike');




router.get('/bike', bikeController.index) 

      .get('/bike/create', bikeController.createBike)
      .get('/bike/:id/view', bikeController.viewBike) 
      .get('/bike/:id/edit', bikeController.editBike)
      .post('/bike', bikeController.postCreate)
      .put('/bike/:id', bikeController.putEditBike)
      .delete('/bike/:id', bikeController.deleteBike)
      
      
module.exports = router;
