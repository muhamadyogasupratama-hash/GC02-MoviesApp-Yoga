import Navbar from "../components/Navbar";
import axios from 'axios'
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Toastify from 'toastify-js'

export default function UploadImgMovie () {
    const navigate = useNavigate()
    const {id} = useParams()
    const [movie, setMovie] = useState('')
    const [imageFile, setImageFile] = useState(null)

    async function fetchDataMovies() {
        try {
            const {data} = await axios.get(`${BaseUrl}/movies/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            // console.log(data.data);
            setMovie(data.data)
            // console.log(data.data.title);

        } catch (error) {
            // console.log(error);
        }
    }

    async function handleEditForm(event) {
        event.preventDefault()
        try {
            const formData = new FormData()

            if (imageFile) {
                formData.append('image', imageFile)
            }

            const {data} = await axios.patch(`${BaseUrl}/movies/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            navigate('/movies')
            
            Toastify({
            text: `Succeed upload image ${data.data.title}`,
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

    useEffect(() => {
        fetchDataMovies()
    }, [id])

    return (
        <>
            <div className="bg-gray-950 min-h-screen text-white">
                <Navbar />
                <div className="max-w-xl mx-auto p-6 bg-gray-950 border border-gray-800 rounded-2xl shadow-xl mt-8">
                    <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Upload New Image Movie</h2>
                    <img src={movie.imgUrl}  />
                    <h5 className="text-center p-2 decoration-blue-100">{movie.title}</h5>
                    <form onSubmit={handleEditForm} className="flex flex-col gap-4">
        
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-400">Choose Image File</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={(e) => setImageFile(e.target.files[0])}
                                className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/50 transition-all duration-200 cursor-pointer"
                        >
                            Upload Movie Image
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}