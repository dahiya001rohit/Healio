import React from 'react'

const HydrationCard = () => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-6 flex flex-col min-h-[420px]">
      <p className="label-mono text-slate-500 mb-6 uppercase">05 / HYDRATION</p>
      <div className="flex gap-4 flex-1 items-end justify-between px-2 mt-4">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full bg-[#4ade80]/20 rounded-t h-[30%]" />
          <span className="text-[9px] label-mono text-slate-600">MOR</span>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full bg-[#4ade80]/40 rounded-t h-[60%]" />
          <span className="text-[9px] label-mono text-slate-600">AFT</span>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full bg-[#4ade80]/10 rounded-t h-[15%]" />
          <span className="text-[9px] label-mono text-slate-600">EVE</span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-2xl font-mono text-white">
          1.8 <span className="text-xs text-slate-500">/ 3.0L</span>
        </p>
      </div>
    </div>
  )
}

export default HydrationCard
