import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/Auth/AuthLayout'
import AuthInput from '../components/Auth/AuthInput'
import GoogleAuthSection from '../components/Auth/GoogleAuthSection'
import SubmitButton from '../components/Auth/SubmitButton'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const passwordToggleBtn = (
    <button 
      className="text-slate-500 hover:text-white cursor-pointer" 
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      <span className="material-symbols-outlined text-xl">
        {showPassword ? 'visibility' : 'visibility_off'}
      </span>
    </button>
  )

  const forgotPasswordLink = (
    <a className="label-mono text-[#4ade80]/80 hover:text-[#4ade80]" href="#">Forgot?</a>
  )

  return (
    <AuthLayout maxWidth="max-w-[440px]">
      <header className="mb-10 text-center md:text-left">
        <h2 className="heading-syne text-3xl tracking-tight text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-slate-400 text-sm font-dmsans">
          Access your performance metrics and recovery plans.
        </p>
      </header>

      <form action="#" className="space-y-6" method="POST">
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
          type={showPassword ? 'text' : 'password'} 
          rightElement={passwordToggleBtn}
          labelExtra={forgotPasswordLink}
        />
        <SubmitButton text="Log In" />
      </form>

      <GoogleAuthSection />

      <footer className="mt-10 text-center">
        <p className="font-dmsans text-[13px] text-slate-500">
          Don&apos;t have an account? 
          <Link className="text-[#4ade80] hover:underline underline-offset-4 ml-1 font-medium" to="/signup">Sign up</Link>
        </p>
      </footer>
    </AuthLayout>
  )
}

export default Login
