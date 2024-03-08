const mongoose = require('mongoose')

const PubSchema = mongoose.Schema({
    title : {
        type : "String", 
        required : true
    } ,
    image : {
        type : "String" , 
        required : true
    }
})
module.exports = mongoose.model('Pub' , PubSchema);