import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

export default function DashboardStatsGrid() {
    return (
        <div className="flex flex-row gap-4 w-full">
            <BoxWrapper>
                <div className="h-12 w-12 bg-sky-500 items-center justify-center rounded-full flex">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3425.60</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="h-12 w-12 bg-sky-500 items-center justify-center rounded-full flex">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3425.60</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="h-12 w-12 bg-sky-500 items-center justify-center rounded-full flex">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3425.60</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="h-12 w-12 bg-sky-500 items-center justify-center rounded-full flex">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$3425.60</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white flex flex-1 rounded-sm p-4 border border-gray-200 items-center">{children}</div>
}
