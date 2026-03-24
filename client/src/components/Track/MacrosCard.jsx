import React from 'react'
import MacroRing from './Nutrition-Hydration/MacroRing'

const macros = {
  protein: { current: 120, max: 160 },
  carbs: { current: 180, max: 250 },
  fats: { current: 45, max: 70 }
}

const MacrosCard = () => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between h-[420px]">
      <p className="label-mono text-slate-500 mb-3 uppercase text-[10px] md:text-xs self-start">02 / DAILY MACROS</p>

      <div className="flex-1 flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Mobile: horizontal row, full size */}
        <div className="flex lg:hidden gap-6 items-center justify-center">
          <MacroRing name="PROTEIN" current={macros.protein.current} max={macros.protein.max} color="#4ade80" />
          <MacroRing name="CARBS" current={macros.carbs.current} max={macros.carbs.max} color="#34d399" />
          <MacroRing name="FATS" current={macros.fats.current} max={macros.fats.max} color="#6ee7b7" />
        </div>
        {/* Desktop: triangle layout, scaled down */}
        <div className="hidden lg:flex flex-col gap-1 items-center justify-center scale-[0.8] origin-center">
          <MacroRing name="PROTEIN" current={macros.protein.current} max={macros.protein.max} color="#4ade80" />
          <div className="flex gap-3 items-center justify-center">
            <MacroRing name="CARBS" current={macros.carbs.current} max={macros.carbs.max} color="#34d399" />
            <MacroRing name="FATS" current={macros.fats.current} max={macros.fats.max} color="#6ee7b7" />
          </div>
        </div>
      </div>
      <button className="flex items-center gap-1 text-[#4ade80] text-[9px] font-bold uppercase tracking-widest group cursor-pointer mt-auto self-start">
        ADD UPDATE
        <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  )
}

export default MacrosCard
