import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const showMessage = () => {
    alert('hello')
  }
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <button onClick={showMessage}>click me</button>
    </div>
  )
}

export default Home
