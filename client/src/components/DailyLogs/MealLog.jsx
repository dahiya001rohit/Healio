import React, { useState } from 'react'

const mealsData = [
  {
    name: 'Breakfast',
    icon: 'wb_sunny',
    kcal: 480,
    items: [
      { name: 'Oatmeal with Banana', qty: '250g', kcal: 320 },
      { name: 'Black Coffee', qty: '200ml', kcal: 5 },
      { name: 'Boiled Eggs (2)', qty: '120g', kcal: 155 }
    ]
  },
  {
    name: 'Lunch',
    icon: 'lunch_dining',
    kcal: 620,
    items: [
      { name: 'Quinoa Salad with Feta', qty: '350g', kcal: 420 },
      { name: 'Greek Yogurt with Berries', qty: '150g', kcal: 200 }
    ]
  },
  {
    name: 'Dinner',
    icon: 'dark_mode',
    kcal: null,
    items: []
  }
]

const MealLog = () => {
  const [expandedMeal, setExpandedMeal] = useState('Lunch')

  return (
    <div className="space-y-6">
      <h3 className="heading-syne text-base uppercase tracking-tight text-white">Today's Log</h3>
      <div className="space-y-3">
        {mealsData.map((meal) => {
          const isExpanded = expandedMeal === meal.name
          const isActive = meal.items.length > 0

          return (
            <div key={meal.name} className={`bg-[#131313] rounded-2xl card-border overflow-hidden transition-all ${isExpanded && isActive ? 'border-l-2 border-l-[#4ade80]' : ''}`}>
              {/* Header */}
              <div
                className={`px-6 py-4 flex items-center justify-between cursor-pointer transition-colors ${isExpanded && isActive ? 'bg-[#262626]' : 'hover:bg-[#1a1a1a]'}`}
                onClick={() => setExpandedMeal(isExpanded ? null : meal.name)}
              >
                <div className="flex items-center gap-4">
                  <span className={`material-symbols-outlined ${isExpanded && isActive ? 'text-[#4ade80]' : 'text-slate-500'}`}>
                    {meal.icon}
                  </span>
                  <span className={`font-bold tracking-tight ${isExpanded && isActive ? 'text-[#4ade80]' : 'text-white'}`}>
                    {meal.name}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`text-sm ${isActive ? 'font-bold text-white' : 'text-slate-500'}`}>
                    {meal.kcal ? `${meal.kcal} kcal` : 'Pending'}
                  </span>
                  <span className={`material-symbols-outlined ${isExpanded && isActive ? 'text-[#4ade80]' : 'text-slate-500'}`}>
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
              </div>

              {/* Expanded Items */}
              {isExpanded && isActive && (
                <div className="p-6 space-y-1">
                  {meal.items.map((item, i) => (
                    <div key={i} className="group flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div>
                        <p className="font-medium text-white text-sm">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.qty} • {item.kcal} kcal</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:scale-110">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MealLog
