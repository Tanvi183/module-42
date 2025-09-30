import React, { use } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const ResultChart = ({marksPrimise}) => {
    const resultData = use(marksPrimise);
    // console.log(resultData);
    
    return (
        <div className='mb-20'>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey="id" />
                <YAxis />
                <Line type="monotone" dataKey="Physics" stroke="green" />
                <Line type="monotone" dataKey="Chemistry" stroke="blue" />
                <Line type="monotone" dataKey="Mathematics" stroke="red" />
            </LineChart>
        </div>
    );
};

export default ResultChart;