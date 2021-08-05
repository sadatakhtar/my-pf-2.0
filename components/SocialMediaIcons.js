import Image from 'next/image'

function SocialMediaIcons({ Icon, title, link}) {
  return (
    <div className='flex flex-col group justify-center items-center
    transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50 w-20'>
      <a href={link} target='_blank'>
        <Image
        className='rounded-xl cursor-pointer'
        src={Icon} 
        width={25}
        height={25}
        alt='social media icon'
       />
        </a>
      <p className='text-white pt-2 group-hover:animate-bounce
       text-xs cursor-pointer'>{title}</p>

      
    </div>
  )
}

export default SocialMediaIcons
