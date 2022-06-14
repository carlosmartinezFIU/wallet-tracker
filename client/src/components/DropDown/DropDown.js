import './DropDown.css'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'

const DropDown = ({ getMonth, monthOption }) => {

    //const options = ['January', 'February', 'March', 'April', 'May', 'June', 
    //'July', 'August', 'September', 'October', 'November', 'December']
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState('Month');


    const getOption = (data) =>{
        getMonth(data);
    }
    


  return (
    <div className='dropdown-wrapper'>
        <div className='dropdown-btn' onClick={(e) => setActive(!active)}>
            {selected}
            <span className='span-container'><AiFillCaretDown /> </span>
        </div>

        {active &&(
            <div className='dropdown-content'>
                {monthOption.map((option, i) => (
                    <div key={i} className='dropdown-item' 
                        onClick={(e) => {
                            setSelected(option)
                            setActive(false)
                            getOption(option)
                    }}>
                         {option}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default DropDown