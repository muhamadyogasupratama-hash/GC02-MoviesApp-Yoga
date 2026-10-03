import { Navigate } from "react-router"
import Toastify from 'toastify-js'

export default function Homepage () {

    if (!localStorage.access_token) {
        Toastify({
        text: "Please login first",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#ca4c30",
            color: "#b3b7adb1)"
        },
        }).showToast();

        return <Navigate to="/" />
    }

    return (
        <div>
            halo tes masuk homepage
        </div>
    )
}