import React from 'react'

const tabs = [
  { label: 'DASHBOARD', active: true },
  { label: 'WORKOUTS', active: false },
  { label: 'NUTRITION', active: false }
]

const TrackHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6 md:pt-8 pb-6 md:pb-10 gap-8 w-full mt-24 md:mt-32 px-4">
      <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 p-1 md:p-1.5 bg-[#111111] card-border rounded-full shadow-lg shadow-black/50 w-full max-w-full sm:max-w-fit overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex-1 text-center heading-syne px-3 sm:px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] min-[400px]:text-[10px] sm:text-[11px] md:text-[15px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              tab.active
                ? 'bg-[#4ade80]/10 text-[#4ade80]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TrackHeader
