import React from 'react'

const stages = [
  { deep: '40%', light: '20%', rem: '10%' },
  { deep: '50%', light: '30%', rem: '15%' },
  { deep: '35%', light: '15%', rem: '40%' },
  { deep: '60%', light: '25%', rem: '10%' }
]

const SleepStagesChart = () => {
  return (
    <div className="bg-[#131313] p-5 rounded-2xl card-border space-y-6">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">
        Sleep Stages
      </span>
      <div className="h-48 bg-[#262626] rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-end gap-1 h-32">
          {stages.map((s, i) => (
            <div key={i} className="flex-1 space-y-1 h-full flex flex-col justify-end">
              <div className="w-full bg-[#4ade80]/40 rounded-sm" style={{ height: s.light }} />
              <div className="w-full bg-[#4ade80] rounded-sm" style={{ height: s.deep }} />
              <div className="w-full bg-white/10 rounded-sm" style={{ height: s.rem }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[8px] uppercase tracking-widest font-bold text-slate-400">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" /> Deep
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#4ade80]/40 rounded-full" /> Light
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-white/10 rounded-full" /> REM
          </div>
        </div>
      </div>
    </div>
  )
}

export default SleepStagesChart
