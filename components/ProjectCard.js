import Image from 'next/image'

function ProjectCard({Icon, title, techStack, link}) {
  return (
    <div className='flex flex-col group bg-[#092346] p-5 cursor-pointer 
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image 
        className='rounded-2xl max-w-sm'
        src={Icon}
        width={300}
        height={300} 
      />
      <p className='text-gray-500 pt-4'><span className='text-white'>Title:</span> {title}</p>
      <p className='text-gray-500 pt-2 opacity-0 group-hover:opacity-100'><span className='text-white'>Technologies used:</span> {techStack}</p>
      <p className='text-gray-500 pt-2 cursor-pointer opacity-0 group-hover:opacity-100 animate-bounce'><span className='text-white'>Link:</span> {link}</p>
      
    </div>
  )
}

export default ProjectCard
