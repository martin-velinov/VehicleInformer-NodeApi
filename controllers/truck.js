const trucks=[]
const Truck = require('../models/truck');


module.exports = {
    index: async(req, res) => {
        const trucks =await Truck.find()
        res.render('../views/truck/index.ejs', { title: 'truck', trucks: trucks });
    },
    
    viewTruck:async (req, res) => {
        const truck = await Truck.findById(req.params.id)

        res.render('../views/truck/view-truck.ejs', { truck: truck });
    },


    createTruck: (req, res) => {
        res.render('../views/truck/create.ejs');
    },


    postCreate: async(req, res) => {

        await Truck.create(req.body)
        res.redirect('/truck');
    },

    editTruck: async(req, res) => {
        const truck = await Truck.findById(req.params.id)

        res.render('../views/truck/edit-truck.ejs', { truck: truck });
    },


    putEditTruck: async (req, res) => {
        const truck = await Truck.findByIdAndUpdate(req.params.id, req.body);

        res.send({
            success: true
        });
        
        
    },

    deleteTruck: async(req, res) => { 
        const truck = await Truck.findByIdAndDelete(req.params.id);
        
        
        res.send({
            success: true
        });


    }
   
}
