import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

const DonutTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl">
        <p className="text-xs font-mono text-white m-0">
          <span style={{ color: payload[0].payload.color }}>●</span> {payload[0].name}: <span className="text-[#4ade80]">{payload[0].value} cal</span>
        </p>
      </div>
    )
  }
  return null
}

const CaloriesDonut = ({ data }) => {
  const totalCal = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <>
      <div className="relative w-[150px] h-[150px] md:w-[190px] md:h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {data.map((entry, i) => (
                <linearGradient key={`donutGrad-${i}`} id={`donutGrad-${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                  <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
                </linearGradient>
              ))}
            </defs>
            <Tooltip content={<DonutTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#donutGrad-${index})`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-white text-lg md:text-xl font-semibold font-mono leading-none">{totalCal}</span>
          <span className="text-slate-500 text-[9px] md:text-[10px] font-mono leading-none mt-1">KCAL</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-1 mt-1">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-[8px] md:text-[9px] label-mono text-slate-500">{entry.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default CaloriesDonut
