// --------hadchi bach n9ad les routes , ma4anb9a nrja3 lih lab4it nbdl les routes 

// ki importer express mn module
const express = require("express")
// ki nsawb router bach nضيفو routes dyalna
const router = express.Router()
// ki inporter les get, post ,put , delete mn controller fil li dert f controller folder
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalC")
const protect = require("../middleware/authmiddleware")


// hada ki 3awd douk stora li drt lt7t f commande kndirouhom la kan the same route
router.route('/').get( protect,getGoals).post(protect,setGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)

// ki ndefiniw GET li ktreade data route 3la '/' bach njibo lgoals
// router.get('/', getGoals)

// ki ndefiniw POST li k create route 3la '/' bach nzido goal jdida
// router.post('/', setGoal)

// ki ndefiniw PUT li kt update route 3la '/:id' bach nupdatew goal m3in
// router.put('/:id', updateGoal)

// ki ndefiniw DELETE route 3la '/:id' bach nms7o goal m3in
// router.delete('/:id', deleteGoal)

// ki nsdrw router bach nst3mlo f server.js
module.exports = router