const mongoose = require('mongoose');
let compass_url ='mongodb://localhost:27017/SAMPLEDB';
let mongodb_url ='mongodb+srv://PRAT:rat@cluster0.2buaiuq.mongodb.net/prat?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongodb_url).then(()=>{
console.log("db connected")
})
 .catch((err) =>{
    console.log(err);
});