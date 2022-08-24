var express = require('express');
var router = express.Router();
const vanController = require('../controllers/van');




router.get('/van', vanController.index) 

      .get('/van/create', vanController.createVan)
      .get('/van/:id/view', vanController.viewVan) 
      .get('/van/:id/edit', vanController.editVan)
      .post('/van', vanController.postCreate)
      .put('/van/:id', vanController.putEditVan)
      .delete('/van/:id', vanController.deleteVan)
      
      
module.exports = router;
