import React from 'react'
import AICard from './FeaturesComponents/AICard'
import ProteinCard from './FeaturesComponents/ProteinCard'
import WorkoutCard from './FeaturesComponents/WorkoutCard'
import CoachCard from './FeaturesComponents/CoachCard'
import RecoveryCard from './FeaturesComponents/RecoveryCard'

const Features = () => {
  return (
    <section className="px-6 pt-16 pb-32 bg-brand-black" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="label-mono mb-4">01 / FEATURES</p>
          <h2 className="syne-headline text-white text-4xl md:text-6xl">Why you need Healio?</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <AICard />
          <ProteinCard />
          <WorkoutCard />
          <CoachCard />
          <RecoveryCard />
        </div>
      </div>
    </section>
  )
}

export default Features