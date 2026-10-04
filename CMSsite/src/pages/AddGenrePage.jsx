import Navbar from "../components/Navbar";
import axios from 'axios'
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Toastify from 'toastify-js'
import FormGenre from "../components/FormGenre";

export default function AddGenrePage () {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
    })

    async function getFormData(fieldName, event) {
        let value = event.target.value
       
        setForm((prevData) => {
            return {
                ...prevData,
                [fieldName]: value
            }
        })
        
    }

    async function handleAddForm(event) {
        event.preventDefault()
        try {
            const {data} = await axios.post(`${BaseUrl}/genres`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            navigate('/genres')
            
            Toastify({
            text: `Succeed add genre ${data.data.name}`,
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#34D399",
                color: "#f8faf6b1"
            },
            }).showToast();
        } catch (error) {
            // console.log(error);
            Toastify({
            text: error.response.data.message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ca4c30",
                color: "#b3b7adb1)"
            },
            }).showToast();

        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray-950 min-h-screen text-white max-w-full mx-auto px-12 py-2">
                <FormGenre 
                    formName="Add Genre" 
                    onSubmit={handleAddForm} 
                    onChange={getFormData}
                    form={form}
                    />
            </div>
        </>
    )
}