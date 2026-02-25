import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = ({atTop, isLogged}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(isLogged){
        navigate('/')
        }
    })

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const validatePassword = (passwordValue) => {
        // Min 8 chars, at least 1 capital letter, at least 1 symbol
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
        return regex.test(passwordValue)
    }

    const validateName = (nameValue) => {
        if (nameValue.trim() === "") return false;
        return true;
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const handleOnSubmit = async (e) =>{
        e.preventDefault()

        if(!validateName(name)){
            setError('Invalid Name')
            return
        }
        if(!validateEmail(email)){
            setError('Invalid Email')
            return
        }
        if(!validatePassword(password)){
            setError('Invalid Password')
            return
        }

        try {
            const res = await api.post('/signup', { name, email, password })
            if(res.data.error) { 
                setError(res.data.error) 
                return 
            }
            console.log(res.data)
            setName('')
            setEmail('')
            setPassword('')
            setError('')
            localStorage.setItem('token', res.data.token)
            window.location.href = "/"
        } catch (error) {
            setError('Login failed: ' + error.message)
            return
        }
    }
  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-[90vh] border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center justify-center text-white gap-4 font-roboto-condensed'}>
            <div className='w-8/10 h-8/10 flex flex-col items-center justify-around bg-[#121212] rounded-3xl'>
                <div className='w-[80%] flex justify-center font-zalando-expanded text-4xl text-green-400 '>Welcome New User</div>
                <form className='w-full flex flex-col items-center' onSubmit={handleOnSubmit}>
                    <div className='flex gap-4 items-center'>
                        <h4 className='mx-1 text-sm'>Name:</h4>
                        <input type="text" className='min-w-50 w-[20vw] border border-green-400 text-md py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="Name" value={name} onChange={(e) => setName(e.target.value) }/>
                    </div>
                    <div className='flex gap-4 mt-3 items-center'>
                        <h4 className='mx-1 text-sm'>Enter your mail:</h4>
                        <input type="email" className='min-w-50 w-[20vw] border border-green-400 text-[md py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="forExample123@mail.com" value={email} onChange={(e) => setEmail(e.target.value) } />
                    </div>
                    <div className='flex gap-4 mt-3 items-center'>
                        <h4 className='mx-1  text-sm'>Enter your Password:</h4>
                        <input type="password" className='min-w-50 w-[20vw] border border-green-400 text-md py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="Min 8 chars, 1 capital and 1 symbol" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                    {error && <div className='text-red-500 flex justify-center mt-3'>{error}</div>}
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className='rounded-3xl px-[1.5vw] py-[0.5vh] bg-green-400 text-xl text-black'>Register</button>
                    </div>
                </form>
                <div className='flex justify-center items-center'>
                    <span className='text-md'>New user? <Link to='/login' className='text-green-400 hover:underline'>Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignUp
