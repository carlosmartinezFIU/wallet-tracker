import './DropCat.css'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'

const DropCat = ({ getCategory, catOptions }) => {

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState('Categories');


    const getOption = (data) =>{
        getCategory(data);
    }
    


  return (
    <div className='dropdown-wrapper'>
        <div className='dropdown-btn' onClick={(e) => setActive(!active)}>
            {selected}
            <span className='span-container'><AiFillCaretDown /> </span>
        </div>

        {active &&(
            <div className='dropdown-content'>
                {catOptions.map((option, i) => (
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

export default DropCat