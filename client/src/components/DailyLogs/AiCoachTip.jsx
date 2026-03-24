import React from 'react'

const AiCoachTip = () => {
  return (
    <div className="bg-[#111111] p-6 rounded-2xl card-border space-y-4 relative overflow-hidden group">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ade80]/10 blur-[80px] group-hover:bg-[#4ade80]/20 transition-all duration-700" />
      
      <div className="flex items-center gap-2">
        <span className="text-[12px] heading-syne font-[800] uppercase tracking-widest text-white">AI Coach</span>
        <span className="material-symbols-outlined text-[#4ade80] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>
      <p className="text-sm italic text-white leading-relaxed">
        "You're 38g short on protein. Add chicken or whey to hit your goal."
      </p>
      <a href="#" className="inline-block text-[11px] font-bold text-[#4ade80] tracking-widest hover:brightness-125 transition-all label-mono">
        ASK AI COACH →
      </a>
    </div>
  )
}

export default AiCoachTip
