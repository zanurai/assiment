const express = require('express');

const inventoryData = require('../inventory.json');
const {
    getAllInventory,
    getSingleInventory,
    createInventory,
    replaceInventory,
    updateInventory,
    deleteInventory,
} = require('../controllers/inventory')
const router = express.Router();

// router.get('/', (req, res) => {
//     const newinventoryData = [];
//     inventoryData.map((inventory) => {
//         const { id, title, name, description, price, quantity, image_url } = inventory;

//         newinventoryData.push({
//             id, title, name, description, price, quantity, image_url
//         })
//     })
//     res.json(newinventoryData)
// })
router.get('/', getAllInventory);
router.post('/', createInventory)
router.get('/:inventoryID', getSingleInventory)
router.put('/:inventoryID', replaceInventory)
router.patch('/:inventoryID', updateInventory)
router.delete('/:inventoryID', deleteInventory)


module.exports = router