import axios from 'axios'
import { useState } from "react"
import { Navigate, useNavigate } from "react-router"
import Toastify from 'toastify-js'
import {BaseUrl} from '../constant/BaseUrl'

export default function LoginPage () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault()
        // console.log('tombol di klik', email, password);
        try {
            const {data} = await axios.post(BaseUrl, {email, password})
            console.log(data.access_token);
            
            localStorage.setItem('access_token', data.access_token)
            navigate('/movies')
            
            // console.log(response);
            Toastify({
            text: "Login Success",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#34D399",
                color: "#f8faf6b1"
            },
            }).showToast();

        } catch (error) {
            // console.log(error.response.data.message);
            Toastify({
            text: error.response.data.message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ca4c30",
                color: "#b3b7adb1)"
            },
            }).showToast();
            
        }
    }

    if (localStorage.access_token) {
         Toastify({
            text: "You already logged in",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#151515",
                color: "#f8faf6b1"
            },
            }).showToast();
        return <Navigate to='/movies' />
    } 


    return (
        <div className="bg-gray-950 min-h-screen w-full text-white flex flex-col justify-between p-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white border-l-4 border-blue-600 pl-4 py-2 my-0 m-2 transition-colors duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] cursor-pointer">
                    Movies Cinema Back Office
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow px-4">
                <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
                    
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold tracking-wider text-white">Welcome</h3>
                        <p className="text-gray-400 text-sm mt-1">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@example.com"
                                onChange={(event)=> setEmail(event.target.value)} 
                                className="bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="••••••••"
                                onChange={(event)=> setPassword(event.target.value)}
                                className="bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-lg shadow-blue-600/20 active:scale-[0.99]"
                        >
                            Sign In
                        </button>
                    </form>

                </div>
            </div>
            <div className="invisible">Footer</div>
        </div>
    )
}