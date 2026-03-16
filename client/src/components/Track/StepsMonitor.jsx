import React from 'react'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from 'recharts'

const StepsData = [
  { time: '08:00', steps: 1000 },
  { time: '09:00', steps: 2500 },
  { time: '10:00', steps: 3200 },
  { time: '12:00', steps: 4100 },
  { time: '14:00', steps: 5000 },
  { time: '16:00', steps: 7600 },
  { time: '18:00', steps: 8400 },
  { time: '20:00', steps: 10101 }
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-white/10 p-2 rounded shadow-xl">
        <p className="label-mono text-[#4ade80] m-0">{`${payload[0].value} steps`}</p>
      </div>
    )
  }
  return null
}

const StepsMonitor = () => {
  return (
    <div className="col-span-12 lg:col-span-4 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between h-[420px]">
      <p className="label-mono text-slate-500 mb-2 uppercase">04 / FOOTSTEP MONITOR</p>
      <h3 className="heading-syne text-3xl text-white mb-1">
        10,101 <span className="text-sm font-mono text-slate-500">STEPS</span>
      </h3>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-xs text-[#4ade80]">distance</span>
          <span className="text-xs font-mono text-white">7.2 KM</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-xs text-[#4ade80]">local_fire_department</span>
          <span className="text-xs font-mono text-white">340 KCAL</span>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="flex-1 min-h-0 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={StepsData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
              dy={10}
            />
            <Area
              type="monotone"
              dataKey="steps"
              stroke="#4ade80"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSteps)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StepsMonitor
