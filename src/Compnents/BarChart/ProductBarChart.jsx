import React from 'react';
import { Bar, BarChart, Legend, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const data = [
  { month: "January", rice: 100, wheat: 90, sugar: 70 },
  { month: "February", rice: 105, wheat: 88, sugar: 72 },
  { month: "March", rice: 102, wheat: 92, sugar: 74 },
  { month: "April", rice: 110, wheat: 95, sugar: 73 },
  { month: "May", rice: 108, wheat: 97, sugar: 75 },
  { month: "June", rice: 107, wheat: 96, sugar: 78 },
  { month: "July", rice: 112, wheat: 99, sugar: 80 },
  { month: "August", rice: 115, wheat: 101, sugar: 79 },
  { month: "September", rice: 113, wheat: 100, sugar: 77 },
  { month: "October", rice: 117, wheat: 102, sugar: 80 },
  { month: "November", rice: 120, wheat: 105, sugar: 82 },
  { month: "December", rice: 18, wheat: 103, sugar: 85 }
];


const ProductBarChart = () => {
    return (
        <div className='mb-20'>
          <BarChart width={1050} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>

            <Tooltip />
            <Legend></Legend>

            <Bar dataKey={"rice"} fill="#8884d8" />
            <Bar dataKey={"wheat"} fill="#82ca9d" />
            <Bar dataKey={"sugar"} fill="#82da8d"/>
          </BarChart>
        </div>

    );
};

export default ProductBarChart;