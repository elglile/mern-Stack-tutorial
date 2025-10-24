import { useState  } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../features/goals/goalSlice"


function GoalForm() {
  // -----1---
  const [text , setText] = useState('')

  // -----3---
  const dispatch = useDispatch()


  // -----4---
  const onSubmit = e=>{
    e.preventDefault()
    //----
    dispatch(createGoal({text}))
    setText('')
  }
  return (
    <>
    {/* //-----2--- */}
    <section className="form">
      <form 
        action=""
        onSubmit={onSubmit}
        >
          <div className="">             
          <label className="block mb-2 text-start font-extralight text-xl">
            Goal:
            <input
              type="text"
              name="text"
              required
              className="w-full mt-1 p-2 rounded bg-white border border-gray-200 focus:outline-none"
              id="text"
              value={text}
              placeholder="enter your text"
              // onChange={(e) => setText(e.target.value)}
              onChange={(e)=> setText(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-lg text-xl"
          >
            Add Goal
          </button>
          </div>
        </form>
    </section>
    </>
  )
}

export default GoalForm
