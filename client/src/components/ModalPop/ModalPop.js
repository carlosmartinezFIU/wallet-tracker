import './ModalPop.css'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react'
import DataContext from '../DataContext/DataContext'
import axios from 'axios';
import DropDown from '../DropDown/DropDown';
import DropCat from '../DropDown/DropCat';


const ModalPop = () => {
    const { setModalOn, list, setList, setLoading } = useContext(DataContext);
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newName, setNewName] = useState('');

    const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December']

    const catOptions = ['Food', 'Utilities', 'Insurance', 'Savings', 'Recreational', 'Income']
    const amountId = 'amount-toast';
    const monthId = 'month-toast';
    const dayId = 'day-toast';
    const yearId = 'year-toast';
    const catId = 'category-toast';
    const nameId = 'name-toast';


    const closeModal = (data) => {
        setModalOn(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!month){
            emptyMonth();
            return;
        }
        if(!day || day <= 0){
            emptyDay();
            return;
        }
        if(!year || year <= 0){
            emptyYear();
            return;
        }
        if(!newCategory){
            emptyCat();
            return;
        }
        if(!newName){
            emptyName();
            return;
        }
        if(!newAmount){
            emptyAmount();
            return;
        }

        
        const body = {
            new_Month: month,
            new_Day: day,
            new_Year: year,
            new_Amount: newAmount,
            new_Name: newName,
            new_category: newCategory
        }

        try {
            const result = await axios.post('/api/v1/newtransaction', body);
            setList([...list, result.data]);
        } catch (error) {
            console.log(error)
        }

        setModalOn(false);
        setLoading(true);
        window.location = '/';

    }

    const getMonth = (data)=> {
        setMonth(data);
    }

    const getCategory = (data)=> {
        setNewCategory(data);
    }

    const emptyDay = () =>{
        toast.error("Please enter a Day", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: dayId
        });
    }

    const emptyYear = () =>{
        toast.error("Please enter a year", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: yearId
        });

    }

    const emptyMonth = () =>{
        toast.error("Please enter a Month", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: dayId
        });
    }

    const emptyCat = () =>{
        toast.error("Please select a Category", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: dayId
        });
    }

    const emptyName = () =>{
        toast.error("Please input a name", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: nameId
        });
    }

    const emptyAmount = () =>{
        toast.error("Please input an Amount !!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            toastId: amountId
        });
    }
    

    const handleDayInput = (e) =>{
        const validation = /^[0-9\b]+$/;

        if(e.target.value === '' || validation.test(e.target.value)){
            if(e.target.value < 0 || e.target.value > 31){
                toast.error("Enter a number between 1 - 31",{
                    toastId: dayId
                });
                return;
            }
            else
                setDay(e.target.value);
        }
        else
            return;
    }

    const handleYearInput = (e) =>{
        const validation = /^[0-9\b]+$/;
       

        if(e.target.value === '' || validation.test(e.target.value)){
            if(e.target.value < 0 || e.target.value > 2022){
                toast("Enter a number under 2022 or greater than 0", {
                    toastId: yearId
                });
                return;
            }
            else
                setYear(e.target.value);
        }
        else
            return;
    }

    const handleAmountInput = (e) =>{
        const validation = /^[0-9,\b]*[.]{0,1}[0-9,\b]*$/;

        if(e.target.value === '' || validation.test(e.target.value)){
            if(e.target.value < 0 || e.target.value > 100000){
                toast.error("Enter a number between 1 - 100,000", {
                    toastId: amountId
                });
                return;
            }
            else
                setNewAmount(e.target.value);
        }
        else
            return;
    }

    const handleNameInput = (e) =>{
        const onlyAlphabet = e.target.value.replace(/[^A-Za-z]+$/gi, ' ');
        setNewName(onlyAlphabet);
    }


  return (
    <div className='modal-overlay'>
        <ToastContainer limit={2}/>
        <div className='modal-container'>
            <form className='form-container'>

                <div className='date-container-modal'>
                    <label>Date</label>
                    <DropDown getMonth={getMonth} monthOption={monthOptions}/>

                    <input className='day-input' 
                    type="text"
                    placeholder='dd'
                    value={day}
                    onChange={handleDayInput}
                    maxLength={2}
                    />

                    <input className='year-input' 
                    placeholder='yyyy'
                    value={year}
                    onChange={handleYearInput}
                    maxLength={4}
                    />

                </div>

                <div className='amount-container-modal'>
                    <label>Amount</label>
                    <input className='amount-input' 
                    pattern='d\+\.\d\d$'
                    type='text'
                    placeholder='21.89'
                    value={newAmount}
                    onChange={handleAmountInput}
                    />
                </div>

                <div className='category-container-modal'>
                    <label>Category</label>
                    <DropCat catOptions={catOptions} getCategory={getCategory}/>
                </div>

                <div className='name-container-modal'>
                    <label>Name</label>
                    <input className='name-input' 
                    placeholder='airpods'
                    value={newName}
                    onChange={handleNameInput}
                    />
                </div>
                
            </form>
            <div className='btn-container'>
                <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
                <button className='save-btn' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default ModalPop