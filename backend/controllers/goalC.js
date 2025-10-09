const asyncHandler = require('express-async-handler') 
const Goal = require('../models/goalm')
const User = require('../models/userm')


//@desc Get Goals
//@route Get /api/usgoalsers
//@access Private
const getGoals = asyncHandler( async (req , res)=>{
    // ki nfetchi goals mn database
    const goals = await Goal.find({user : req.user.id})
    // ki nrdjo response status 200 m3a message
    res.status(200).json(goals)
})


//@desc Set Goals
//@route Post /api/goal
//@access Private
const setGoal =asyncHandler(  async (req, res) => {
    // console.log(req.body);
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    // had star katcreatei wa7d l goal jdida f database
    const goal = await Goal.create({
        // had star 
        text : req.body.text,
        // make the user includ
        user : req.user.id
    })

    // had star katrdjoi response m3a status 200 w l goal li tcreateat
    res.status(200).json(goal)
})



//@desc update Goal 
//@route PUT  /api/goal:id
//@access Private
const updateGoal =asyncHandler(  async (req, res) => {
    // had star katjib goal mn database 3la hsab id li f url
    const goal = await Goal.findById(req.params.id)
    // had l if katchecki ila ma kaynash goal b hadak id
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // ---------- hnaya bach meli tb4i dir update f goal t7add bach mtbdlch f goal ta3 user a5or 
        const user = await User.findById(req.user.id)
        // check for user
        if (!user){
            res.status(401)
            throw new Error ('User not found')
        }
        // make sure the maches white user and the data
        if(goal.user.toString() !== user.id){
            res.status(401)
            throw new Error ('User not authorized')
        }
    // -------------------------

    // had l const katupdatei goal b data jdida li jay mn body dyal request
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id , req.body , 
    // had l { new: true } kat3ni blli ila tupdatea goal radi trja3 lina l goal jdida maba9ach l9dima
    { new: true,})
    // ki nrdjo response m3a id dyal goal li tupdate
    res.status(200).json(updateGoal)
}
)

//@desc delete Goal 
//@route delete  /api/goal:id
//@access Private
const deleteGoal =asyncHandler(  async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // ---------- hnaya bach meli tb4i dir update f goal t7add bach mtbdlch f goal ta3 user a5or 
        const user = await User.findById(req.user.id)
        // check for user
        if (!user){
            res.status(401)
            throw new Error ('User not found')
        }
        // make sure the maches white user and the data
        if(goal.user.toString() !== user.id){
            res.status(401)
            throw new Error ('User not authorized')
        }
    // -------------------------

    // const deletGoal = await Goal.findByIdAndDelete(req.params.id)
    await goal.deleteOne()    
    // ki nrdjo response m3a id dyal goal li tmas7
    res.status(200).json({ id: req.params.id })
})

module.exports= {getGoals , setGoal , updateGoal , deleteGoal}