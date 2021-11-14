import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const handlePlus = (e) => { 
        console.log('hello from plus')
        console.log(e.target.value)
    }
    return (
        <div className="header-container">
            <Link to="/plus"><button className="cal-type-plus cal-type" value="+" onClick={(e) => { handlePlus(e) }}>+</button></Link> 
            <Link to="/minus"><button className="cal-type-minus cal-type" value="-" onClick={(e) => { handlePlus(e) }}>-</button></Link>
            <Link to="/multiple"><button className="cal-type-multiple cal-type" value="*" onClick={(e) => { handlePlus(e) }}>*</button></Link>
            <Link to="/divide"><button className="cal-type-divide cal-type" value="/" onClick={(e) => { handlePlus(e) }}>/</button></Link>
            <Link to="/help">
                <img src="https://img.wattpad.com/80b7953f8bf8a7ebb7b84eb1395c992470100071/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a415069784e57466939726746413d3d2d3934353132363433342e313633303032643535393461383065343934353333323438343235372e676966"
                    alt=""
                    className="help-img"
                />
            </Link>
        </div>
    )
}

export default Header
