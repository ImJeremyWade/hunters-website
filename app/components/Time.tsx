'use client'
import React, { useState } from 'react'

const Time = () => {
  const [text, setbuttontext] = useState(new Date().toLocaleTimeString());

  return (
    <button onClick={() => setbuttontext(new Date().toLocaleTimeString())}>{text}</button>
  )
}

export default Time