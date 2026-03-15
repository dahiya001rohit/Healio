import React from 'react'
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const sleepData = [
  { day: 'M', hours: 7.5 },
  { day: 'T', hours: 8.0 },
  { day: 'W', hours: 6.5 },
  { day: 'T', hours: 8.5 },
  { day: 'F', hours: 7.0 },
  { day: 'S', hours: 9.0 },
  { day: 'S', hours: 4.5 }
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-white/10 p-2 rounded shadow-xl">
        <p className="label-mono text-[#4ade80] m-0">{`${payload[0].value} HR`}</p>
      </div>
    )
  }
  return null
}

const SleepTracker = () => {
  return (
    <div className="col-span-12 lg:col-span-4 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between min-h-[420px]">
      <div>
        <p className="label-mono text-slate-500 mb-2 uppercase">03 / SLEEP TRACKER</p>
        <div className="flex items-baseline gap-2">
          <h3 className="heading-syne text-4xl text-white">8.5</h3>
          <span className="text-slate-400 label-mono">HR TOTAL</span>
        </div>
      </div>

      {/* Sleep stage distribution bar */}
      <div className="mt-8 space-y-4">
        <div className="h-6 w-full flex rounded overflow-hidden">
          <div className="h-full bg-[#4ade80]/80 w-[20%]" title="Deep" />
          <div className="h-full bg-[#4ade80]/50 w-[50%]" title="Light" />
          <div className="h-full bg-[#4ade80]/20 w-[30%]" title="REM" />
        </div>
        <div className="flex justify-between text-[10px] label-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ade80]/80" /> DEEP (1.5H)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ade80]/50" /> LIGHT (4H)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ade80]/20" /> REM (3H)
          </div>
        </div>
      </div>

      {/* Weekly trend */}
      <div className="mt-8 pt-6 border-t border-white/5 flex-1 w-full h-full flex flex-col">
        <p className="label-mono text-slate-500 mb-4 uppercase">Weekly Trend</p>
        <div className="flex-1 w-full relative min-h-[120px]">
          <div className="absolute inset-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sleepData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
                  dy={10}
                />
                <Bar 
                  dataKey="hours" 
                  fill="#4ade80" 
                  radius={[4, 4, 4, 4]} 
                  barSize={12}
                  opacity={0.8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SleepTracker
