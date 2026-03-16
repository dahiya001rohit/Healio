import React from 'react'

const AiCoach = () => {
  return (
    <div className="bg-[#111111] card-border rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group shrink-0 h-[162px]">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ade80]/10 blur-[80px] group-hover:bg-[#4ade80]/20 transition-all duration-700" />
      
      <div>
        <p className="label-mono text-[#4ade80] mb-2 flex items-center gap-1 text-[10px] leading-none">
          <span className="material-symbols-outlined text-[12px]">auto_awesome</span> AI COACH
        </p>
        <h4 className="heading-syne text-[13px] text-white mb-2 leading-tight">
          &ldquo;YOUR RECOVERY IS OPTIMAL FOR A HEAVY SESSION TODAY.&rdquo;
        </h4>
        <p className="text-slate-400 text-[10px] leading-snug font-light">
          Heart rate variability is up 12% and sleep quality index reached 88/100.
          Recommendation: Push for a new PR in Deadlifts.
        </p>
      </div>

      <button className="flex items-center gap-1 text-[#4ade80] text-[9px] font-bold uppercase tracking-widest group cursor-pointer mt-auto">
        VIEW TRAINING PLAN
        <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  )
}

export default AiCoach
