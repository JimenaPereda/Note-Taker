var path = require('path');
var router = require('express').Router();
var store = require('../Data/store.js')
console.log(store)


    router.get('/notes',(req, res)=>{
       store.getNotes()
       .then(notes => res.json(notes))
       .catch((err) => res.status(500).json(err))

    });

    router.post('/notes',(req, res)=>{
        console.log("hello");
        //To do: add note data to the real one //
        res.send("Work in progress")

    });
 

    module.exports = router;