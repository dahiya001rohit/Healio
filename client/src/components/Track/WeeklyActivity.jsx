import React from 'react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts'

const ActivityData = [
  { day: 'MON', mins: 45 },
  { day: 'TUE', mins: 60 },
  { day: 'WED', mins: 30 },
  { day: 'THU', mins: 80 },
  { day: 'FRI', mins: 120 },
  { day: 'SAT', mins: 90 },
  { day: 'SUN', mins: 150 }
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-white/10 p-2 rounded shadow-xl">
        <p className="label-mono text-[#4ade80] m-0">{`${payload[0].value} MINS`}</p>
      </div>
    )
  }
  return null
}

const WeeklyActivity = () => {
  return (
    <div className="col-span-12 bg-[#111111] card-border rounded-2xl p-6 flex flex-col min-h-[420px]">
      <div className="flex justify-between items-center mb-8">
        <p className="label-mono text-slate-500 uppercase">06 / WEEKLY ACTIVITY TREND</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white border border-white/5">
            AVG: 82 MIN
          </span>
        </div>
      </div>
      
      {/* Recharts Line Chart */}
      <div className="flex-1 w-full min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ActivityData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'JetBrains Mono' }} 
              dy={15}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 12, fontFamily: 'JetBrains Mono' }} 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
            <Line
              type="monotone"
              dataKey="mins"
              stroke="#4ade80"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{ fill: '#4ade80', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#fff', stroke: '#4ade80' }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WeeklyActivity
