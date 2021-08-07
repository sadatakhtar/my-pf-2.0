import  centerImg from '../assets/programmer.svg'
import Image from 'next/image'
import ShowIcons from './ShowIcons'

function Main() {
  return (
   <div className='flex flex-col justify-center items-center pt-20
    md:pt-20 pb-20 bg-[#afb2d1] mh-full'>
     <Image 
      src={centerImg}
      width={80}
      height={80}
      alt='center picture'
     />
     <h2 id='home' className='text-3xl font-light pt-5 sm:text-5xl sm:font-medium 
     md:text-5xl md:font-medium'>Sadat Akhtar</h2>
     <p className='text-xs text-center font-light p-5 sm:text-sm 
     md:text-lg md:font-thin text-black'
     >Based in Birmingham - Software Developer @ NewCo - Passionate about coding</p>
     <h1 className='text-center font-light text-black-500 sm:text-lg md:text-2xl p-5 pt-1'
     >JavaScript | HTML | CSS | React | NextJS | TypeScript | Node | PostgreSQL | GraphQL | TailwindCSS</h1>

     <ShowIcons />

   </div>
  )
}

export default Main
