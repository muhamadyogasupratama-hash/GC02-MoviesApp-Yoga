export default function FormGenre ({ formName, onSubmit, onChange, form }) {


    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-950 border border-gray-800 rounded-2xl shadow-xl mt-8">
            <h2 className="text-xl font-bold text-white mb-6 tracking-wide">{formName}</h2>
            
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-400">Genre Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name}
                        onChange={(e) => onChange('name', e)}
                        placeholder="Enter Genre" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                <button 
                    type="submit" 
                    className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/50 transition-all duration-200 cursor-pointer"
                >
                    Submit Genre
                </button>
            </form>
        </div>
    )
}