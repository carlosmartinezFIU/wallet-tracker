import './Spending.css'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import DataContext from '../../DataContext/DataContext'


const Spending = () => {
  const { spend, setSpend } = useContext(DataContext);


  useEffect(() => {
    const getTotalSpent = async () => {
      try {
        const result = await axios.get('/totalitems');  
        const cleanResult = (result.data[0].this_is_sum);
        setSpend(cleanResult)
      } catch (error) {
          console.log(error)
      }
    }
    getTotalSpent();
  },) 


  return (
    <div className='spending-wrapper'>
        <p>Total Spending</p>
        {spend != null ? <p className='spending-num'>$ {spend}</p> : <p className='spending-num'>$0</p>}
    </div>
  )
}

export default Spending