import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/Auth/AuthLayout'
import AuthInput from '../components/Auth/AuthInput'
import GoogleAuthSection from '../components/Auth/GoogleAuthSection'
import SubmitButton from '../components/Auth/SubmitButton'

const SignUp = () => {
  return (
    <AuthLayout maxWidth="max-w-[400px]">
      <header className="mb-8 text-center md:text-left">
        <h1 className="heading-syne text-2xl tracking-tight text-white mb-2">
          Start Your Journey
        </h1>
        <p className="text-slate-400 text-sm font-dmsans">
          Create an account to track precision data.
        </p>
      </header>

      <form action="#" className="space-y-5" method="POST">
        <AuthInput 
          id="full-name" 
          label="Full Name" 
          placeholder="John Doe" 
        />
        <AuthInput 
          id="email" 
          label="Email Address" 
          placeholder="name@healio.com" 
          type="email" 
        />
        <AuthInput 
          id="password" 
          label="Password" 
          placeholder="••••••••" 
          type="password" 
        />
        <SubmitButton text="Create Account" />
      </form>

      <GoogleAuthSection />

      <footer className="mt-10 text-center">
        <p className="font-dmsans text-[13px] text-slate-500">
          Already have an account? 
          <Link className="text-[#4ade80] hover:underline underline-offset-4 ml-1 font-medium" to="/login">Log in</Link>
        </p>
      </footer>
    </AuthLayout>
  )
}

export default SignUp
