import React from 'react'
import "../css/Keep.css"
import Logo from "../images/keep.jpg"

const Header =()=>{
return(
<div className="header">
<div className="container">
    <div className="top">
    <div className="item pt-2 pb-3">
<img src={Logo} alt="logo" className="logo pt-1"/>
        <h1 className="hbv pt-4 mx-2">Google Keep</h1>
        </div>
        </div>
        </div>
        </div>
    

)
}
export default Header;