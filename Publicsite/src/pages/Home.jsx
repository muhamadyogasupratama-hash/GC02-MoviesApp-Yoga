import Card from "../components/Card";
import axios from "axios";
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";

export default function Home() {
    const [movies, setMovies] = useState([])

    async function fetchMovies() {
        try {
            const {data} = await axios.get(BaseUrl)
            // console.log(data.data);

            setMovies(data.data)
        } catch (error) {
            // console.log(error);
        }
    } 

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
        <div>
            <div className='bg-gray-950'>
                <div>
                    <form action="" className='flex flex-wrap items-center justify-end gap-3 w-full md:w-auto text-blue-100 pr-10'>
                        <input
                            className="border-1 rounded-2xl p-1"
                            type="text"
                            name="searchTitle"
                            placeholder="Search Movie"
                        />
                        <input
                            className="border-1 rounded-2xl p-1"
                            type="text"
                            name="searchGenre"
                            placeholder="Search Genre"
                        />
                        <input
                            className="border-1 rounded-2xl p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                            type="submit"
                            defaultValue="Search"
                        />
                        <select name="sort" className="border-1 rounded-2xl p-1">
                            <option value="Sort Movie" >
                            Sort Movie
                            </option>
                            <option value="Terbaru">Terbaru</option>
                            <option value="Terlama">Terlama</option>
                        </select>
                    </form>
                </div>
                <br />
                <div className="flex flex-wrap gap-6 justify-center p-6">
                {movies.map((movie)=> {
                    return (
                        <Card key={movie.id} movies={movie} />
                    )
                })}
                </div>
            </div>
        </div>
        </>
    )
}