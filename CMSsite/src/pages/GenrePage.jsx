import { Link, Navigate } from "react-router"
import Toastify from 'toastify-js'
import axios from 'axios'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BaseUrl } from "../constant/BaseUrl";
import gifLoading from '../assets/fe_da_silva-loading-7528_512.gif'
import Button from "../components/Button";
import Add from "../components/Add"

export default function Genre () {
    const [genre, setGenre] = useState([])
    const [loading, setLoading] = useState(false)
    
    if (!localStorage.access_token) {
        Toastify({
        text: "Please login first",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#ca4c30",
            color: "#b3b7adb1)"
        },
        }).showToast();

        return <Navigate to="/" />
    }
    
    async function fetchDataGenres() {
        try {
            setLoading(true)

            const {data} = await axios.get(`${BaseUrl}/genres`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}` 
                }})
            // console.log(data.data[0]);

            setGenre(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataGenres()
    }, [])


    return (
    <div className='bg-gray-950 min-h-screen text-white'>
        <Navbar /> 
        <div className="max-w-full mx-auto px-12 py-2">
            <h1 className="text-2xl font-bold mb-6">Genre List Dashboard</h1>
            
            {loading ? (<>
                <div className="flex justify-center mt-28">
                    <img src={gifLoading} />
                </div>
            </>) : (<>
                <div className="flex justify-end mb-2">
                    <Add to="/genres" >Add Genre</Add>
                </div>
                <table className="w-full text-left text-sm text-neutral-300 border-collapse">

                    <thead className="bg-neutral-800/60 text-xs font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800">
                    <tr>
                        <th className="px-6 py-4 rounded-tl-lg text-center">No</th>
                        <th className="px-6 py-4 rounded-tl-lg text-center">Genre Name</th>
                        <th className="px-6 py-4 text-center rounded-tr-lg">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/70">
                        {genre.map((gen, index) => {
                            return (
                            <tr key={gen.id} className="hover:bg-neutral-800/40 transition-colors duration-200 text-center">
                                <td className="px-6 py-4 font-medium text-neutral-400">{index + 1}</td>
                                <td className="px-6 py-4 font-semibold text-white">{gen.name}</td>
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex justify-center gap-2">
                                        <Button key={gen.id}
                                                element={gen}
                                        >Edit</Button>
                                        <Button key={gen.id}
                                                element={gen}
                                        >Delete</Button>
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>)}
        </div>
    </div>
    )
}