import { Link } from "react-router";
import axios from "axios";
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";

export default function Card() {
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
    <div>
        <div className='bg-gray-950'>
            <h1 className='text-blue-400'>Movies</h1>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <br />
                    <br />
                    <form action="" className='text-blue-100'>
                    <input
                        style={{ borderRadius: 7 }}
                        type="text"
                        name="searchTitle"
                        placeholder="Search Movie"
                    />
                    <input
                        style={{ borderRadius: 7 }}
                        type="text"
                        name="searchGenre"
                        placeholder="Search Genre"
                    />
                    <input
                        style={{ borderRadius: 7 }}
                        type="submit"
                        defaultValue="Search"
                    />
                    <select name="sort" style={{ borderRadius: 7 }}>
                        <option value="Sort Movie" selected="" disabled="">
                        Sort Movie
                        </option>
                        <option value="Terbaru">Terbaru</option>
                        <option value="Terlama">Terlama</option>
                    </select>
                    </form>
                </nav>
            </div>
            <br />
            <div className="page">
                {movies.map(el => {
                    return (
                    <div className="card" key={el.id}>
                        <img
                        style={{ display: "flex", justifyContent: "center" }}
                        src={el.imgUrl}
                        />
                        <div className="content">
                            <p className="title">{el.title}</p>
                            <p className="synopsis">
                                {el.synopsis}
                            </p>
                            <Link to={el.trailerUrl}> Watch Trailer </Link>
                        </div>
                    </div>
                    )
                })}
            </div>
        {/* <div className="flex flex-wrap gap-5 justify-around ">
            <div className="w-3 box-border rounded-4xl flex flex-col items-center">
                {movie.imageUrl}
                <div>
                    <p>{movie.title}</p>
                    <p>{movie.synopsis}</p>
                    <Link to={movie.trailerUrl} />
                </div>
            </div>
        </div> */}
        </div>
    </div>
    )
}
