import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <DashboardStatsGrid />
            <div className='flex flex-row gap-4'>
                <TransactionChart />
                <BuyerProfileChart />
            </div>
            <div className='flex flex-row gap-4'>
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}
