import axios from "axios";
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import gifLoading from '../assets/fe_da_silva-loading-7528_512.gif'

export default function DetailMovie() {
    const {id} = useParams()
    const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchMovie() {
        try {
            setLoading(true)

            const {data} = await axios.get(`${BaseUrl}/${id}`)
            // console.log(data.pagination.totalPage);
            setMovie(data.data)
            // console.log(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    } 

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
    <div className="bg-gray-950 min-h-screen flex justify-center items-center p-6">
            {loading ? (
                <div className="flex justify-center items-center">
                    <img src={gifLoading} alt={movie.title} className="w-16 h-16" />
                </div>
            ) : (
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                    
                    <div className="md:w-5/12 flex-shrink-0">
                        <img
                            src={movie.imgUrl}
                            alt={movie.title}
                            className="w-full h-80 md:h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col flex-grow p-8 text-gray-200 justify-between">
                        <div>
                            <h2 className="font-bold text-3xl mb-3 text-white">
                                {movie.title}
                            </h2>

                            <div className="flex items-center gap-1 text-yellow-400 font-semibold text-base mb-4">
                                ⭐ <span>{movie.rating}</span>
                            </div>

                            <p className="font-sans font-medium text-justify text-gray-300 text-sm leading-relaxed mb-6">
                                {movie.synopsis}
                            </p>
                        </div>

                        <div>
                            <Link 
                                to={movie.trailerUrl}
                                className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-md transition duration-200 w-full md:w-auto"
                            >
                                Watch Trailer 🎬
                            </Link>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
 