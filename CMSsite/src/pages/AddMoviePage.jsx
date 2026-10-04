import Form from "../components/Form";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { BaseUrl } from "../constant/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function AddMoviePage () {
    const [genre, setGenre] = useState([]) 
    const navigate = useNavigate()

    async function handleAddForm() {
        const [] = useParams()
        navigate('/movies')
        
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
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDataGenre()
    }, [])

    return (
        <>
            <Navbar />
            <div className="bg-gray-950 min-h-screen text-white max-w-full mx-auto px-12 py-2">
                <Form genres={genre} formName="Add Movie" onSubmit={handleAddForm} />
            </div>
        </>
    )
}