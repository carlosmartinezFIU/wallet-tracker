import './NetWorth.css'
import { useContext } from 'react'
import DataContext from '../../DataContext/DataContext';


const NetWorth = () => {
  const { income, spend } = useContext(DataContext);
  //Change to net worth 
  const newIncome = income;
  const newSpending = spend;

  const diff = income - spend;


  return (

    <div className='goal-wrapper'>
        <p>Net Worth</p>
        <p className='goal-num'>$ {diff.toFixed(2)}</p>
    </div>
  )
}

export default NetWorth