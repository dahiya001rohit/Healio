import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'

const MacroRing = ({ name, current, max, color }) => {
  const percentage = (current / max) * 100
  const data = [{ name, value: percentage, fill: color }]

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-[90px] h-[90px] md:w-[130px] md:h-[130px]">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="62%"
              outerRadius="100%"
              barSize={12}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                minAngle={15}
                background={{ fill: 'rgba(255,255,255,0.04)' }}
                clockWise
                dataKey="value"
                cornerRadius={10}
                fill={color}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-sm md:text-lg font-semibold font-mono leading-none">{current}</span>
          <span className="text-slate-500 text-[9px] md:text-[10px] font-mono leading-none mt-0.5">/{max}g</span>
        </div>
      </div>
      <span className="label-mono text-[8px] md:text-[9px] text-slate-500 tracking-widest">{name}</span>
    </div>
  )
}

export default MacroRing
