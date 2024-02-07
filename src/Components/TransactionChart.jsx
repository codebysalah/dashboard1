import React from 'react'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

function TransactionChart() {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Transactions</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={chartData} margin={{top: 20, right: 10, left: -10, bottom: 0}}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3 0 0"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#0ea5e9"/>
                    <Bar dataKey="expense" fill="#ea580c"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}


const chartData = [
    {
        name: "Jane",
        expense: 4000,
        income: 1500,
    },
    {
        name: "John",
        expense: 2500,
        income: 6000,
    },
    {
        name: "Jessica",
        expense: 2000,
        income: 3000,
    },
    {
        name: "Robert",
        expense: 6000,
        income: 4500,
    },
    {
        name: "Michael",
        expense: 12000,
        income: 8500,
    },
    {
        name: "Smith",
        expense: 5500,
        income: 11000,
    },
    {
        name: "Brian",
        expense: 3500,
        income: 3800,
    },
    {
        name: "Thomas",
        expense: 7700,
        income: 9200,
    }
];

export default TransactionChart