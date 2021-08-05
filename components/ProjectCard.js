import Image from 'next/image'


function ProjectCard({Icon, title, techStack, link}) {
  return (
    <div className='flex justify-center flex-col group bg-[#989bc2] p-5 cursor-pointer border
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 sm:object-cover'>
      <a href={link} target='_blank'>
        <Image 
        className='rounded-2xl sm:w-auto'
        src={Icon}
        width={200}
        height={200} 
        // objectFit='contain'
        
        />
     </a>

      <p className='text-black pt-4 text-md'> {title}</p>
      <p className='text-sm text-black pt-2 display-none group-hover:display-block'><span className='text-[#092346]'>Technologies used:</span> {techStack}</p>
      <p className='text-sm text-black pt-2 cursor-pointer display-none group-hover:display-block text-[#092346] hover:text-white
      '><a href={link}> Click here to view site</a></p>
      
    </div>
  )
}

export default ProjectCard
