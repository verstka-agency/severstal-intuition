import axios from 'axios'

export const apiProvider = axios.create({
    // baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
    baseURL: `/api`,
})