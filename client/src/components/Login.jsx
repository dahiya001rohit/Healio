import React from 'react'

const Login = ({atTop}) => {
  const error = false
  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-[90vh] border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center justify-center text-white gap-4 font-roboto-condensed'}>
            <div className='w-8/10 h-8/10 flex flex-col items-center justify-around bg-[#121212] rounded-3xl'>
                <div className='w-[80%] flex justify-center font-zalando-expanded text-4xl text-green-400 '>Welcome Back</div>
                <form className='w-full flex flex-col items-center'>
                    <div className='flex gap-4'>
                        <h4 className='mx-1 text-sm'>Enter your mail:</h4>
                        <input type="email" className='w-[20vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="forExample123@mail.com" />
                    </div>
                    <div className='flex gap-4 mt-3'>
                        <h4 className='mx-1  text-sm'>Enter your Password:</h4>
                        <input type="password" className='w-[20vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="Min 8 chars, 1 capital and 1 symbol"/>
                    </div>
                    {error && <div className='text-red-500 flex justify-center mt-3'>{error}</div>}
                    <div className='flex justify-center mt-2.5'>
                        <button type='submit' className='rounded-3xl px-[1.5vw] py-[0.5vh] bg-green-400 text-black'>Login</button>
                    </div>
                </form>
                <div className='flex justify-center items-center'>
                    <h5 className=' text-[0.9vw]'>New user? <span className='text-green-400 hover:underline'><a href="#">SignUp</a></span></h5>
                </div>
            </div>
        </div>
    )
}

export default Login
