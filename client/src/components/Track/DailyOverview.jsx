import React from 'react'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts'

const AreaData = [
  { time: '6am', value: 0 },
  { time: '9am', value: 200 },
  { time: '12pm', value: 600 },
  { time: '3pm', value: 800 },
  { time: '6pm', value: 1200 },
  { time: '9pm', value: 1450 }
]

const MacroRing = ({ name, current, max, color }) => {
  const percentage = (current / max) * 100
  const data = [{ name, value: percentage, fill: color }]

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        {/* Background Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-white/5" />
        {/* Recharts Radial Bar */}
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={4}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                minAngle={15}
                background={false}
                clockWise
                dataKey="value"
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-[10px] font-mono leading-none">{current}</span>
          <span className="text-slate-500 text-[8px] font-mono leading-none">/{max}</span>
        </div>
      </div>
      <span className="label-mono text-slate-400 mt-2">{name}</span>
    </div>
  )
}

const DailyOverview = () => {
  return (
    <div className="col-span-12 lg:col-span-5 bg-[#111111] card-border rounded-2xl p-6 flex flex-col justify-between min-h-[420px]">
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
      <div className="flex-1 min-h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={AreaData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
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

      {/* Progress Rings for Macros */}
      <div className="flex justify-around items-center mt-8 pt-4 border-t border-white/5">
        <MacroRing name="PROTEIN" current={120} max={160} color="#4ade80" />
        <MacroRing name="CARBS" current={180} max={250} color="rgba(74, 222, 128, 0.6)" />
        <MacroRing name="FATS" current={45} max={70} color="rgba(74, 222, 128, 0.3)" />
      </div>
    </div>
  )
}

export default DailyOverview
