const express = require('express');
const studentmodel = require('./model/studentmodel');
const router =express.Router();

    router.use(express.json());


    router.get('/',async(req,res)=>{
        try{
        const data = await studentmodel.find()
        res.send(data);
        } catch(error) {
            console.log(error)
        }
    })
    ///

    router.post('/add',async(req,res)=>{
        try{
            var item =req.body;
            await studentmodel(item).save()
            res.send ("data added")
        }catch(error){
            console.log(error)
    
        }
    })

// rote to do update
router.put('/edit/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const item =req.body;
        await studentmodel.findByIdAndUpdate(id,item);
        res.send("data updated")
    } catch (error) {
        console.log(error);
        
    }
})



router.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const item =req.body;
        await studentmodel.findByIdAndDelete(id,item);
        res.send("data deleted")
    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
})

    module.exports = router;