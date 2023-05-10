const InventoryModel = require("../models/inventory");
const inventoryData = require('../inventory.json')

const getAllInventory = async (req, res) => {
    // res.json(req.inventoryData)
    try {
        const inventoryData = await InventoryModel.find();
        console.log(inventoryData)
        res.json(inventoryData)
    } catch (error) {
        res.json({
            message: "Error",
            data: error
        })
    }
}

const getSingleInventory = async (req, res) => {
    try {
        const { inventoryID } = req.params;
        const inventoryData = await InventoryModel.findById(inventoryID)
        console.log(inventoryData)
        res.json(inventoryData)
    } catch (error) {
        res.json({
            message: "Error",
            data: error
        })
    }
}

const createInventory = async (req, res) => {
    try {
        console.log(req.body)
        const inventory = await InventoryModel.create(req.body);
        res.send({
            message: 'data saved successfully',
            data: inventory
        })
    } catch (err) {
        res.json({
            message: "Error",
            data: err
        })
    }
}

const replaceInventory = async (req, res) => {
    try {
        const { inventoryID } = req.params;
        const replaceData = req.body
        const replaceInventory = await InventoryModel.findOneAndReplace({ _id: inventoryID }, replaceData, { new: true })

        res.json({
            message: "inventory replaced successfully",
            data: replaceInventory
        })
    } catch (err) {
        res.status(500).json({
            message: "Error",
            data: err
        })
    }
}

const updateInventory = async (req, res) => {
    try {
        const { inventoryID } = req.params;
        const updateInventory = await InventoryModel.findByIdAndUpdate(inventoryID, req.body, { new: true });
        res.json({
            message: "data update successfully",
            data: updateInventory
        })
    } catch (error) {
        res.json({
            message: 'Error',
            data: error
        })
    }
}

const deleteInventory = async (req, res) => {
    try {
        const { inventoryID } = req.params;
        const deleteInventory = await InventoryModel.findByIdAndDelete(inventoryID);
        res.json({
            message: "Delete Successfully",
            data: deleteInventory
        })

    } catch (error) {
        res.json({
            message: "Error",
            data: error
        })
    }
}

module.exports = {
    getAllInventory,
    getSingleInventory,
    createInventory,
    replaceInventory,
    updateInventory,
    deleteInventory

}