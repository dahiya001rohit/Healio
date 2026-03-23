import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

// Generate 30 days mock data for Weight Trend
const generate30DaysData = () => {
  const data = []
  let currentWeight = 84.5 // Starting weight 30 days ago
  const now = new Date()
  
  for (let i = 10; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    
    // Simulate gradual weight loss with some noise/fluctuations
    if (i % 3 === 0) currentWeight -= 0.1
    if (i % 7 === 0) currentWeight += 0.2
    if (i % 2 === 0) currentWeight -= 0.15

    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weight: parseFloat(currentWeight.toFixed(1))
    })
  }
  return data
}

const weight30Data = generate30DaysData()

const WeightTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl outline-none">
        <p className="text-xs font-mono text-slate-400 m-0 mb-1">{payload[0].payload.date}</p>
        <p className="text-sm font-mono text-white m-0">
          <span className="text-[#4ade80]">{payload[0].value}</span> kg
        </p>
      </div>
    )
  }
  return null
}

const WeightTrendCard = () => {
  const currentWeight = weight30Data[weight30Data.length - 1].weight
  const startWeight = weight30Data[0].weight
  const totalLost = (startWeight - currentWeight).toFixed(1)

  return (
    <div className="col-span-12 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between min-h-[350px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="label-mono text-slate-500 mb-1">08 / WEIGHT TREND</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-mono text-white tracking-tight">{currentWeight}</h3>
            <span className="text-sm font-mono text-slate-500">KG</span>
          </div>
          <p className="text-[#4ade80] text-xs font-mono mt-1">↓ {totalLost}kg over 30 days</p>
        </div>
        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></div>
          <span className="label-mono text-[9px] text-white">LAST 30 DAYS</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weight30Data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="weight30Grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4ade80" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#4ade80" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
              dy={10} 
              minTickGap={15}
            />
            <YAxis 
              domain={['dataMin - 1', 'dataMax + 1']} 
              hide={true} 
            />
            <Tooltip content={<WeightTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="url(#weight30Grad)" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#111111', stroke: '#4ade80', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#4ade80', stroke: '#111', strokeWidth: 2 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WeightTrendCard
