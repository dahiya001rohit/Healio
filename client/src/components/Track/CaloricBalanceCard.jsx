import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, Cell } from 'recharts'

const calorieData = [
  { day: 'MON', intake: 1950, target: 2100 },
  { day: 'TUE', intake: 2200, target: 2100 },
  { day: 'WED', intake: 1800, target: 2100 },
  { day: 'THU', intake: 1900, target: 2100 },
  { day: 'FRI', intake: 2050, target: 2100 },
  { day: 'SAT', intake: 2500, target: 2100 },
  { day: 'SUN', intake: 1850, target: 2100 }
]

const CalorieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const intake = payload[0].value
    const target = payload[0].payload.target
    const isSurplus = intake > target
    const diff = Math.abs(intake - target)
    
    return (
      <div className="bg-[#1a1a1a] border border-white/10 px-3 py-2 rounded-lg shadow-xl outline-none flex flex-col gap-1">
        <p className="text-xs font-mono text-white m-0">
          Intake: <span className={isSurplus ? "text-[#f43f5e]" : "text-[#4ade80]"}>{intake}</span>
        </p>
        <p className="text-[10px] font-mono text-slate-400 m-0">
          {isSurplus ? `+${diff} kcal over` : `-${diff} kcal under`}
        </p>
      </div>
    )
  }
  return null
}

const CaloricBalanceCard = () => {
  const todayCalories = calorieData[calorieData.length - 1].intake
  const dailyTarget = calorieData[0].target
  const isSurplus = todayCalories > dailyTarget

  return (
    <div className="col-span-12 lg:col-span-6 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between h-[420px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="label-mono text-slate-500 mb-1">07 / CALORIC BALANCE</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-mono text-white tracking-tight">{todayCalories}</h3>
            <span className="text-sm font-mono text-slate-500">/ {dailyTarget} KCAL</span>
          </div>
          <p className={isSurplus ? "text-[#f43f5e] text-xs font-mono mt-1" : "text-[#4ade80] text-xs font-mono mt-1"}>
            {isSurplus ? "Caloric Surplus" : "On track for deficit"}
          </p>
        </div>
        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-1.5">
          <span className="label-mono text-[9px] text-white">LAST 7 DAYS</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={calorieData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }} barSize={16}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
              dy={10} 
            />
            <YAxis 
              domain={[0, 'dataMax + 500']} 
              hide={true} 
            />
            <Tooltip content={<CalorieTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <ReferenceLine y={dailyTarget} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
            <Bar dataKey="intake" radius={[4, 4, 0, 0]}>
              {calorieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.intake > entry.target ? '#f43f5e' : '#4ade80'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CaloricBalanceCard
