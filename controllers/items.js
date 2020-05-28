const express = require('express');
const itemController = express.Router();
const mongoose = require('mongoose');
const Item = require('../models/itemsall.js');


//PRESENTATION//

// INDEX
itemController.get('/', (req, res) => {
    Item.find({}, (error, allItems) => {
        const props = {
            items: allItems
        }
        res.render('Index', props)
    })
})

// NEW 
itemController.get('/add', (req,res) => {
    res.render('New')
})

// SHOW
itemController.get('/:id', (req,res) => {
    Item.findById(req.params.id, (error, foundItems) => {
        const props = {
            item: foundItems
        }
        res.render('Show', props);
    })
})

// EDIT
itemController.get('/edit/:id', (req,res) => {
    Item.findById(req.params.id, (error, foundItems) => {
        const props = {
            item: foundItems
        }
        res.render('Edit', props);
    })
})



// FUNCTIONAL //

// CREATE
itemController.post('/', (req,res) => {
    Item.create(req.body, (error, createItem) => {
        res.redirect('/items');
    })
})

// UPDATE
itemController.put('/edit/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (error, updateItem) => {
        res.redirect('/items');
    })
})

// DESTROY
itemController.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (error, deleteItem) => {
        res.redirect('/items');
    })
})


module.exports = itemController;