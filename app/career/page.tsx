'use client'
import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Resume from './Resume/page'

const career = () => {
  const download = async () => {
    const result = await fetch("/resume.png", {method:"GET",headers:{}});
    const blob = await result.blob();
    const url = URL.createObjectURL(blob);
  };

  return (
    <div>
      <NavigationBar/>
      <h1>
        Resume:
      </h1>
      <Resume/>
    </div>
  )
}

export default career