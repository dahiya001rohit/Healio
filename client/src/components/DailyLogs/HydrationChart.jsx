import React from 'react'

const bars = [
  { label: 'MOR', bgH: '60%', fillH: '75%' },
  { label: 'AFT', bgH: '90%', fillH: '100%' },
  { label: 'EVE', bgH: '50%', fillH: '20%' },
  { label: 'NGT', bgH: '40%', fillH: '0%' }
]

const HydrationChart = () => {
  return (
    <div className="bg-[#131313] p-5 rounded-2xl card-border space-y-6">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">
        Hydration Balance
      </span>
      <div className="h-48 bg-[#262626] rounded-xl p-6 flex items-end justify-between gap-4">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-[#699cff]/20 rounded-t-sm relative" style={{ height: bar.bgH }}>
              <div
                className="absolute bottom-0 w-full bg-[#699cff] rounded-t-sm transition-all duration-500"
                style={{ height: bar.fillH }}
              />
            </div>
            <span className="text-[8px] uppercase tracking-widest text-slate-500 label-mono">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HydrationChart
