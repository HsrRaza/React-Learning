import axios from "axios"

export const  http = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})