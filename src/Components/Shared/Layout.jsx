import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
    return(
        <div className="w-screen h-screen bg-neutral-100 flex flex-row overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div><Outlet /></div>
            </div>
        </div>
    )
}