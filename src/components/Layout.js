import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}){
    return(
        <div className='layout'>
            <Navbar/>
            <div className='content'>
                {children}
            </div>
            <footer>
            <p>This is the footer section of our Kunga Website</p>
            </footer>
        </div>
     
    )
}