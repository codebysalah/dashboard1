import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div>
            <p>This is the products page</p>
            <Link to="/"  >Goto dashboard page</Link>
        </div>
    )
}