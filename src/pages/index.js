import React from 'react'
import Layout from '../components/Layout';
import * as styles from "../styles/home.module.css"

export default function Home(){
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Kunga</h2>
          <h3>Discover and join any events closer to you!</h3>

          <p>Whatever your interest, from coding and reading to networking and skill sharing, there are thousands of people who share it on <code>Kunga</code>. Events are happening every day—log in to join the fun!</p>
          
          <a className={styles.btn} href="/events">Explore The Events Now!</a>
        </div>

      </section>
    </Layout>
  )
}
