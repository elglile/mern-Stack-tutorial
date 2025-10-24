import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import GoalItem from '../components/GoalItem'

function Dashboard() {
    // had star kaynadi l useNavigate bach n9dro nredirectiw l user ila ma kanch connecter
    const navigate = useNavigate()
    // -----1--------dispatsh part
    const dispatch = useDispatch()
    // had star kanjbd user mn redux store bach ncheckiw wach connecter wla la
    const {user} = useSelector((state) => state.auth)
    // -----2-------- useSelector part
    const {goals, isLoading, isError, message}= useSelector((state)=> state.goals)
    // -------------------------------
    // useEffect kat5dm mlli l component tloada awla tupdate
    
    useEffect(()=>{
        //  -----2-------- check isError part
        if(isError){
            console.log(message);
            
        }
        //  -----1-------- check user part
        if (!user) {
            navigate('/login')
        }
        //  -----2-------- fetch goals part
        dispatch(getGoals())
        //  -----2-------- cleanup part
        return ()=>{
            dispatch(reset())
        }
    }, [user, navigate,dispatch])
    // , isError, message -------------------------------
        //  -----2-------- loading part
    if(isLoading){
        return <Spinner/>
    }
    // -------------------------------
    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.username}</h1>
                <p>Goals Dashboard
                </p>
                <GoalForm />

                <div className="content">
                    {goals.length > 0 ?(
                        <div className="goals">
                            {goals.map((goal) =>(
                                <GoalItem key={goal._id} goal={goal} />
                            ))}
                        </div>
                    ): (
                        <h3>You have not set any goals</h3>
                    )}
                </div>
            </section>
        </>
    )
}

export default Dashboard
