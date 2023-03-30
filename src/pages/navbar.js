// Step 1: Importing React from the 'react' package, so that we can use JSX inside our .js file.
import * as React from 'react'

/* Step 2: Defining our component. Note that our
component name should start with a capital letter. */
const Navbar = () => {
    return (
      <h1>Hi, welcome to my site!</h1>
    )
  }

  /* Step 3: Exporting our component so it
can be used by other parts of our app. */
  export default Navbar