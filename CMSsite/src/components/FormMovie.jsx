export default function FormMovie ({ genres = [], formName, onSubmit, onChange, form }) {


    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-950 border border-gray-800 rounded-2xl shadow-xl mt-8">
            <h2 className="text-xl font-bold text-white mb-6 tracking-wide">{formName}</h2>
            
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={form.title}
                        onChange={(e) => onChange('title', e)}
                        placeholder="Enter movie title" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Synopsis</label>
                    <textarea 
                        name="synopsis" 
                        value={form.synopsis}
                        onChange={(e) => onChange('synopsis', e)}
                        placeholder="Enter movie synopsis" 
                        rows="3"
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Image URL</label>
                    <input 
                        type="text" 
                        name="imgUrl" 
                        value={form.imgUrl}
                        onChange={(e) => onChange('imgUrl', e)}
                        placeholder="https://example.com/poster.jpg" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Trailer URL</label>
                    <input 
                        type="text" 
                        name="trailerUrl" 
                        value={form.trailerUrl}
                        onChange={(e) => onChange('trailerUrl', e)}
                        placeholder="https://moviescinema/..." 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Rating</label>
                    <input 
                        type="number" 
                        value={form.rating}
                        onChange={(e) => onChange('rating', e)}
                        name="rating" 
                        placeholder="e.g. 8.5" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Genre</label>
                    <select 
                        name="genreId" 
                        value={form.genreId}
                        onChange={(e) => onChange('genreId', e)}
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    >
                        <option value="" disabled>Choose Genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button 
                    type="submit" 
                    className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/50 transition-all duration-200 cursor-pointer"
                >
                    Submit Movie
                </button>
            </form>
        </div>
    )
}