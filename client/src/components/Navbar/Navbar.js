import './Navbar.css'
import { MdSpaceDashboard } from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  let nav = useNavigate();

  return (
    <div className='navbar-wrapper'>
        <div className='menu-title'>Menu</div>
        
        <div className='navbar-container'>
          <div className='dashboard-btn-container'>
              <MdSpaceDashboard className='dash-logo'/> 
              <button className='home-btn' onClick={() => {nav("/")}}>Home</button>
          </div>

          <div className='transaction-btn-contianer'>
              <GrTransaction className='transaction-logo'/>
              <button className='transaction-btn' onClick={() => {nav("/transactions")}}>Transations</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar