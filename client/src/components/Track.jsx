import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import trackFunctions from '../utils/trackFunctions'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const Track = ({atTop}) => {
  const [data, setData] = useState(null)
  const [dayAvg, setDayAvg] = useState(null)
  const [weekAvg, setWeekAvg] = useState(null)
  const [monthAvg, setMonthAvg] = useState(null)

  const [of, setOf] = useState('month')

  const [calories, setCalories] = useState(0)
  const [steps, setSteps] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [water, setwater] = useState(0)

  const todaysDate = new Date()

  const { groupByYear, groupByMonth, groupByWeek, dailyAvg, weeklyTotals, monthlyTotals, weeklyAvg, monthlyAvg} = trackFunctions()

  const calculateData = () => {
    // if( of === 'day' && yearWise ){
    //   const presentYearData = yearWise[todaysDate.getFullYear()]
    //   console.log(presentYearData)
    //   const dateArr = []
    //   const dateData = []
    //   presentYearData.forEach( day => {
    //     dateArr.push((day.date).split('T')[0])
    //     dateData.push({ calories: day.calories, carbs: day.carbs, fats: day.fats, protein: day.protein, sleep: day.sleep, steps: day.steps, water: day.water})
    //   })
    //   return { dateArr, dateData}
    // }
    // if( of === 'week' && yearWiseWeekFixedTotal ){
    //   const presentYearData = yearWiseWeekFixedTotal[todaysDate.getFullYear()]
    //   console.log(presentYearData)
    //   const weekArr = []
    //   const weekData = []
    //   for(let i in presentYearData){
    //     if(i === 'noOfWeeks'){
    //       continue
    //     }
    //     weekArr.push(i)
    //     weekData.push( presentYearData[i])
    //   }
    //   console.log(weekArr)
    //   console.log(weekData)
    // }
    // if( of === 'month' && yearWiseMonthTotal ){
    //   const presentYearData = yearWiseMonthTotal[todaysDate.getFullYear() - 1]
    //   console.log(presentYearData)
    //   const monthArr = Object.keys(presentYearData)
    //   const monthData = []
    //   for(let i in presentYearData){
    //     monthData.push( presentYearData[i])
    //   }
    //   console.log(monthArr)
    //   console.log(monthData)
    // }
  }
  const dayClick = (e) => {
    setOf('day')
    setCalories(dailyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(dailyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(dailyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(dailyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }
  const weekClick = (e) => {
    setOf('week')
    setCalories(weeklyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(weeklyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(weeklyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(weeklyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }
  const monthClick = (e) => {
    setOf('month')
    setCalories(monthlyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(monthlyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(monthlyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(monthlyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/track');
        setDayAvg(dailyAvg(res.data.track))
        setWeekAvg(weeklyAvg(res.data.track))
        setMonthAvg(monthlyAvg(res.data.track))
        setData(res.data.track)
        return
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const yearData = dailyAvg(data)[todaysDate.getFullYear()];
    if (yearData) {
      setCalories(yearData['avgCalories']);
      setSleep(yearData['avgSleep']);
      setSteps(yearData['avgSteps']);
      setwater(yearData['avgWater']);
    }
  }, [data]);

  return (
    <div className={ (atTop? 'mt-[18vh]':'mt-[5vh]' ) + ' min-w-3xl min-h-300 border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4'}>
      <div className='w-[90%] h-[6vh] mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'day' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={dayClick}
        >
          Daily
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'week' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={weekClick}
        >
          Weekly
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'month' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={monthClick}
        >
          Monthly
        </h1>
      </div>
      <div className='w-9/10 min-h-250 h-[90vh] bg-[#121212] rounded-4xl flex flex-col items-center justify-center font-roboto-condensed'>
          <div className='w-9/10 h-9/10 flex flex-col justify-around items-center'>
            <div className='w-8/10 h-15/100 flex justify-center gap-5'>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {calories}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Calories
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {steps}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Foot Steps
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {sleep}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Sleep
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {water}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Water
                    </h1>
                </div>
              </div>
            </div>
            <div className='w-full h-78/100 border'>
              {/* chatr area */}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Track
