import React from 'react'

const ProteinCard = () => {
  return (
    <div className="bento-card md:col-span-4 flex flex-col justify-center items-center text-center">
      <p className="label-mono mb-4 text-brand-accent">DAILY TARGET</p>
      <div className="syne-headline text-7xl leading-none mb-2 text-white">
        160<span className="text-2xl">G</span>
      </div>
      <p className="text-white/40 uppercase tracking-widest text-xs font-dmsans">Protein intake goal</p>
    </div>
  )
}

export default ProteinCard
