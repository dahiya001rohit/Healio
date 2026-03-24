import React from 'react'

const GoalTrackerCard = ({ label, current, max, unit = '' }) => {
  const percentage = Math.round((current / max) * 100)
  const remaining = max - current

  return (
    <div className="bg-[#131313] p-5 rounded-xl card-border space-y-3">
      <span className="text-[10px] font-bold text-slate-500 tracking-[0.1em] uppercase label-mono">
        {label}
      </span>
      <div className="flex justify-between items-baseline">
        <h2 className="heading-syne text-2xl text-white">
          {current.toLocaleString()}{unit}{' '}
          <span className="text-slate-500 text-lg">/ {max.toLocaleString()}{unit}</span>
        </h2>
      </div>
      <div className="h-[3px] w-full bg-[#262626] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4ade80] rounded-full transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <p className="text-[11px] text-slate-500">
        {remaining > 0 ? `${remaining.toLocaleString()}${unit} remaining` : 'Goal reached!'}
      </p>
    </div>
  )
}

export default GoalTrackerCard
