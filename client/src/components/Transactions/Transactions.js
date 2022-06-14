import { useState } from 'react'
import './Transactions.css'
import { MdDelete } from 'react-icons/md' 
import { BiDotsHorizontal } from 'react-icons/bi'
import axios from 'axios';

import { useContext, useEffect } from 'react'
import DataContext from '../DataContext/DataContext'


const Transactions = () => {
  const { list, setList } = useContext(DataContext);
  console.log(list);

  useEffect(() =>{
    const getList = async () =>{
        try {
            const result = await axios.get('/list');
            setList(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    getList();
  }, [])

  const deleteItem = async (itemId) =>{
      try {
        const result = await axios.delete(`/item/${itemId}`)
        setList(list.filter(item => item.item_id !== itemId))
      } catch (error) {
        console.log(error)
      }
  }



  return (
    <div className='transactions-wrapper'>
      {list.length ? list.map(item => {
          return(
            
            <div key={item.item_id} className='item-container'>
              <p className='item-name'>{item.item_name}</p>
              <p className='item-price'>{"$"+item.item_price}</p>

              <div className='date-container-transactions'>
                <p className='item-month'>{item.item_month}</p>
                <p className='item-day'>{item.item_day}</p>
                <p className='item-year'>{item.item_year}</p>
              </div>

              <MdDelete className='delete-btn' onClick={()=>{deleteItem(item.item_id)}}/>
              <p className='item-category'>{item.item_category}</p>
            </div>
          )
        }) :  <div className='item-container'><p>No Transactions</p></div>
      }
      
    </div>
  )
}

export default Transactions

//: <div className='item-container'><p>No Transactions</p></div>


