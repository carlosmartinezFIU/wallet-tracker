import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainDash from './components/MainDash/MainDash';
import Transactions from './components/Transactions/Transactions';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataContext/DataContext';



function App() {

  return (
    <DataProvider >
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                  <Route path='/' element={<MainDash />}/>
                  <Route path='/transactions' element={<Transactions />}/>
                </Routes>
            </div>
        </Router>
    </DataProvider>
  );
}

export default App;

/**
 *  <div className='main-dashboard-wrapper'>
            <Dashboard />
            <Calendar />
        </div>
        <DailyT />
 */
