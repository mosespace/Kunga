import React from 'react'
import Navbar from '../components/Navbar'


/* Step 2: Defining our component. Note that our
component name should start with a capital letter. */
const EventsPage = () => {
    
    return (
        <>
        <Navbar/>
      <h1>Hi, welcome to my events site!</h1>
      </>
    )
  }

  /* Step 3: Exporting our component so it
can be used by other parts of our app. */
  export default EventsPage