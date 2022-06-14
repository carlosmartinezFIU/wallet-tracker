import './MainDash.css'
import Dashboard from '../Dashboard/Dashboard'
import DailyT from '../DailyT/DailyT'
import ModalPop from '../ModalPop/ModalPop'
import { useContext } from 'react'
import DataContext from '../DataContext/DataContext'
import Charts from '../Charts/Charts'
import RotateLoader from 'react-spinners/RotateLoader'
import { css } from '@emotion/css'


const MainDash = () => {
  const { modalOn, setModalOn, loading } = useContext(DataContext);




  return (
    <div className='main-dashboard-wrapper'>
      <div className='main-dashboard-container'>
            <Dashboard />
            { modalOn && <ModalPop />}
            <Charts />
      </div>
            <DailyT />
    </div>
  )
}

export default MainDash


//<Calendar />