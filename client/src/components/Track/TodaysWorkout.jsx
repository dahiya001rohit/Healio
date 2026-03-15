import React from 'react'

const exercises = [
  { name: 'Deadlifts', sets: 4, reps: 8, done: true },
  { name: 'Pull-ups (Weighted)', sets: 3, reps: 10, done: true },
  { name: 'Barbell Rows', sets: 4, reps: 12, done: false },
  { name: 'Hammer Curls', sets: 3, reps: 15, done: false },
]

const TodaysWorkout = () => {
  return (
    <div className="col-span-12 lg:col-span-5 bg-[#111111] card-border rounded-2xl p-6 flex flex-col min-h-[420px]">
      <p className="label-mono text-slate-500 mb-6 uppercase">02 / TODAY&apos;S WORKOUT</p>
      <div className="flex flex-col gap-4 flex-1 justify-center">
        {exercises.map((ex) => (
          <div
            key={ex.name}
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5"
          >
            <div>
              <p className="font-medium text-sm text-white">{ex.name}</p>
              <p className="label-mono text-slate-500">{ex.sets} SETS × {ex.reps} REPS</p>
            </div>
            <span className={`material-symbols-outlined ${ex.done ? 'text-[#4ade80]' : 'text-slate-700'}`}>
              {ex.done ? 'check_circle' : 'circle'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodaysWorkout
