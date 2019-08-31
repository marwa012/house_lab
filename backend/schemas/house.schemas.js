const mongoose=require('mongoose');

const houseSchema=new mongoose.Schema({
    label:{
        type:String,
        require:true
    },
    adress:{
        street:{type:String},
        city:{type:String}
    },
    price:Number
});

module.exports=mongoose.model('House',houseSchema);

