const mongoose =require('mongoose');

//schema creation
const studentSchema =mongoose.Schema({
    name:String,
    age:Number,
    place:String
})
const studentmodel =mongoose.model('student',studentSchema)
module.exports = studentmodel;
