import Image from 'next/image'
import { Link } from 'react-dom'

function ProjectCard({Icon, title, techStack, link}) {
  return (
    <div className='flex justify-center flex-col group bg-[#afb2d1] p-5 cursor-pointer 
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <a href={link} target='_blank'>
        <Image 
        className='rounded-2xl max-w-xs'
        src={Icon}
        width={1080}
        height={720} 
        objectFit='cover'
        />
     </a>

      <p className='text-black pt-4 text-md'> {title}</p>
      <p className='text-sm text-black pt-2 opacity-0 group-hover:opacity-100'><span className='text-[#092346]'>Technologies used:</span> {techStack}</p>
      <p className='text-sm text-black pt-2 cursor-pointer opacity-0 group-hover:opacity-100 text-[#092346] hover:text-white
      '><a href={link}> Click here to view site</a></p>
      
    </div>
  )
}

export default ProjectCard
