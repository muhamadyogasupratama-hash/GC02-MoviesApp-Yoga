import Card from "../components/Card";
import axios from "axios";
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import gifLoading from '../assets/blendertimer-load-37.gif'

export default function Home() {
    const [movies, setMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    const [searchGenre, setSearchGenre] = useState('')
    const [sort, setSort] = useState('ASC')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    async function fetchMovies() {
        try {
            setLoading(true)

            const {data} = await axios.get(`${BaseUrl}?searchTitle=${searchTitle}&searchGenre=${searchGenre}&page=${page}&sort=${sort}`)
            // console.log(data.pagination.totalPage);
            setMovies(data.data)
            setTotalPages(data.pagination.totalPage);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false)
        }
    } 

    useEffect(() => {
        fetchMovies()
    }, [searchTitle, searchGenre, sort, page])

    function PaginationPage() {
        let pages = []
        for (let i = 1; i <= totalPages; i++) {
            const isActivePage = i === page;

            pages.push(
                <Link
                    key={i}
                    onClick={() => setPage(i)}
                    className={`border-1 rounded-2xl p-1 font-bold py-1 px-3 rounded transition-colors ${
                        isActivePage 
                            ? "bg-blue-900 text-yellow-300 border-yellow-300 underline" 
                            : "bg-blue-500 hover:bg-blue-700 text-white"
                    }`}
                >
                    {i}
                </Link>
            )
        }
        return pages;
    }

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
                            onChange={(event)=> {
                                setSearchTitle(event.target.value)
                                setPage(1)
                            }} 
                        />
                        <input
                            className="border-1 rounded-2xl p-1"
                            type="text"
                            name="searchGenre"
                            placeholder="Search Genre"
                            onChange={(event)=> {
                                setSearchGenre(event.target.value)
                                setPage(1)
                            }}
                            
                        />
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
                {loading? 
                    (<>
                        <div className="flex justify-center mt-28">
                            <img src={gifLoading} />
                        </div>
                    </>) 
                    : 
                    (<>
                        <div className="flex flex-wrap gap-6 justify-center p-6">
                        {movies.map((movie)=> {
                            return (
                                <Card key={movie.id} movies={movie} />
                            )
                        })}
                        </div>
                    
                    </>)}
                <div className="flex justify-center gap-2 p-10">
                    <Link 
                        disabled={page === 1}
                        className={`border-1 rounded-2xl p-1 font-bold py-1 px-3 rounded ${
                            page === 1 ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"
                        }`}
                        onClick={(event) => {
                            event.preventDefault()
                            if (page >1) setPage (page - 1)
                        }}
                    >
                    ⬅️ Prev Page
                    </Link>   

                    {PaginationPage()}

                    <Link 
                        disabled={page === totalPages}
                        className={`border-1 rounded-2xl p-1 font-bold py-1 px-3 rounded ${
                            page === totalPages ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"
                        }`}
                    onClick={(event) => {
                        event.preventDefault()
                        if(page < totalPages) setPage(page + 1)
                    }}
                    >
                    Next Page ➡️
                    </Link>    
                </div>            
            </div>
        </div>
        </>
    )
}