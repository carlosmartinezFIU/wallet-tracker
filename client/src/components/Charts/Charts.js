import { useEffect } from 'react';
import './Charts.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { useContext } from 'react';
import DataContext from '../DataContext/DataContext';
import axios from 'axios';

const Charts = () => {
    const { spend, list, setList } = useContext(DataContext);

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


  return (
        <ResponsiveContainer width='100%' aspect={3}>
            <BarChart width={730} height={350} data={list}>
                <CartesianGrid strokeDasharray="0.5" />
                <XAxis dataKey="item_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="item_price" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    
  )
}

export default Charts

//<Label value="Recent 10 statements" position="top" offset={270}/>