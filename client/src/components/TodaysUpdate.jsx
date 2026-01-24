import React from 'react'

const TodaysUpdate = ({atTop}) => {

  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-full border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4 '}>
        <div className='mt-[4vh] w-[80%] flex justify-center font-zalando-expanded text-4xl text-green-400 '>Today's Update</div>
        <div className='w-[86%] h-[65vh] bg-[#121212] rounded-4xl mb-[10vh] flex justify-center items-center'>
            <div className='w-[95%] h-[90%] flex justify-around'>
                <div className='w-65/100 h-full  rounded-4xl flex justify-center items-center px-[2vw] py-[1.5vh]'>
                    <form className='w-full h-[85%] text-sm flex flex-col items-center font-roboto-condensed'>
                        <div className='flex gap-4'>
                            <h4 className='mx-1'>Meals:</h4>
                            <input type="text" className='w-[15vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="Egg, Chicken etc." />
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Calories (in cal):</h1>
                            <input type='number' className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="2500"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Protein (in gram):</h1>
                            <input type='number' className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="120 g"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Carbs (in gram):</h1>
                            <input type='number' className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="150 g"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Fats (in gram):</h1>
                            <input type="number" className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="70"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Foot Steps:</h1>
                            <input type="number" className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="10000 "/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Water intake (in ltr):</h1>
                            <input type="number" className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="2"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>
                                Sleep Taken (in hrs):</h1>
                            <input type="number" className='w-[10vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl' placeholder="8"/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Workout Intensity:</h1>
                            <select className='w-[15vw] border border-green-400 text-[0.9vw] py-[0.5vh] px-[0.5vw] rounded-2xl'>
                                <option value="Not Done">Not Done</option>
                                <option value="Light Intensity">Light Intensity</option>
                                <option value="Moderate Intensity">Moderate Intensity</option>
                                <option value="Vigorous Intensity">Vigorous Intensity</option>
                            </select>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            <button className='bg-green-400 text-[#121212] px-[2vw] py[1vh] rounded-3xl'>
                                Add Update
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-30/100 h-full border border-l-blue-400 rounded-4xl'></div>
            </div>
        </div>
    </div>
  )
}

export default TodaysUpdate
