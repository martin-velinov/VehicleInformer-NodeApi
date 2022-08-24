
const mongoose = require('mongoose');

const vanSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    registered: {
        type: Boolean,
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

module.exports = mongoose.model('van', vanSchema);