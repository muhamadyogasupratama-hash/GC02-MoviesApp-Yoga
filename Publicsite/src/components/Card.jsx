import { Link } from "react-router";

export default function Card({movies}) {
    return (
        <div className="flex flex-wrap gap-5 justify-around">
            <div className="card">
                <img className="flex justify-center"
                src={movies.imgUrl}
                />
                <div className="font-sans font-medium text-justify line-clamp-4 text-gray-200 text-sm mb-4 mt-auto p-5">
                    <p className="title">{movies.title}</p>
                    <p className="font-sans font-medium text-justify line-clamp-4 text-gray-200 text-sm mb-4">
                        {movies.synopsis}
                    </p>
                    <Link to={movies.trailerUrl}
                    className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-md transition duration-200 mt-4"
                    > Watch Trailer </Link>
                </div>
            </div>
        </div>
    )
}