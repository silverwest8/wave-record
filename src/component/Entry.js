import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";
  
function Entry() {

    const Title = "Record of Wave";

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignContent: 'center', height: "100%", fontSize: '40px' }} >
            <Link style={{display: 'block', margin: 'auto 0'}} to="/main">{Title}</Link>
        </div>
    )
}

export default Entry;
