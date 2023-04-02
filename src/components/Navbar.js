import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

export default function Navbar(){
const data = useStaticQuery(graphql`
    {
    site {
      siteMetadata {
        title
      }
    }
  }  
`
)

 const { title } = data.site.siteMetadata
    return(
        <nav>
            {/* <img src= "/logo.png" alt="site banner" style={{maxWidth: '20%'}} /> */}
            <h1>{ title }</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/events'>Events</Link>
                <Link to='/contact'>Contact us</Link>
                <Link to='/projects'>Portifolio Projects</Link>
            </div>
        </nav>
    )
}