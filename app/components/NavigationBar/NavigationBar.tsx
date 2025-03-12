import React from 'react'
import Link from "next/link";
const NavigationBar = () => {
  return (
    <div className='navbar bg-primary text-neutral-content rounded-md'>
      <Link className='btn btn-ghost' href="/">Home</Link>
      <Link className='btn btn-ghost' href="/career">Career References</Link>
      <Link className='btn btn-ghost' href="/projects">Projects</Link>
      <Link className='btn btn-ghost' href="/page_examples">Page Examples</Link>
      <Link className='btn btn-ghost' href="/users">Users</Link>
    </div>
  )
}

export default NavigationBar