import { Link } from "react-router";

export default function Button ({to, onClick, children}) {

    if (to) {
        return (
            <Link
                to={to}
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-[11px] font-medium py-1 px-2.5 rounded border border-neutral-700 transition duration-200 whitespace-nowrap"
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-[11px] font-medium py-1 px-2.5 rounded border border-neutral-700 transition duration-200 whitespace-nowrap"
        >
            {children}
        </button>
    )
}