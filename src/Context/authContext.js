import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    let navigate = useNavigate()

    const [user, setUser] = useState(null)
    const signed = !!user

    useEffect(() => {
        const storage = localStorage.getItem('F:token')

        if (storage) {
            api.defaults.headers.Authorization = `Bearer ${storage}`
            const postUrl = `${window.location.pathname}`

            api.get(postUrl).then(response => {
                setUser(response.data.user)
                console.log(response.data.user._id)

            })

        }

    }, []);

    async function authenticate({ email, password }) {
        const response = await api.post("/auth/login", { email, password })
        const { token, user } = response.data

        localStorage.setItem('F:token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`
        setUser(user)
        const userId = user?._id
        navigate(`/user/${userId}`)


    }

    function logOut() {
        setUser(null)
        localStorage.removeItem('F:token')
        navigate('/')

    }

    return (
        <AuthContext.Provider value={{ signed, user, authenticate, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

