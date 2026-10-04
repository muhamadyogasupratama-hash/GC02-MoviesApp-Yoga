import { Link, Navigate } from "react-router"
import Toastify from 'toastify-js'
import axios from 'axios'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BaseUrl } from "../constant/BaseUrl";
import gifLoading from '../assets/fe_da_silva-loading-7528_512.gif'
import Button from "../components/Button";
import Add from "../components/Add";

export default function Homepage () {
    const [movies, setMovies] = useState([])
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
    
    async function fetchDataMovies() {
        try {
            setLoading(true)

            const {data} = await axios.get(`${BaseUrl}/movies`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}` 
                }})
            // console.log(data.data[0]);

            setMovies(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataMovies()
    }, [])


    return (
        <div className='bg-gray-950 min-h-screen text-white'>
            <Navbar /> 
            <div className="max-w-full mx-auto px-12 py-2">
                <h1 className="text-2xl font-bold mb-6">Movie List Dashboard</h1>
                
                {loading ? (<>
                    <div className="flex justify-center mt-28">
                        <img src={gifLoading} />
                    </div>
                </>) : (<>
                    <div className="flex justify-end mb-2">
                        <Add to="/addMovie" >Add Movie</Add>
                    </div>
                    <table className="w-full text-left text-sm text-neutral-300 border-collapse">

                        <thead className="bg-neutral-800/60 text-xs font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800">
                        <tr>
                            <th className="px-6 py-4 rounded-tl-lg text-center">No</th>
                            <th className="px-6 py-4 text-center">Movie Name</th>
                            <th className="px-6 py-4 text-center">Genre</th>
                            <th className="px-6 py-4 text-center">Synopsis</th>
                            <th className="px-6 py-4 text-center">Rating</th>
                            <th className="px-6 py-4 text-center">Image URL</th>
                            <th className="px-6 py-4 text-center">Trailer URL</th>
                            <th className="px-6 py-4 text-center">Author Id</th>
                            <th className="px-6 py-4 text-center rounded-tr-lg">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800/70">
                            {movies.map((movie, index) => {
                                return (
                                <tr key={movie.id} className="hover:bg-neutral-800/40 transition-colors duration-200">
                                    <td className="px-6 py-4 font-medium text-neutral-400">{index + 1}</td>
                                    <td className="px-6 py-4 font-semibold text-white">{movie.title}</td>
                                    <td className="px-6 py-4 max-w-xs truncate text-neutral-400">
                                    {movie.Genre.name}
                                    </td>
                                    <td className="px-6 py-4 max-w-xs truncate text-neutral-400">
                                    {movie.synopsis}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500 border border-amber-500/20">
                                            ⭐ {movie.rating}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img 
                                                src={movie.imgUrl} 
                                                className="w-12 h-16 object-cover rounded shadow"
                                            />
                                            <Button element={movie}
                                            >Update Image</Button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={movie.trailerUrl} className="text-blue-400 hover:underline text-xs font-mono">{movie.trailerUrl}</Link>
                                    </td>
                                    <td className="px-6 py-4 max-w-xs truncate text-neutral-400 text-center">
                                    {movie.User.id}
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-2">
                                            <Button element={movie}
                                            >Edit</Button>
                                            <Button element={movie}
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