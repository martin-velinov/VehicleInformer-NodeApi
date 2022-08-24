const bikes=[]
const Bike = require('../models/bike');


module.exports = {
    index: async(req, res) => {
        const bikes =await Bike.find()
        res.render('../views/bike/index.ejs', { title: 'biketore', bikes: bikes });
    },
    
    viewBike:async (req, res) => {
        const bike = await Bike.findById(req.params.id)

        res.render('../views/bike/view-bike.ejs', { bike: bike });
    },


    createBike: (req, res) => {
        res.render('../views/bike/create.ejs');
    },


    postCreate: async(req, res) => {

        await Bike.create(req.body)
        res.redirect('/bike');
    },

    editBike: async(req, res) => {
        const bike = await Bike.findById(req.params.id)

        res.render('../views/bike/edit-bike.ejs', { bike: bike });
    },


    putEditBike: async (req, res) => {
        const bike = await Bike.findByIdAndUpdate(req.params.id, req.body);

        res.send({
            success: true
        });
        
        
    },

    deleteBike: async(req, res) => { 
        const bike = await Bike.findByIdAndDelete(req.params.id);
        
        
        res.send({
            success: true
        });


    }
   
}
