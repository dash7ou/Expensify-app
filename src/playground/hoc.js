// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// props manipulation
// Abstract state

import React from 'react';
import ReactDOM from "react-dom";


const Info = (props)=>{
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
}


const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isadmin && <p>this is private info. Please do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}
const requireAuth = (WrappedComponent)=>{
    return (props)=>(
        <div>
           { props.isAuth? <WrappedComponent {...props}/>: <p>Please login</p> }
        </div>
    )
}


const AuthInfo = requireAuth(Info)

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isadmin={true} info="there are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuth={true} info="there are the details" />, document.getElementById("app"))
