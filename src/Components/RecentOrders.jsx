import React from 'react'
import {Link} from 'react-router-dom'

const recentOrderData = [
    {
        id: '1',
        product_id: '7453',
        customer_name: 'John Smith',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '7453',
        customer_name: 'Thomas Robert',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '3',
        product_id: '7453',
        customer_name: 'Smith Michael',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '4',
        product_id: '7453',
        customer_name: 'Brian Carrol',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]

export default function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
         <strong className='text-gray-700 font-medium'>Recent Orders</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>PRODUCT ID</td>
                        <td>CUSTOMER NAME</td>
                        <td>ORDER DATE</td>
                        <td>ORDER TOTAL</td>
                        <td>SHIPPING ADDRESS</td>
                        <td>ORDER STATUS</td>
                    </tr>
                </thead>
                <tbody>
                    {recentOrderData.map((order) => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>
                                {order.product_id}
                            </td>
                            <td>
                                {order.customer_name}
                            </td>
                            <td>{new Date(order.order_date).toLocaleDateString()}</td>
                            <td>{order.order_total}</td>
                            <td>{order.shipment_address}</td>
                            <td>{order.current_order_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
