import React from 'react'

const AuthLayout = ({ children, maxWidth = 'max-w-[400px]' }) => {
  return (
    <div className="relative w-full h-screen min-h-[800px] flex justify-center items-center overflow-hidden bg-brand-black">
      {/* Background Layers matching Landing & Dashboard */}
      <div className="hero-bg-layers" />
      
      {/* Main Content */}
      <main className="w-full px-4 flex justify-center items-center relative z-10">
        <section className={`bg-[#111111] card-border w-full ${maxWidth} p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col`}>
          {children}
        </section>
      </main>
    </div>
  )
}

export default AuthLayout
