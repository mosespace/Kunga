import React from 'react'
import { Link } from 'gatsby'

export default function Navbar(){
    return(
        <nav>
            <h1>Hello World</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/events'>Events</Link>
                <Link to='/contact'>Contact us</Link>
            </div>
        </nav>
    )
}