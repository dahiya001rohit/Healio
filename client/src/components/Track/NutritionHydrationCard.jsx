import React from 'react'
import MacroRing from './Nutrition-Hydration/MacroRing'
import CaloriesDonut from './Nutrition-Hydration/CaloriesDonut'
import WaterIntakeChart from './Nutrition-Hydration/WaterIntakeChart'

// Macro data
const macros = {
  protein: { current: 120, max: 160 },
  carbs: { current: 180, max: 250 },
  fats: { current: 45, max: 70 }
}

// Calorie calculations
const proteinCal = macros.protein.current * 4
const carbsCal = macros.carbs.current * 4
const fatsCal = macros.fats.current * 9
const totalConsumed = 1450
const othersCal = Math.max(0, totalConsumed - proteinCal - carbsCal - fatsCal)

const donutData = [
  { name: 'Protein', value: proteinCal, color: '#4ade80' },
  { name: 'Carbs', value: carbsCal, color: '#34d399' },
  { name: 'Fats', value: fatsCal, color: '#6ee7b7' },
  { name: 'Others', value: othersCal || 55, color: '#1e3a2f' }
]

const NutrientHydrationCard = () => {
  return (
    <div className="col-span-12 lg:col-span-6 bg-[#111111] card-border rounded-2xl p-4 md:p-6 flex flex-col min-h-0 lg:min-h-[420px]">
      <p className="label-mono text-slate-500 mb-3 uppercase text-[10px] md:text-xs">05 / NUTRITION & HYDRATION</p>

      <div className="flex flex-col lg:flex-row flex-1 gap-5 lg:gap-6 items-center lg:items-stretch">

        {/* Section 1: Calories Breakdown */}
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <CaloriesDonut data={donutData} />
          <p className="label-mono text-[10px] text-slate-500 tracking-widest mt-3">CALORIES BREAKDOWN</p>
        </div>

        {/* Divider 1 */}
        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 2: Daily Macros */}
        <div className="flex-1 flex flex-col items-center justify-center w-full lg:w-auto">
          <div className="flex gap-3 md:gap-4 items-center flex-1 justify-center flex-wrap">
            <MacroRing name="PROTEIN" current={macros.protein.current} max={macros.protein.max} color="#4ade80" />
            <MacroRing name="CARBS" current={macros.carbs.current} max={macros.carbs.max} color="#34d399" />
            <MacroRing name="FATS" current={macros.fats.current} max={macros.fats.max} color="#6ee7b7" />
          </div>
          <p className="label-mono text-[10px] text-slate-500 tracking-widest mt-3">DAILY MACROS</p>
        </div>

        {/* Divider 2 */}
        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 3: Water Intake */}
        <WaterIntakeChart />

      </div>
    </div>
  )
}

export default NutrientHydrationCard
