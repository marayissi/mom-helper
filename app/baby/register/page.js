import Link from 'next/link'
import React from 'react'

export default function register() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>when was your baby born?</p>
      <input type="date"/>
      <p>What is your babys name?</p>
      <input type="text"/>
      <button><Link href="/">Submit</Link></button>
    </div>
  )
}
