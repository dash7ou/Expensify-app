import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = ({ description ,id, amount , createdAt})=>(

        <Link className="list-items" to={`/edit/${id}`}>
            <div>
                {description && <h3>{description}</h3>}
                <span> {moment(createdAt).format('MMMM Do, YYYY')} </span>
            </div>
            <h3> {numeral(amount /100).format('$0,0.00')} </h3>
        </Link>

)

export default ExpenseItem;