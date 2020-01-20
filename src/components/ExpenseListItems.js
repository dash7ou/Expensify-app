import React from "react";
import { Link } from "react-router-dom"


const ExpenseItem = ({ description ,id, amount , createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}>
            {description && <h1>{description}</h1>}
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseItem;