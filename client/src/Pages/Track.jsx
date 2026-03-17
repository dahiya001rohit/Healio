import React from 'react'
import DailyOverview from '../components/Track/DailyOverview'
import AiCoach from '../components/Track/AiCoach'
import TodaysWorkout from '../components/Track/TodaysWorkout'
import SleepTracker from '../components/Track/SleepTracker'
import StepsMonitor from '../components/Track/StepsMonitor'
import TrackHeader from '../components/Track/TrackHeader'
import NutrientHydrationCard from '../components/Track/NutritionHydrationCard'
import CaloricBalanceCard from '../components/Track/CaloricBalanceCard'
import WeightTrendCard from '../components/Track/WeightTrendCard'

const Track = () => {
  return (
    <div className="dashboard-body text-slate-100 antialiased overflow-hidden h-screen bg-brand-black relative">
      <div className="hero-bg-layers" />
      <div className="flex h-full w-full overflow-hidden relative z-10">

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
          {/* Page Header */}
          <TrackHeader />

          {/* Bento Grid */}
          <div className="mx-auto pb-12 w-[90%]">
            <div className="grid grid-cols-12 gap-6 h-full">
              {/* ROW 1: Nutrition (6), Overview (3), Steps (3) */}
              <NutrientHydrationCard />
              <DailyOverview />
              <StepsMonitor />

              {/* ROW 2: Sleep (3), Calories (6), Coach/Workout (3) */}
              <SleepTracker />
              <CaloricBalanceCard />
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
                <AiCoach />
                <TodaysWorkout />
              </div>

              {/* ROW 3: Weight Trend (12) */}
              <WeightTrendCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Track
