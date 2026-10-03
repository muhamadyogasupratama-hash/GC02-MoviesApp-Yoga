import { Link } from "react-router";

export default function Add ({children, to}) {
    return (
        <Link
            to={to}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium tracking-wide py-2 px-4 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200 inline-flex items-center justify-center"
        >
            {children}
        </Link>
    )
}