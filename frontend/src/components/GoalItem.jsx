import { FaTrash } from "react-icons/fa";
import { deleteGoal } from "../features/goals/goalSlice";
import { useDispatch } from "react-redux";

function GoalItem({ goal }) {
    // -------2- delete ------
    const dispatch = useDispatch();
    // -----------------------
    return (
        <div 
            className=" border-4 border-gray-100 m-5 p-5 rounded-xl shadow-lg bg-gray-100 "
            >
            <div 
                className="text-xs text-gray-600 font-mono flex items-center justify-between"
                >
                    {/* -------1------- */}
                <div>
                    {new Date(goal.createdAt).toLocaleString("en-US")}
                </div>
                {/* -------2- delete ------ */}
                <button 
                    className="close"
                    onClick={()=>dispatch(deleteGoal(goal._id))}
                    >
                    <FaTrash color="red" size={20} />
                </button>
            </div>
            {/* -------1------- */}
            <h2>{goal.text}</h2>
        </div>
    );
}

export default GoalItem;
