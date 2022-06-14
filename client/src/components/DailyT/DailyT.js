import './DailyT.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../DataContext/DataContext'

const DailyT = () => {
    const { modalOn, setModalOn, lastItems, setLastItems } = useContext(DataContext);

    const handleModalOn = () =>{
        setModalOn(true);
    }

    useEffect(() => {
        const getLast = async () => {
            try {
                const result = await axios.get('/getlast');
                setLastItems(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        getLast();
    },[])
    
  
  return (
    <div className='daily-transaction_wrapper'>
        <hr></hr>
        { lastItems && lastItems.map((item) => {
            return(
                <div key={item.item_id} className='recent-transaction-container'>
                    <p>{item.item_name}</p>
                    <p>$ {item.item_price}</p>
                </div>
            )
            })
        }
        <hr></hr>
        <button className='add-entry-btn' onClick={() => handleModalOn()}>Add Entry</button>
        <p className='title-recent-transaction'>Recent Transactions</p>
    </div>
  )
}

export default DailyT

