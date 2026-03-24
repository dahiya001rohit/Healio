import React from 'react'
import GoalTrackerCard from '../components/DailyLogs/GoalTrackerCard'
import FoodLogger from '../components/DailyLogs/FoodLogger'
import MealLog from '../components/DailyLogs/MealLog'
import WaterLogger from '../components/DailyLogs/WaterLogger'
import SleepLogger from '../components/DailyLogs/SleepLogger'
import HydrationCard from '../components/Track/HydrationCard'
import SleepTracker from '../components/Track/SleepTracker'
import AiCoach from '../components/AiCoach'
import DailyComparison from '../components/DailyLogs/DailyComparison'

const DailyLogs = () => {
  return (
    <div className="dashboard-body text-slate-100 antialiased overflow-hidden h-screen bg-brand-black relative">
      <div className="hero-bg-layers" />
      <div className="flex h-full w-full overflow-hidden relative z-10">
        <main className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="mx-auto pt-32 pb-12 w-[90%] space-y-10">

            {/* ROW 1: Goal Tracker Strip — always 4 in a row */}
            <section className="grid grid-cols-4 gap-4">
              <GoalTrackerCard label="Calories" current={1840} max={2400} unit=" kcal" />
              <GoalTrackerCard label="Protein" current={142} max={180} unit="g" />
              <GoalTrackerCard label="Carbs" current={185} max={250} unit="g" />
              <GoalTrackerCard label="Fat" current={52} max={70} unit="g" />
            </section>

            {/* ROW 2: Two Column Layout */}
            <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
              {/* LEFT COLUMN: Input Area */}
              <div className="space-y-12">
                <FoodLogger />
                <MealLog />
                <WaterLogger />
                <SleepLogger />
              </div>

              {/* RIGHT COLUMN: Existing shared components + comparison */}
              <div className="space-y-6">
                <HydrationCard />
                <SleepTracker />
                <AiCoach />
                <DailyComparison />
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}

export default DailyLogs
