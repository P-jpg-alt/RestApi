let mongoose = require('mongoose');



// Employee Schema
const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required:true
    }, 
    age: {
        type:String,
        required:true
    }
});



module.exports = {Employee}