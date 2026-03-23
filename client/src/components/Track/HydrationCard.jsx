import React from 'react'
import WaterIntakeChart from './Nutrition-Hydration/WaterIntakeChart'

const HydrationCard = () => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between h-[420px]">
      <p className="label-mono text-slate-500 mb-3 uppercase text-[10px] md:text-xs self-start">03 / HYDRATION</p>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <WaterIntakeChart />
      </div>
    </div>
  )
}

export default HydrationCard
