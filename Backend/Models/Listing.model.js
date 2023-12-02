import mongoose from "mongoose";


const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    regularPrice:{
        type:Number,
        required:true,
    },
    discountPrice:{
        type:Number,
        required:true,
    },
    bedrooms:{
        type:Boolean,
        required:true
    },
    parking:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    offer:{
        type:Boolean,
        requried:true,
    },
    imageUrls:{
        type:Array,
        requried:true
    },
    userRef:{
        type:String,
        requried:true
    },
},{timestamps:true})

const Listing = mongoose.model('Listing',listingSchema);
export default Listing;