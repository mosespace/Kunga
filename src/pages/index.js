import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


/* Step 2: Defining our component. Note that our
component name should start with a capital letter. */
const HomePage = () => {
    
    return (
        <>
        <Navbar/>
      <h1>Hi, welcome to my site!</h1>
      <Footer/>
      </>
    )
  }

  /* Step 3: Exporting our component so it
can be used by other parts of our app. */
  export default HomePage