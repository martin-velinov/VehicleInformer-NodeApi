const vans=[]
const Van = require('../models/van');


module.exports = {
    index: async(req, res) => {
        const vans =await Van.find()
        res.render('../views/van/index.ejs', { title: 'van', vans: vans });
    },
    
    viewVan:async (req, res) => {
        const van = await Van.findById(req.params.id)

        res.render('../views/van/view-van.ejs', { van: van });
    },


    createVan: (req, res) => {
        res.render('../views/van/create.ejs');
    },


    postCreate: async(req, res) => {

        await Van.create(req.body)
        res.redirect('/van');
    },

    editVan: async(req, res) => {
        const van = await Van.findById(req.params.id)

        res.render('../views/van/edit-van.ejs', { van: van });
    },


    putEditVan: async (req, res) => {
        const van = await Van.findByIdAndUpdate(req.params.id, req.body);

        res.send({
            success: true
        });
        
        
    },

    deleteVan: async(req, res) => { 
        const van = await Van.findByIdAndDelete(req.params.id);
        
        
        res.send({
            success: true
        });


    }
   
}
