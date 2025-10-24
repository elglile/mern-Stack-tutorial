import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// useSelector bach using the states like user, isloding, isErr  ...
// useDispatch bach using for despatsh the fcts like register , async , reset ...
import { useSelector, useDispatch } from "react-redux"
// 
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner";



export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  })
  const { email, password } = formData

  // ----------- 2 ------------------------------------------------------
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth)
  //------------------------------------------------------------------------

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    // reset always comes last and outside the conditions
    // but must not block navigation
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
        email,
        password
      }
      dispatch(login(userData))
  }
    if (isLoading) {
      return <Spinner />
    }
  //------------------------------------------------------------------------
  
  return (
    <>
    <div className="grid md:grid-cols-5 h-[87.7vh]">
      
      {/* hadi lpart ta3 tswira */}
      <section className="md:col-span-3 hidden md:block">
        <img 
          className="w-full h-[87.7vh]"
          src="https://d3oofn3y8h5efg.cloudfront.net/webcluesinfotech/1737723875384_image-(2).jpg" 
          alt="" 
        />
      </section>

      {/* hadi lpart ta3 form */}
      <section className="md:col-span-2">
        <form
          className="max-w-sm mx-auto p-4 text-gray-500 rounded-xl shadow mt-10"
          onSubmit={onSubmit}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>


          {/* input ta3 email */}
          <label className="block mb-2 text-start font-mono">
            Email:
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 rounded bg-white border border-gray-200 focus:outline-none"
              id="email"
              value={email}
              placeholder="enter your email"
              onChange={onchange}
            />
          </label>

          {/* input ta3 password */}
          <label className="block mb-2 text-start font-mono">
            Password:
            <input
              type="password"
              name="password"
              required
              className="w-full mt-1 p-2 rounded bg-white border border-gray-200 focus:outline-none"
              id="password"
              value={password}
              placeholder="enter your password"
              onChange={onchange}
            />
          </label>


          {/* btn ta3 submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Login
          </button>

          {/* lien bach ymchi l login */}
          <div className="text-center text-sm mt-3">
            <Link to="/register" className="text-blue-400 font-mono">
              Register
            </Link>
          </div>
        </form>
      </section>
    </div>

    </>
  )
}
