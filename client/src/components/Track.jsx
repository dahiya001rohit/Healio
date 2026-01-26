import React, { useEffect, useState } from 'react'
import api from '../utils/api'

const Track = ({atTop}) => {
  const [data, setData] = useState(null)

  const getOnGoingWeek = (dateInput) => {
    const date = new Date(dateInput)
    const oneJan = new Date(date.getFullYear(), 0, 1)
    const numOfDays = Math.floor((date - oneJan)/ 86400000)
    return Math.ceil( (numOfDays + (oneJan.getDay() + 1))/ 7)
  }

  const groupByWeek = (dataArr) => {
    if(!dataArr) {
      throw new Error('no data is given')
    }
    const weeks = {}
    
    dataArr.forEach( day => {
      const weekNum = getOnGoingWeek(day.date)
      if(!weeks[weekNum]){
        weeks[weekNum] = []
      }
      weeks[weekNum].push(day)
    })
    return weeks
  }

  const groupByMonth = (dataArr) => {
    if(!dataArr) {
      throw new Error('no data is given')
    }
    const months = {}
    
    dataArr.forEach( day => {
      const date = new Date(day.date)
      const monthNum = date.getMonth() + 1
      if(!months[monthNum]){
        months[monthNum] = []
      }
      months[monthNum].push(day)
    })
    return months
  }


  const groupByYear = (dataArr) => {
    if(!dataArr) {
      throw new Error('no data is given')
    }
    const years = {}
    
    dataArr.forEach( day => {
      const date = new Date(day.date)
      const yearNum = date.getFullYear()
      if(!years[yearNum]){
        years[yearNum] = []
      }
      years[yearNum].push(day)
    })
    return years
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/track');
        setData(res.data.track)
        const weeks = groupByWeek(res.data.track)
        console.log(weeks)
        const months = groupByMonth(res.data.track)
        console.log(months)
        const years = groupByYear(res.data.track)
        console.log(years)
        return
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
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
