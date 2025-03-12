import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Image from 'next/image'
const projects = () => {
  return (
    <div>
        <NavigationBar/>
        <a href="https://github.com/ImJeremyWade/Memory_Bank">
            <Image src="/gitlogo.png" className="githubIcon" width={50} height={50} alt='senior project' quality={100}/>
        </a>
        <Image src="/senior_project.jpg" width={900} height={800} alt='senior project' quality={100}/>
    </div>
  )
}

export default projects