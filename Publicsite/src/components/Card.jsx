import { Link } from "react-router";

export default function Card({movies}) {
    return (
        <div className="flex flex-col w-72 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-[1.02]">
            <Link to={`/${movies.id}`}>
                <img 
                    className="w-full h-96 object-cover" 
                    src={movies.imgUrl} 
                    alt={movies.title}
                />
            </Link>

            <div className="flex flex-col flex-grow p-5 text-gray-200">
                <h3 className="font-bold text-lg mb-2 text-white truncate text-center">
                    {movies.title}
                </h3>
                <p className="font-sans font-medium text-justify line-clamp-4 text-gray-400 text-sm mb-4">
                    {movies.synopsis}
                </p>

                <div className="mt-auto">
                    <Link 
                        to={movies.trailerUrl}
                        className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-md transition duration-200 w-full"
                    > 
                        Watch Trailer 
                    </Link>
                </div>

            </div>
        </div>
    )
}