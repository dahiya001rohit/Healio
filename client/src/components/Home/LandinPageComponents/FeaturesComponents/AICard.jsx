import React from 'react'

const AICard = () => {
  return (
    <div className="bento-card md:col-span-8 flex flex-col justify-between min-h-[400px]">
      <div className="relative h-48 mb-8 overflow-hidden rounded-lg bg-brand-black/50 border border-brand-border flex items-center justify-center">
        <svg className="opacity-40" fill="none" height="200" viewBox="0 0 400 200" width="400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="100" fill="#4ade80" r="4" />
          <circle cx="100" cy="50" fill="#ffffff" fillOpacity="0.3" r="3" />
          <circle cx="300" cy="150" fill="#ffffff" fillOpacity="0.3" r="3" />
          <path d="M100 50L200 100L300 150" stroke="white" strokeOpacity="0.1" />
          <path d="M50 150L200 100L350 50" stroke="white" strokeOpacity="0.1" />
          <circle cx="50" cy="150" fill="#ffffff" fillOpacity="0.2" r="2" />
          <circle cx="350" cy="50" fill="#ffffff" fillOpacity="0.2" r="2" />
        </svg>
      </div>
      <div>
        <h3 className="syne-headline text-2xl mb-3 text-brand-accent">AI Nutrition</h3>
        <p className="text-white/60 leading-relaxed max-w-md font-dmsans">
          Precision macro tracking powered by machine learning to ensure every calorie counts towards your goal.
        </p>
      </div>
    </div>
  )
}

export default AICard
