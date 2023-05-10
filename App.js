const express = require('express')
const PORT = 4000
const cors = require('cors');
const InventoryRouter = require('./routes/inventoryRoutes')
const connectDatabase = require('./database/connection')
const App = express()


App.use(cors())

require('dotenv').config();
//App.set('view engine', 'ejs')
connectDatabase()
App.use(express.json())
App.use('/api/inventory', InventoryRouter)

App.listen(PORT, () => {
    console.log(`start server${process.env.PORT}`)
})