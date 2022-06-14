import './DateCard.css'


const DateCard = () => {

  
  const current = new Date();
  const date = `${current.getDate()} ${current.getFullYear()}`
  let day = '';
  let month = '';

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December']

  for(let index = 0; index <= days.length; index++ ){
    if(current.getDay() === index)
    {
      day = days[index];
    }
  }

  for(let index = 0; index <= months.length; index++){
    if(current.getMonth()+ 1 === index){
      month = months[index];
    }
  }

  return (
    <div className='datecard-wrapper'>
      <div className='date-title-container'>
          <p className='date-title'>Date</p>
      </div>
      <div className='date-container'>
          <p>{month} {date}</p>
          <p className='weekday-title'>{day}</p>
      </div>
      
    </div>
  )
}

export default DateCard