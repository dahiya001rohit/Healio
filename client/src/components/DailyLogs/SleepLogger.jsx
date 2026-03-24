import React, { useState } from 'react'

const qualityOptions = ['Poor', 'Fair', 'Good', 'Excellent']

const SleepLogger = () => {
  const [quality, setQuality] = useState('Good')

  return (
    <div className="space-y-6">
      <h3 className="heading-syne text-base uppercase tracking-tight text-white">Sleep</h3>
      <div className="bg-[#131313] p-6 md:p-8 rounded-2xl card-border space-y-8">
        {/* Time inputs */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Bed Time</label>
            <input
              className="w-full bg-[#262626] border-none rounded-lg text-sm p-4 focus:ring-1 focus:ring-[#4ade80] text-white outline-none"
              type="time"
              defaultValue="23:00"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Wake Time</label>
            <input
              className="w-full bg-[#262626] border-none rounded-lg text-sm p-4 focus:ring-1 focus:ring-[#4ade80] text-white outline-none"
              type="time"
              defaultValue="06:30"
            />
          </div>
        </div>

        {/* Duration display */}
        <div className="text-center py-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 label-mono">Total Duration</p>
          <h2 className="text-5xl md:text-6xl heading-syne text-[#4ade80]">7h 30m</h2>
        </div>

        {/* Quality selector */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Quality</p>
          <div className="grid grid-cols-4 gap-2">
            {qualityOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setQuality(opt)}
                className={`py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  quality === opt
                    ? 'bg-[#4ade80]/20 border border-[#4ade80]/30 text-[#4ade80]'
                    : 'border border-white/5 text-slate-400 hover:bg-[#262626]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-[#4ade80] text-[#002f13] heading-syne py-4 rounded-full text-sm uppercase tracking-widest hover:brightness-110 transition-all font-bold">
          Save Sleep Log
        </button>
      </div>
    </div>
  )
}

export default SleepLogger
