const express = require('express');
const router = express.Router();

// Item Model
// ../ points outside current folder
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    // what is find method?
    Item.find()
        // sort by descending
        .sort({ date: -1})
        // get items from DB
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save()
        .then(item => (res.json(item)));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;