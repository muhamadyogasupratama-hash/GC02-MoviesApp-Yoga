import Navbar from "../components/Navbar";
import axios from 'axios'
import { BaseUrl } from "../constant/BaseUrl";
import { useState } from "react";
import Toastify from 'toastify-js'
import { useNavigate } from "react-router";

export default function AddUser () {
    const navigate = useNavigate()
     const [form, setForm] = useState({
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    async function getFormData(fieldName, event) {
        let value = event.target.value

        setForm((prevData) => {
            return {
                ...prevData,
                [fieldName]: value
            }
        })
    }

    async function handleAddUserForm(event) {
        event.preventDefault()
        try {
            const {data} = await axios.post(`${BaseUrl}/users/register`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            navigate('/movies')
            
            Toastify({
            text: `Succeed add user ${data.data.email}`,
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
            // console.log(error);
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

    return (
    <div className='bg-gray-950 min-h-screen text-white'>
        <Navbar />
        <div className="max-w-xl mx-auto p-6 bg-gray-950 border border-gray-800 rounded-2xl shadow-xl mt-8">
            <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Register User</h2>
            
            <form onSubmit={handleAddUserForm} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Email Address</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={form.email}
                        onChange={(event) => getFormData('email', event)}
                        placeholder="Enter Email Address" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={form.password}
                        onChange={(event) => getFormData('password', event)}
                        placeholder="Enter Password" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Phone Number</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={form.phoneNumber}
                        onChange={(event) => getFormData('phoneNumber', event)}
                        placeholder="Enter PhoneNumber" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={form.address}
                        onChange={(event) => getFormData('address', event)}
                        placeholder="Enter Full Address" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <button 
                    type="submit" 
                    className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/50 transition-all duration-200 cursor-pointer"
                >
                    Submit Genre
                </button>
            </form>
        </div>
    </div>
    )
}