// const express = require('mongoose');
// const  totalSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {  
//         type: String,
//         required: true
//     }},
//     {
//     timestamps: true,
// });

// module.exports = mongoose.model('Todo', totalSchema);
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo", todoSchema);