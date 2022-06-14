import DateCard from '../Cards/DateCard/DateCard'
import NetWorth from '../Cards/NetWorth/NetWorth'
import Income from '../Cards/Income/Income'
import Spending from '../Cards/Spending/Spending'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <DateCard />
        <Income />
        <Spending />
        <NetWorth />
    </div>
  )
}

export default Dashboard