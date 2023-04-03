import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/events.module.css"


/* Step 2: Defining our component. Note that our
component name should start with a capital letter. */
const EventsPage = () => {
    
    return (
     <Layout>
        <div className={styles.events}>
        <h2>Events For You!</h2>
        <h3>Discover the best online events with Kunga. Find virtual concerts, workshops, and more. Browse our listings and book your next experience today</h3>
        </div>
      </Layout>
    )
  }

  /* Step 3: Exporting our component so it
can be used by other parts of our app. */
  export default EventsPage