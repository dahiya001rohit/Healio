import React from 'react'

const rows = [
  { label: 'Calories', today: '1,840', yesterday: '2,100', change: -12 },
  { label: 'Protein', today: '142g', yesterday: '118g', change: 20 },
  { label: 'Water', today: '1.8L', yesterday: '2.1L', change: -14 },
  { label: 'Sleep', today: '7h 30m', yesterday: '6h 45m', change: 11 }
]

const DailyComparison = () => {
  return (
    <div className="bg-[#131313] p-6 rounded-2xl card-border space-y-6">
      <h4 className="text-[12px] heading-syne font-[800] uppercase tracking-widest text-white">Yesterday vs Today</h4>
      <div className="space-y-0">
        {rows.map((row, i) => {
          const isPositive = row.change > 0
          const isLast = i === rows.length - 1

          return (
            <div
              key={row.label}
              className={`flex items-center justify-between py-4 ${!isLast ? 'border-b border-white/5' : ''}`}
            >
              <span className="text-xs text-slate-500">{row.label}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white">
                  {row.today} <span className="text-slate-500">vs</span> {row.yesterday}
                </span>
                <span className={`text-[11px] font-bold ${isPositive ? 'text-[#4ade80]' : 'text-red-400'}`}>
                  {isPositive ? '↑' : '↓'} {Math.abs(row.change)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <a href="/track" className="block text-center text-[#4ade80] font-bold text-xs tracking-widest hover:brightness-125 transition-all label-mono">
        VIEW FULL DASHBOARD →
      </a>
    </div>
  )
}

export default DailyComparison
