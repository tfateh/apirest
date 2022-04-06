const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    brand:String,
    price:Number,
    description:String,
    photo:String

})

module.exports = mongoose.model("Product",productSchema)