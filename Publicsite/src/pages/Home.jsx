import Card from "../components/Card";
import axios from "axios";
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Home() {
    const [movies, setMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    const [searchGenre, setSearchGenre] = useState('')
    const [sort, setSort] = useState('ASC')
    const [page, setPage] = useState(1)

    async function fetchMovies() {
        try {
            "?searchTitle=&searchGenre=thriller&page=&sort="
            const {data} = await axios.get(`${BaseUrl}?searchTitle=${searchTitle}&searchGenre=${searchGenre}&page=${page}&sort=ASC`)
            // console.log(data.pagination);
            setMovies(data.data)
        } catch (error) {
            // console.log(error);
        }
    } 

    useEffect(() => {
        fetchMovies()
    }, [searchTitle, searchGenre, sort, page])

    return (
        <>
        <div>
            <div className='bg-gray-950'>
                <div>
                    <form className='flex flex-wrap items-center justify-end gap-3 w-full md:w-auto text-blue-100 pr-10'>
                        <input
                            className="border-1 rounded-2xl p-1"
                            type="text"
                            name="searchTitle"
                            placeholder="Search Movie"
                            onChange={(event)=> setSearchTitle(event.target.value)}
                        />
                        <input
                            className="border-1 rounded-2xl p-1"
                            type="text"
                            name="searchGenre"
                            placeholder="Search Genre"
                            onChange={(event)=> setSearchGenre(event.target.value)}
                        />
                        {/* <input
                            className="border-1 rounded-2xl p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                            type="submit"
                            defaultValue="Search"
                        /> */}
                        <select 
                        name="sort" 
                        className="border-1 rounded-2xl p-1"
                        value={sort}
                        onChange={(event) => setSort(event.target.value)}
                        >
                            <option value="" disabled >
                            Sort Movie
                            </option>
                            <option value="ASC"  >Terbaru</option>
                            <option value="DESC" >Terlama</option>
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
                <div className="flex justify-center gap-2 p-10">
                    <Link className="border-1 rounded-2xl p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    ⬅️ Prev Page
                    </Link>    
                    <Link className="border-1 rounded-2xl p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    1
                    </Link>    
                    <Link className="border-1 rounded-2xl p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    Next Page ➡️
                    </Link>    
                </div>            
            </div>
        </div>
        </>
    )
}