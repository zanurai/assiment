const mongoose = require('mongoose');

let inventorySchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [10, "Min length shouldbe 10 characters"],
        maxlength: [1000, "Tittle cannot be greater than 100 characters"],
    },
    name: {
        type: String
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be less than 0"]
    },
    imageUrl: { type: String },
    quantity: {
        type: Number
    }

})

const InventoryModel = mongoose.model("Inventory", inventorySchema)
module.exports = InventoryModel;