import React from 'react'
import {Link } from "react-router-dom";


const Header = () => {
  return (
   <header>
     <div className="logo">
    <h3>Portfolio</h3>
    </div>

    <nav className="hedertag">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/policy">Policy</Link>
            </li>
            {/* <li>
                <a href="/form">入力フォーム</a>
            </li> */}
            
        </ul>
    </nav>

   </header>

  )
}

export default Header