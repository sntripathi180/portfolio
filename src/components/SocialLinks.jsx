import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialLinks() {
const links = [
    {
        id: 1,
        child:(
            <>
            LinkedIn 
            <FaLinkedin size={30}/>
            </>
        ),href:'https://linkedin.com/in/stripathi05',
        style:'rounded-tr-md'
    },
    {
        id: 2,
        child:(
            <>
            Github 
            <FaGithub size={30}/>
            </>
        ),href:'https://github.com/sntripathi180'
        
    },
    {
        id: 3,
        child:(
            <>
            Mail
            <HiOutlineMail size={30}/>
            </>
        ),href:'mailto:sntripathi180@gmail.com',
       
    },
    {
        id: 4,
        child:(
            <>
            Resume
            <BsFillPersonLinesFill size={30}/>
            </>
        ),href:'/sacchidanand_resume.pdf',
        style:'rounded-br-md',
        download: 'sacchidanand_resume.pdf',
    },
]

  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {links.map(({id,child,href,style,download})=>(
            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  hover:rounded-md bg-gray-500 ${style || ''}`}>
                <a 
                href={href} 
                className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel='noreferrer'>
     {child}
     </a>
     </li>
            ))}
           
        </ul>
    </div>
  )
}

export default SocialLinks