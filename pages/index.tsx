import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

const Home: NextPage = () => {

  const showMessage = () => {
    alert('hello')
  }
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Button variant='contained' onClick={showMessage}>click me</Button>
      <br />
      <br />
      <Link href="/about">About</Link>
    </div>
  )
}
export default Home
