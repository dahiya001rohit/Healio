import React from 'react'

const AiCoach = () => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-6 relative overflow-hidden group min-h-[420px] flex flex-col">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ade80]/10 blur-[80px] group-hover:bg-[#4ade80]/20 transition-all duration-700" />
      <p className="label-mono text-[#4ade80] mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">auto_awesome</span> AI COACH
      </p>
      <h4 className="heading-syne text-xl text-white mb-4 leading-tight">
        &ldquo;YOUR RECOVERY IS OPTIMAL FOR A HEAVY SESSION TODAY.&rdquo;
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed font-light">
        Heart rate variability is up 12% and sleep quality index reached 88/100.
        Recommendation: Push for a new PR in Deadlifts.
      </p>
      <button className="mt-auto flex items-center gap-2 text-[#4ade80] text-xs font-bold uppercase tracking-widest group cursor-pointer">
        VIEW TRAINING PLAN
        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  )
}

export default AiCoach
