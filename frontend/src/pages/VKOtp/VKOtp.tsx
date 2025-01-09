import React, { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const VKOtp = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const { mutate, isLoading, isSuccess } = useMutation({
        mutationFn: async () => {
            try {
                const response = await axios.post("https://id.vk.com/oauth2/auth", {
                        grant_type: "authorization_code",
                        code: searchParams.get("code"),
                        client_id: searchParams.get("client_id"),
                        device_id: searchParams.get('device_id'),
                        state: searchParams.get('state'),
                        redirect_uri: "https://d633-91-205-198-66.ngrok-free.app/"
                    },
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })

                console.log("response", response)
            } catch (error) {
                console.error(error)
            }
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    if (isLoading && !isSuccess) {
        return null
    }

    return <Navigate to={"/profile"}/>
}

export default VKOtp