import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
        <div className="bg-gray-950 p-5">
            <h1 className='text-4xl font-bold tracking-[0.2em] text-white hover:text-blue-500 border-l-4 border-blue-600 pl-4 py-2 my-0 m-6 transition-colors duration-300 cursor-pointer drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:text-cyan-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 cursor-pointer'>Movies Cinema</h1>
            <nav className="bg-gray-950 px-8 py-6 border-b border-gray-900 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <Link to="/" className="text-gray-300 hover:text-white font-semibold text-sm px-4 py-1 rounded-full bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 hover:border-blue-500/40 shadow-sm transition-all duration-300 ease-out select-none ">Home</Link>
            </nav>
        </div>
        </>
    )
    
}