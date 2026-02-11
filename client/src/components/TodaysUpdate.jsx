import React, { useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

const TodaysUpdate = ({atTop}) => {
    const [error, setError] = useState('')
    const [meals, setMeals] = useState('')
    const [calories, setCalories] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [steps, setSteps] = useState('')
    const [water, setWater] = useState('')
    const [sleep, setSleep] = useState('')
    const [workoutIntensity, setIntensity] = useState('Not Done')
    const navigate = useNavigate()

    const validMeals = (mealsValue) => {
        if(!mealsValue || mealsValue.trim() === '') return false
        return true
    }

    const validNumVal = (numValArr) => {
        const varNames = ['Calories', 'Protein', 'Carbs', 'Fats', 'Foot Steps', 'Water Intake', 'Sleep']
        for (let i = 0; i < numValArr.length; i++) {
            const numVal = numValArr[i];
            if (numVal === '' || numVal.trim() === '') {
                setError(`Wrong ${varNames[i]}`);
                return false;
            }
            const n = Number(numVal);
            if (isNaN(n) || n < 0) {
                setError(`Wrong ${varNames[i]}`);
                return false;
            }
        }
        return true;
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()
        if(!validMeals(meals)){
            setError('Invalid Meals')
            return
        }
        if(!validNumVal([calories, protein, carbs, fats, steps, water, sleep])){
            return
        }
        try {
            const res = await api.post('/todays-update', { meals, calories, protein, carbs, fats, steps, water, sleep, workoutIntensity})
            if(res.data.error){
                setError(res.data.error)
                alert(res.data.error)
            } else {
                setError(null)
                alert('Update Successfull, redirecting Track page')
                navigate('/track')
            }
        } catch (error) {
            setError(error)
            return
        }
    }
  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-full border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center justify-center text-white gap-4 font-roboto-condensed'}>
        <div className='mt-[4vh] w-[80%] flex justify-center font-zalando-expanded text-4xl text-green-400 '>Today's Update</div>
        <div className='w-[86%] h-[65vh] min-h-93 bg-[#121212] rounded-4xl flex justify-center items-center mt-[5vh]'>
            <div className='w-[95%] h-[90%] flex justify-around'>
                <div className='w-40/100 h-full  rounded-4xl flex justify-center items-center px-[2vw] py-[1.5vh]'>
                    <form className='w-full min-w-80 h-[85%] flex flex-col items-stretch font-roboto-condensed justify-around' onSubmit={handleOnSubmit}>
                        <div className='flex gap-4'>
                            <h4 className='mx-1'>Meals:</h4>
                            <input type="text" className='w-45 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="Egg, Chicken etc." value={meals} onChange={(e) => setMeals(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Calories (in cal):</h1>
                            <input type='number' className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="2500" value={calories} onChange={(e) => setCalories(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Protein (in gram):</h1>
                            <input type='number' className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="120" value={protein} onChange={(e) => setProtein(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Carbs (in gram):</h1>
                            <input type='number' className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="150" value={carbs} onChange={(e) => setCarbs(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Fats (in gram):</h1>
                            <input type="number" className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="70" value={fats} onChange={(e) => setFats(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Foot Steps:</h1>
                            <input type="number" className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="10000" value={steps} onChange={(e) => setSteps(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Water intake (in ltr):</h1>
                            <input type="number" className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="2" value={water} onChange={(e) => setWater(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>
                                Sleep Taken (in hrs):</h1>
                            <input type="number" className='w-30 border border-green-400 text-xs py-[0.5vh] px-2 rounded-2xl' placeholder="8" value={sleep} onChange={(e) => setSleep(e.target.value)}/>
                        </div>
                        <div className='flex gap-4 mt-1'>
                            <h1 className='mx-1'>Workout Intensity:</h1>
                            <select className='w-45 border border-green-400 text-xs py-[0.5vh] px-[0.5vw] rounded-2xl' value={workoutIntensity} onChange={(e) => setIntensity(e.target.value)}>
                                <option value="Not Done">Not Done</option>
                                <option value="Light Intensity">Light Intensity</option>
                                <option value="Moderate Intensity">Moderate Intensity</option>
                                <option value="Vigorous Intensity">Vigorous Intensity</option>
                            </select>
                        </div>
                        {(error && error !== '') && <div className='flex justify-center text-red-500 mt-3'>
                            {error}
                        </div> }
                        <div className='w-full flex justify-center mt-5 gap-3'>
                            <button className='bg-green-400 text-[#121212] px-[2vw] py[1vh] rounded-3xl'>
                                Add Update
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-65/100 h-full border border-l-blue-400 rounded-4xl'></div>
            </div>
        </div>
        <div className='w-[86%] h-full min-h-93 bg-[#121212] rounded-4xl flex justify-center items-center mb-[6vh] mt-[5vh]'></div>
    </div>
  )
}

export default TodaysUpdate
