
const mongoose = require('mongoose');

const truckSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    horsePower:{
      type:Number,
      required:true,
    },
    payload:{
      type:Number,
      required:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('truck', truckSchema);