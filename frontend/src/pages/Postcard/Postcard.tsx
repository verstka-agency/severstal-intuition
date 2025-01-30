import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Postcard = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        navigate("/", {
            replace: true
        })
    }, [navigate])

    return (
        <div><img src={`/postcards/${id}.png`} alt=""/></div>
    )
}
export default Postcard