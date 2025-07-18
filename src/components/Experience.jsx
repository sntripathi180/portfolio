import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nodejs from "../assets/node.png"
import mongodb from "../assets/MongoDB.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import cpp from "../assets/cpp.png"
import express from "../assets/express.png"
import kotlin from "../assets/kotlin.png"
import postgresql from "../assets/postgresql.png"


const Experience = () => {
  const techs= [
    {
      id:1,
      src:html,
      title:'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src:reactImage,
      title:'React',
      style: 'shadow-blue-600'
    },
    {
      id:5,
      src:tailwind,
      title:'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id:6,
      src:nodejs,
      title:'Node JS',
      style: 'shadow-green-200'
    },
    {
      id:7,
      src:express,
      title:'Express',
      style: 'shadow-gray-400'
    },
    {
      id:8,
      src:mongodb,
      title:'MongoDB',
      style: 'shadow-green-400'
    },
    {
      id:9,
      src:postgresql,
      title:'PostgresSQL',
      style: 'shadow-gray-400'
    },
    {
      id:10,
      src:github,
      title:'Github',
      style: 'shadow-gray-400'
    },
    {
      id:11,
      src:cpp,
      title:'C++',
      style: 'shadow-blue-500'
    },
    {
      id:12,
      src:kotlin,
      title:'Kotlin',
      style: 'shadow-orange-400'
    },
  ]
  return ( 
  <div name="experience" className='min-h-screen bg-gradient-to-b from-gray-800 to-black w-full h-full'>
<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
  <div>
    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
      Experience
    </p>
    <p className='py-6'>These are the technology I've worked on </p>
  </div>
  <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


    {
      techs.map(({id,src,title,style}) =>(
        <div key={id}
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
      <img src={src} alt=" " className='w-20 mx-auto'/>
      <p className='mt-4'>{title}</p>
    </div>
      ))
    }
    
  </div>
</div>
    </div>
    )
  
}

export default Experience