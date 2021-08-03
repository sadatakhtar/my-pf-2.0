function Nav() {
  const navHeadings = {
    0: 'Home',
    1: 'Projects',
    2: 'Resume',
    3: 'About',
    4: 'Contact', 
  }

  return (
    <nav className='flex py-5 px-10 sm:px-20 text-sm md:text-lg whitespace-nowrap
     space-x-10 sm:space-x-20 md:px-60 md:space-x-40 
     overflow-x-scroll scrollbar-hide bg-[#afb2d1] lg:justify-evenly'>
      {Object.values(navHeadings).map((heading) => (
        <h2 className='cursor-pointer hover:text-white font-light'>{heading}</h2>
      ))}
    </nav>
  )
}

export default Nav
