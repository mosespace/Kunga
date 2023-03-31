// Step 1: Import React
import * as React from 'react'
import { SEO } from "../components/seo"
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to the Kunga.io</h1>
      <p>Discover and join any Events closer to you!</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <SEO title="Home Page" />
)

// Step 3: Export your component
export default IndexPage