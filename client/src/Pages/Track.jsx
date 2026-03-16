import React from 'react'
import { Link } from 'react-router-dom'
import DailyOverview from '../components/Track/DailyOverview'
import AiCoach from '../components/Track/AiCoach'
import TodaysWorkout from '../components/Track/TodaysWorkout'
import SleepTracker from '../components/Track/SleepTracker'
import StepsMonitor from '../components/Track/StepsMonitor'
import NutrientHydrationCard from '../components/Track/NutritionHydrationCard'
import WeeklyActivity from '../components/Track/WeeklyActivity'

const Track = () => {
  return (
    <div className="dashboard-body text-slate-100 antialiased overflow-hidden h-screen bg-brand-black relative">
      <div className="hero-bg-layers" />
      <div className="flex h-full w-full overflow-hidden relative z-10">

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
          {/* Page Header */}
          <div className="flex flex-col items-center justify-center pt-8 pb-10 gap-8 w-full mt-24">
            <div className="flex items-center gap-2 p-1.5 bg-[#111111] card-border rounded-full shadow-lg shadow-black/50">
              <button className="heading-syne px-8 py-3 rounded-full bg-[#4ade80]/10 text-[#4ade80] text-[15px] uppercase tracking-wider transition-colors cursor-pointer">
                DASHBOARD
              </button>
              <button className="heading-syne px-8 py-3 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-[15px] uppercase tracking-wider transition-colors cursor-pointer">
                WORKOUTS
              </button>
              <button className="heading-syne px-8 py-3 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-[15px] uppercase tracking-wider transition-colors cursor-pointer">
                NUTRITION
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="mx-auto pb-12 w-[90%]">
            <div className="grid grid-cols-12 gap-6 h-full">
              {/* ROW 1 */}
              <DailyOverview />
              <StepsMonitor />
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
                <AiCoach />
                <TodaysWorkout />
              </div>

              {/* ROW 2 */}
              <SleepTracker />
              <NutrientHydrationCard />

              {/* ROW 3 */}
              <WeeklyActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Track
