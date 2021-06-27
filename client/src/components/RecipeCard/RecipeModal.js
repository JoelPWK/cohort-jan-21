import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Axios from 'axios'

function RecipeModal() {
    const {id} = useParams()
    const[post,setPost] = useState()

    useEffect(()=>{
        async function fetchPost() {
            try {
                const response = await Axios.get(`http://localhost:3001/recipe/${id}`)
                setPost(response.data)
            } catch(e) {
                console.log("there seems to be an error")
            }
        }
        fetchPost()
        
    },[])
    return (
        <div>
            <h2>{post.name}</h2>
            
        </div>
    )
}

export default RecipeModal
