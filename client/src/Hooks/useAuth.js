import { useState, useEffect } from "react";

const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const t = localStorage.getItem('token')
        if(!t) return
        setToken(t)
        try {
            const payload = JSON.parse(atob(t.split('.')[1]))
            if(payload.exp * 1000 < Date.now()){
                localStorage.removeItem('token')
                alert('Session expired. Please log in again.')
                window.location.href = '/login'
            }
            setUser(payload)
        } catch (error) {
            localStorage.removeItem('token')
            alert('Invalid session. Please log in again.')
            window.location.href = '/login'
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
        window.location.href = '/login'
    }

    return{
        token,
        user,
        logOut,
        isAuthenticated: !!token
    }
}

export default useAuth