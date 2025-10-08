const asyncHandler = require('express-async-handler') 
const Goal = require('../models/goalm')

// Get Goals
const getGoals = asyncHandler( async (req , res)=>{
    // ki nfetchi goals mn database
    const goals = await Goal.find()
    // ki nrdjo response status 200 m3a message
    res.status(200).json(goals)
})

// POST Goal
const setGoal =asyncHandler(  async (req, res) => {
    // console.log(req.body);
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    // had star katcreatei wa7d l goal jdida f database
    const goal = await Goal.create({
        text : req.body.text
    })

    // had star katrdjoi response m3a status 200 w l goal li tcreateat
    res.status(200).json(goal)
})

// put Goal / update
const updateGoal =asyncHandler(  async (req, res) => {
    // had star katjib goal mn database 3la hsab id li f url
    const goal = await Goal.findById(req.params.id)
    // had l if katchecki ila ma kaynash goal b hadak id
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // had l const katupdatei goal b data jdida li jay mn body dyal request
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id , req.body , 
    // had l { new: true } kat3ni blli ila tupdatea goal radi trja3 lina l goal jdida maba9ach l9dima
    {
        new: true,
    })
    // ki nrdjo response m3a id dyal goal li tupdate
    res.status(200).json(updateGoal)
}
)
// delete Goal / 
const deleteGoal =asyncHandler(  async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // const deletGoal = await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()    
    // ki nrdjo response m3a id dyal goal li tmas7
    res.status(200).json({ id: req.params.id })
})

module.exports= {getGoals , setGoal , updateGoal , deleteGoal}