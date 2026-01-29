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
  const todaysDate = new Date()
  const [yearWise, setYearWise] = useState(null)
  const [yearWiseDailyAvg, setYearWiseDailyAvg] = useState(null)
  const [yearWiseWeekTotal, setYearWiseWeekTotal] = useState(null)
  const [yearWiseWeekFixedTotal, setYearWiseWeekFixedTotal] = useState(null)
  const [yearWiseWeekAvg, setYearWiseWeekAvg] = useState(null)
  const [yearWiseMonthTotal, setYearMonthTotal] = useState(null)
  const [yearWiseMonthAvg, setYearWiseMonthAvg] = useState(null)
  const [chartData, setChartData] = useState(null)
  const [data, setData] = useState(null)
  const { dailyAvgs, yearWiseWeeklyTotals, weeklyAvg, monthlyAvgs, groupByYear } = trackFunctions()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/track');
        setData(res.data.track)
        return
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(!data) return
    setYearWise(groupByYear(data))
    setYearWiseDailyAvg(dailyAvgs(data))
    setYearWiseWeekTotal(yearWiseWeeklyTotals(data))
    const {weekFixTotal, weekAvg} = weeklyAvg(data)
    setYearWiseWeekFixedTotal(weekFixTotal)
    setYearWiseWeekAvg(weekAvg)
    const {monthTotal, monthAvg} = monthlyAvgs(data)
    console.log(monthAvg)
    setYearMonthTotal(monthTotal)
    setYearWiseMonthAvg(monthAvg)
  }, [data])

  useEffect(() => {
    console.log(yearWiseMonthAvg)
  }, [yearWiseMonthAvg])


  
  return (
    <div className={ (atTop? 'mt-[18vh]':'mt-[5vh]' ) + ' min-w-3xl min-h-300 border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4'}>
      <div className='w-[90%] h-[6vh] mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Daily</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Weekly</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Monthly</h1>
      </div>
      <div className='w-9/10 min-h-250 h-[90vh] bg-[#121212] rounded-4xl flex flex-col items-center justify-center font-roboto-condensed'>
          <div className='w-9/10 h-9/10 flex flex-col justify-around items-center'>
            <div className='w-8/10 h-15/100 flex justify-center gap-5'>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
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
