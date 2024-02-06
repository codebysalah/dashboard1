import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return(
        <div>
            <p>this is the dashboard</p>
            <Link to="/products"  >Goto products page</Link>
        </div>
    )
}