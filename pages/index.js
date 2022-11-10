import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>when was your baby born?</p>
      <input type="date"/>
      <button><Link href="/home">Submit</Link></button>
    </div>
  )
}
