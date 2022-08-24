const cars=[]
const Car = require('../models/car');


module.exports = {
    index: async(req, res) => {
        const cars =await Car.find()
        res.render('../views/car/index.ejs', { title: 'Carstore', cars: cars });
    },
    
    viewCar:async (req, res) => {
        const car = await Car.findById(req.params.id)

        res.render('../views/car/view-car.ejs', { car: car });
    },


    createCar: (req, res) => {
        res.render('../views/car/create.ejs');
    },


    postCreate: async(req, res) => {

        await Car.create(req.body)
        res.redirect('/car');
    },

    editCar: async(req, res) => {
        const car = await Car.findById(req.params.id)

        res.render('../views/car/edit-car.ejs', { car: car });
    },


    putEditCar: async (req, res) => {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body);

        res.send({
            success: true
        });
        
        
    },

    deleteCar: async(req, res) => { 
        const car = await Car.findByIdAndDelete(req.params.id);
        
        
        res.send({
            success: true
        });


    }
   
}
