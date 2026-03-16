import React from 'react'

const SubmitButton = ({ text }) => {
  return (
    <button 
      className="w-full bg-[#4ade80] hover:bg-[#4ade80]/90 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group mt-6" 
      type="submit"
    >
      <span className="font-dmsans text-sm tracking-widest uppercase">{text}</span>
      <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
    </button>
  )
}

export default SubmitButton
