function Nav() {
 

  return (
    <nav className='flex justify-evenly list-none p-3 bg-[#092346] font-small
     text-sm md:text-lg'  >
      <a href='#home'>
        <li className='text-white hover:text-gray-500'>Home</li>
      </a>
      <a href='#projects'>
        <li className='text-white hover:text-gray-500'>Projects</li>
      </a>
      <a>
        <li className='text-white hover:text-gray-500'>Resume</li>
      </a>
      <a href='#contact'>
        <li className='text-white hover:text-gray-500'>Contact</li>
      </a>
      
    </nav>
   
  )
}

export default Nav
