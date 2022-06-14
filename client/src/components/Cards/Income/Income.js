import './Income.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react'
import DataContext from '../../DataContext/DataContext';

const Income = () => {
  const { income, setIncome } = useContext(DataContext);

  useEffect(() => {
    const getIncome = async () => {
        const result = await axios.get('/api/v1/income');
        setIncome(result.data[0].sum);
    }
    getIncome();
  }, [])
  

  return (
    <div className='income-wrapper'>
        <p className='total-income'>Total Income</p>
        {income != null ? <p className='income-num'>$ {income}</p> : <p className='income-num'>$0</p>}

    </div>
  )
}

export default Income