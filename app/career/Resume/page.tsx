import React from 'react'
import Image from "next/image";
const Resume = () => {
  return (
    <div>
        <Image src="/resume.png" width={400} height={600} alt='Resume' quality={100}/>
    </div>
  )
}

export default Resume