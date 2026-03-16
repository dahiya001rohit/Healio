import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Cell, Tooltip } from 'recharts'

const WaterDropIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"
      fill="url(#waterGradientIcon)"
      stroke="#60a5fa"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="waterGradientIcon" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#93c5fd" stopOpacity="0.5" />
        <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
)

const BarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl">
        <p className="label-mono text-[#60a5fa] text-xs m-0">{`${payload[0].value}L`}</p>
      </div>
    )
  }
  return null
}

const hydrationData = [
  { period: 'MOR', intake: 0.5 },
  { period: 'AFT', intake: 0.7 },
  { period: 'EVE', intake: 0.4 },
  { period: 'NGT', intake: 0.2 }
]

const WaterIntakeChart = () => {
  const totalIntake = hydrationData.reduce((sum, d) => sum + d.intake, 0)

  return (
    <div className="flex flex-col w-full lg:w-[180px] justify-between shrink-0">
      <div className="w-full" style={{ minHeight: 120 }}>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={hydrationData} margin={{ top: 4, right: 4, left: 4, bottom: 0 }} barCategoryGap="25%">
            <defs>
              <linearGradient id="waterBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.15} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475569', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              dy={4}
            />
            <Tooltip
              content={<BarTooltip />}
              cursor={{ fill: 'rgba(96,165,250,0.05)', radius: 6 }}
            />
            <Bar dataKey="intake" radius={[5, 5, 0, 0]} maxBarSize={24}>
              {hydrationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="url(#waterBarGradient)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-center">
        <p className="text-lg md:text-xl font-mono text-white tracking-tight">
          {totalIntake.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 3.0L</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-2">
        <WaterDropIcon />
        <p className="label-mono text-[10px] text-slate-500 tracking-widest m-0">WATER INTAKE</p>
      </div>
    </div>
  )
}

export default WaterIntakeChart
