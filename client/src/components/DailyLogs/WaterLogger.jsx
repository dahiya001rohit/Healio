import React from 'react'

const timeSlots = [
  { label: 'Morning (6am - 12pm)', current: 750, max: 1000 },
  { label: 'Afternoon (12pm - 5pm)', current: 1250, max: 1000 },
  { label: 'Evening (5pm - 9pm)', current: 0, max: 500 },
  { label: 'Night (9pm - 6am)', current: 0, max: 500 }
]

const quickAddOptions = ['250ML', '500ML', '1L']

const WaterLogger = () => {
  return (
    <div className="space-y-6">
      <h3 className="heading-syne text-base uppercase tracking-tight text-white">Water Intake</h3>
      <div className="bg-[#131313] p-6 md:p-8 rounded-2xl card-border space-y-8">
        {/* Quick add buttons */}
        <div className="flex flex-wrap gap-3">
          {quickAddOptions.map((opt) => (
            <button
              key={opt}
              className="bg-[#262626] px-6 py-2 rounded-full text-xs font-bold tracking-widest border border-white/5 hover:border-[#4ade80]/50 hover:text-[#4ade80] transition-all text-white"
            >
              + {opt}
            </button>
          ))}
        </div>

        {/* Time slot progress bars */}
        <div className="space-y-6">
          {timeSlots.map((slot, i) => {
            const pct = Math.min((slot.current / slot.max) * 100, 100)
            const isCompleted = slot.current >= slot.max
            const isEmpty = slot.current === 0

            return (
              <div key={i} className={`space-y-2 ${isEmpty ? 'opacity-50' : ''}`}>
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">
                  <span>{slot.label}</span>
                  <span>{slot.current}ml / {slot.max}ml</span>
                </div>
                <div className="h-2 w-full bg-[#262626] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-[#4ade80]' : 'bg-[#699cff]'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <button className="w-full bg-[#4ade80] text-[#002f13] heading-syne py-4 rounded-full text-sm uppercase tracking-widest hover:brightness-110 transition-all font-bold mt-4">
          Add Water
        </button>
      </div>
    </div>
  )
}

export default WaterLogger
