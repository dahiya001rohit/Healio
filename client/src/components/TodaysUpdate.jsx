import React from 'react'

const TodaysUpdate = ({atTop}) => {
  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-full border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4 '}>
        <div className='mt-[4vh] w-[80%] flex justify-center font-zalando-expanded text-4xl text-green-400 '>Today's Update</div>
        <div className='w-[86%] h-[65vh] bg-[#121212] rounded-4xl mb-[10vh] flex justify-center items-center'>
            <div className='w-[95%] h-[90%] flex justify-around'>
                <div className='w-65/100 h-full  rounded-4xl flex justify-center items-center px-[2vw] py-[1.5vh]'>
                    <form className='w-full h-[85%] text-lg flex flex-col items-start font-roboto-condensed'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h1 className='text-green-400'>Major Meals:</h1>
                            <input type="text" className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-1'>
                            <h1 className='text-green-400'>Calories:</h1>
                            <input type='number' className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-1'>
                            <h1 className='text-green-400'>Protein:</h1>
                            <input type='number' className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-1'>
                            <h1 className='text-green-400'>Carbs:</h1>
                            <input type='number' className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justifycenter mt-1'>
                            <h1 className='text-green-400'>Fats:</h1>
                            <input type="text" className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justifycenter mt-1'>
                            <h1 className='text-green-400'>Foot Steps:</h1>
                            <input type="text" className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justifycenter mt-1'>
                            <h1 className='text-green-400'>Water intake (in ltr):</h1>
                            <input type="text" className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justifycenter mt-1'>
                            <h1 className='text-green-400'>
                                Sleep Taken (in hrs):</h1>
                            <input type="text" className='w-[10vw] text-sm  text-white border border-white rounded-xl px-[1vw]'/>
                        </div>
                        <div className='flex gap-2 items-center justifycenter mt-3'>
                            <h1 className='text-green-400'>Workout Intensity:</h1>
                            <select className='w-[15vw] text-sm  text-white border border-white rounded-xl px-[1vw] font-roboto-condensed'>
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
