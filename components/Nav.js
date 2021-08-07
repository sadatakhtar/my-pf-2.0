function Nav() {
 

  return (
    <nav className='flex justify-evenly list-none p-3 bg-[#092346]' >
      <a href='#home'>
        <li className='text-white hover:text-gray-500'>HOME</li>
      </a>
      <a href='#projects'>
        <li className='text-white hover:text-gray-500'>PROJECTS</li>
      </a>
      <a>
        <li className='text-white hover:text-gray-500'>RESUME</li>
      </a>
      <a href='#contact'>
        <li className='text-white hover:text-gray-500'>CONTACT</li>
      </a>
      
    </nav>
   
  )
}

export default Nav
