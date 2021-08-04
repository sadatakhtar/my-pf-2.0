import Image from 'next/image'

function ProjectCard({Icon, title, techStack, link}) {
  return (
    <div className='flex flex-col group bg-[#afb2d1] p-5 cursor-pointer 
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image 
        className='rounded-2xl max-w-xs'
        src={Icon}
        width={200}
        height={200} 
      />
      <p className='text-black pt-4'><span className='text-[#092346]'>Title:</span> {title}</p>
      <p className='text-xs text-black pt-2 opacity-0 group-hover:opacity-100'><span className='text-[#092346]'>Technologies used:</span> {techStack}</p>
      <p className='text-xs text-black pt-2 cursor-pointer opacity-0 group-hover:opacity-100 animate-bounce'><span className='text-[#092346]'>Link:</span> {link}</p>
      
    </div>
  )
}

export default ProjectCard
