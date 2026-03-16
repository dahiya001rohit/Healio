import React from 'react'

const AuthInput = ({ label, id, type = 'text', placeholder, value, onChange, required = true, rightElement, labelExtra }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 ml-1">
        <label className="block label-mono text-slate-500" htmlFor={id}>
          {label}
        </label>
        {labelExtra}
      </div>
      <div className="relative">
        <input 
          className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/50 focus:border-[#4ade80] transition-all font-dmsans text-sm ${rightElement ? 'pr-12' : ''}`}
          id={id} 
          name={id} 
          placeholder={placeholder} 
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 flex items-center justify-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthInput
