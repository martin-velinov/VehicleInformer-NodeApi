
const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema(
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
    cc:{
      type:Number,
      required:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('bike', bikeSchema);