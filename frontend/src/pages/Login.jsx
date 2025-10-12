import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  })
  const onchange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const onSubmit = (e)=>{
      e.preventDefault()
  }
  const {email, password} = formData
  return (
    <>
    <div class="grid  md:grid-cols-5 h-[87.7vh]">
  <section class=" md:col-span-3 hidden md:block">
        <img 
          className="w-full  h-[87.7vh]"
          src="https://d3oofn3y8h5efg.cloudfront.net/webcluesinfotech/1737723875384_image-(2).jpg" 
          alt="" 
          />
  </section>
  <section class=" md:col-span-2 ">
    <form
        className="max-w-sm mx-auto p-4 text-gray-500 rounded-xl shadow mt-10 py-20
        "
        onSubmit={onSubmit}
          >
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>



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
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              
            >
              Login
            </button>                          
            <div className="text-center text-sm mt-3 ">
                    <Link to='/Register' className=" text-blue-400 font-mono">
                        Register
                    </Link>
            </div>
          </form>
  </section>
</div>

    </>
  )
}
