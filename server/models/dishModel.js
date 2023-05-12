const mongoose = require('mongoose');


const DishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    servings: {
        type: Number,
        required: [true, 'How many will this feed is required']},
    prepTime: {
        type: String,
        required: [true, 'How long it will take to prep is required']},
    cookTime: {
        type: String,
        required: [true, 'How long it will take to cook is required']},
    description: {
        type: String,
        required: [true, 'Description required'],
        minLength: [10, 'Description must be at least 10 characters'],
        maxLength: 5000},
}, {timestamps:true})

const Dish = mongoose.model('Dish', DishSchema);

module.exports = Dish;