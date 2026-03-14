import React from 'react'
import LeftHeroLanding from './HeroLandingComponents/LeftHeroLanding'
import RightHeroLanding from './HeroLandingComponents/RightHeroLanding'

const HeroLanding = () => {
  return (
    <header className="relative h-screen min-h-[800px] w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-brand-black">
      {/* Background Layers */}
      <div className="hero-bg-layers" />
      {/* Ghost Watermark */}
      <div className="ghost-text">HEALIO</div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-10 items-end relative z-10">
        <LeftHeroLanding />
        <RightHeroLanding />
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-12 left-6 right-6 md:left-20 md:right-20 flex items-center justify-start gap-6 font-dmsans text-[13px] font-normal text-white/35 z-10">
        <span>10K+ users</span>
        <div className="w-px h-4 bg-white/10" />
        <span>160g avg protein tracked</span>
        <div className="w-px h-4 bg-white/10" />
        <span>4.9 rating</span>
      </div>
    </header>
  )
}

export default HeroLanding
