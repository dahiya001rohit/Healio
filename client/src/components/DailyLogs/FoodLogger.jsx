import React, { useState } from 'react'

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack']

const FoodLogger = () => {
  const [activeMeal, setActiveMeal] = useState('Lunch')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="heading-syne text-base uppercase tracking-tight text-white">Log Food</h3>
        <div className="flex gap-2">
          {mealTypes.map((meal) => (
            <button
              key={meal}
              onClick={() => setActiveMeal(meal)}
              className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                activeMeal === meal
                  ? 'bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30'
                  : 'text-slate-500 hover:text-white border border-white/5'
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#131313] p-6 md:p-8 rounded-2xl card-border space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Food Name</label>
            <input
              className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white placeholder-slate-600 outline-none"
              placeholder="Grilled Chicken Breast"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Qty</label>
            <input
              className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white text-center placeholder-slate-600 outline-none"
              placeholder="200"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Unit</label>
            <select className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white outline-none appearance-none">
              <option>g</option>
              <option>oz</option>
              <option>ml</option>
              <option>cups</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">Cals</label>
            <input className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white text-center placeholder-slate-600 outline-none" placeholder="330" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">P (g)</label>
            <input className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white text-center placeholder-slate-600 outline-none" placeholder="62" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">C (g)</label>
            <input className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white text-center placeholder-slate-600 outline-none" placeholder="0" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest label-mono">F (g)</label>
            <input className="w-full bg-[#262626] border-none rounded-lg text-sm p-3 focus:ring-1 focus:ring-[#4ade80] text-white text-center placeholder-slate-600 outline-none" placeholder="7" type="text" />
          </div>
        </div>

        <button className="w-full bg-[#4ade80] text-[#002f13] heading-syne py-4 rounded-full text-sm uppercase tracking-widest hover:brightness-110 transition-all font-bold">
          Add to Log
        </button>
      </div>
    </div>
  )
}

export default FoodLogger
