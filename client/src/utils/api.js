import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API
})

api.interceptors.request.use(req => {
    const token = localStorage.getItem('token')
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

api.interceptors.response.use(res => res, err => {
    if(err.response?.status === 401){
        console.log(err)
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return Promise.reject(err)
})

export default api