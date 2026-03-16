import React from 'react'

const exercises = [
  { name: 'Deadlifts', sets: 4, reps: 8, done: true },
  { name: 'Pull-ups (Weighted)', sets: 3, reps: 10, done: true },
  { name: 'Barbell Rows', sets: 4, reps: 12, done: false },
  { name: 'Hammer Curls', sets: 3, reps: 15, done: false },
]

const TodaysWorkout = () => {
  return (
    <div className="bg-[#111111] card-border rounded-2xl p-4 flex flex-col justify-between flex-1">
      <div>
        <p className="label-mono text-slate-500 mb-2 uppercase text-[10px] leading-none">02 / TODAY&apos;S WORKOUT</p>
        <div className="flex flex-col gap-2 justify-center">
          {exercises.slice(0, 2).map((ex) => (
            <div
              key={ex.name}
              className="flex items-center justify-between p-2.5 bg-white/5 rounded-lg border border-white/5"
            >
              <div>
                <p className="font-medium text-[11px] text-white leading-tight">{ex.name}</p>
                <p className="label-mono text-slate-500 text-[9px] mt-0.5 leading-none">{ex.sets} SETS × {ex.reps} REPS</p>
              </div>
              <span className={`material-symbols-outlined text-[14px] ${ex.done ? 'text-[#4ade80]' : 'text-slate-700'}`}>
                {ex.done ? 'check_circle' : 'circle'}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <button className="flex items-center gap-1 text-[#4ade80] text-[9px] font-bold uppercase tracking-widest group cursor-pointer mt-auto">
        VIEW ALL WORKOUTS
        <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  )
}

export default TodaysWorkout
