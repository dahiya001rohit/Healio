import React from 'react'
import { Link } from 'react-router-dom'

const RightHeroLanding = () => {
  return (
    <div className="col-span-12 lg:col-span-5 flex flex-col items-start lg:pl-12">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-accent/18 bg-brand-accent/8 mb-8">
        <span className="font-dmsans text-[11px] font-medium tracking-[2px] text-brand-accent uppercase">
          AI-POWERED FITNESS &amp; NUTRITION
        </span>
      </div>

      {/* Description */}
      <p className="font-dmsans text-base font-light text-white/45 leading-[1.7] max-w-[340px] mb-10">
        High-performance analytics for the modern athlete. One dashboard for your recovery, nutrition, and training metrics.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4">
        <Link
          to="/login"
          className="bg-brand-accent text-brand-black px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform font-dmsans text-center"
        >
          Start for free
        </Link>
        <button className="text-white/50 px-10 py-2 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 font-dmsans">
          See how it works <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}

export default RightHeroLanding
