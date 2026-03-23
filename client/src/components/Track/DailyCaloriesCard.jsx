import React from 'react'
import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts'
import CaloriesDonut from './Nutrition-Hydration/CaloriesDonut'

// Calorie breakdown data
const macros = {
  protein: { current: 120, max: 160 },
  carbs: { current: 180, max: 250 },
  fats: { current: 45, max: 70 }
}

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

// Area chart data (daily calorie intake over time)
const AreaData = [
  { time: '6am', value: 0 },
  { time: '9am', value: 200 },
  { time: '12pm', value: 600 },
  { time: '3pm', value: 800 },
  { time: '6pm', value: 1200 },
  { time: '9pm', value: 1450 }
]

const DailyCaloriesCard = () => {
  return (
    <div className="col-span-12 lg:col-span-6 bg-[#111111] card-border rounded-2xl p-4 md:p-6 flex flex-col h-[420px]">
      {/* Header row with label + target badge */}
      <div className="flex items-center justify-between mb-3">
        <p className="label-mono text-slate-500 uppercase text-[10px] md:text-xs">01 / DAILY OVERVIEW</p>
        <div className="flex items-center gap-1.5 bg-[#4ade80]/10 px-2.5 py-1 rounded-full">
          <span className="text-[#4ade80] font-mono text-xs font-semibold">68%</span>
          <span className="label-mono text-[8px] text-slate-500">OF TARGET</span>
        </div>
      </div>

      {/* Main content: donut left, stats + chart right */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: Donut (compact) */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <CaloriesDonut data={donutData} />
        </div>

        {/* Right: heading + stats + area chart */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          <h3 className="heading-syne text-xl md:text-2xl text-white leading-tight">
            1,240 <span className="text-[#4ade80] tracking-tighter text-xs md:text-sm uppercase">KCAL LEFT</span>
          </h3>
          <div className="flex gap-4 mt-1.5 mb-2">
            <div>
              <p className="label-mono text-slate-500 text-[8px]">CONSUMED</p>
              <p className="font-medium text-white text-xs">1,450</p>
            </div>
            <div>
              <p className="label-mono text-slate-500 text-[8px]">BURNED</p>
              <p className="font-medium text-white text-xs">690</p>
            </div>
          </div>

          {/* Area chart fills remaining vertical space */}
          <div className="flex-1 min-h-0 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={AreaData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: 9, fontFamily: 'JetBrains Mono' }}
                  dy={6}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4ade80"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyCaloriesCard
