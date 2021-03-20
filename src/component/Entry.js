import React from 'react'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Entry() {
    return (
        <div className="title">
            <Link to="/main">Record of Wave</Link>
        </div>
    )
}

export default Entry;
