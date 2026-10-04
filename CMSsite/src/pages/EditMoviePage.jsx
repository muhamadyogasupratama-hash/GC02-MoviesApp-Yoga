import FormMovie from "../components/FormMovie";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { BaseUrl } from "../constant/BaseUrl";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Toastify from 'toastify-js'

export default function EditMoviePage () {
    const [genre, setGenre] = useState([]) 
    const navigate = useNavigate()
    const {id} = useParams()
    const [form, setForm] = useState({
        title: '',
        synopsis: '',
        trailerUrl: '',
        imgUrl: '',
        rating: 1,
        genreId: ''

    })

    async function getFormData(fieldName, event) {
        let value = event.target.value
        if (fieldName === 'rating') {
            value = +event.target.value
        }

        setForm((prevData) => {
            return {
                ...prevData,
                [fieldName]: value
            }
        })
        
    }

    async function fetchDataMovies() {
        try {
            const {data} = await axios.get(`${BaseUrl}/movies/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            console.log(data.data);
            setForm({
                title: data.data.title,
                synopsis: data.data.synopsis,
                trailerUrl: data.data.trailerUrl,
                imgUrl: data.data.imgUrl,
                rating: data.data.rating,
                genreId: data.data.genreId
            })

        } catch (error) {
            // console.log(error);
        }
    }

    async function handleEditForm(event) {
        event.preventDefault()
        try {
            const {data} = await axios.put(`${BaseUrl}/movies/${id}`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            navigate('/movies')
            
            Toastify({
            text: `Succeed edit data ${data.data.title}`,
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

    async function fetchDataGenre () {
        try {
            const {data} = await axios.get(`${BaseUrl}/genres`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            // console.log(data.data);
            setGenre(data.data)
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

    useEffect(() => {
        fetchDataMovies()
        fetchDataGenre()

    }, [id])

    return (
        <>
            <Navbar />
            <div className="bg-gray-950 min-h-screen text-white max-w-full mx-auto px-12 py-2">
                <FormMovie
                    genres={genre} 
                    formName="Edit Movie" 
                    onSubmit={handleEditForm} 
                    onChange={getFormData}
                    form={form}
                    />
            </div>
        </>
    )
}