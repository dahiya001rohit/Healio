import React from 'react'
import WaterIntakeChart from './Nutrition-Hydration/WaterIntakeChart'

const HydrationCard = ({ hideUpdateBtn }) => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between h-[420px]">
      <p className="label-mono text-slate-500 mb-3 uppercase text-[10px] md:text-xs self-start">03 / HYDRATION</p>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <WaterIntakeChart isExpanded={hideUpdateBtn} />
      </div>
      {!hideUpdateBtn && (
        <button className="flex items-center gap-1 text-[#4ade80] text-[9px] font-bold uppercase tracking-widest group cursor-pointer mt-auto self-start">
          ADD UPDATE
          <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      )}
    </div>
  )
}

export default HydrationCard
