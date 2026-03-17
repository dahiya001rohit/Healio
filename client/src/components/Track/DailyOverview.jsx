import React from 'react'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis
} from 'recharts'

const AreaData = [
  { time: '6am', value: 0 },
  { time: '9am', value: 200 },
  { time: '12pm', value: 600 },
  { time: '3pm', value: 800 },
  { time: '6pm', value: 1200 },
  { time: '9pm', value: 1450 }
]



const DailyOverview = () => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between h-[420px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="label-mono text-slate-500 mb-2">01 / DAILY OVERVIEW</p>
          <h3 className="heading-syne text-3xl text-white">
            1,240 <span className="text-[#4ade80] tracking-tighter text-lg uppercase">KCAL REMAINING</span>
          </h3>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="label-mono text-slate-500">CONSUMED</p>
            <p className="font-medium text-white">1,450</p>
          </div>
          <div className="text-right">
            <p className="label-mono text-slate-500">BURNED</p>
            <p className="font-medium text-white">690</p>
          </div>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="flex-1 min-h-0 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={AreaData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
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
              tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
              dy={10} 
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4ade80"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>


    </div>
  )
}

export default DailyOverview
