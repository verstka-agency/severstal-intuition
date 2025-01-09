import axios from 'axios'

export const apiProvider = axios.create({
    baseURL: `/api`,
})