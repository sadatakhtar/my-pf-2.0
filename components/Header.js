import Image from 'next/image'
import logo from '../assets/sphereLogo.jpeg'

function Header() {
  return (
    <header className='bg-[#092346] text-white flex  justify-between p-5'>
      <div className='flex'>
        <p className='flex justify-center items-start'>Sadat's</p>
        <h1 className='text-5xl flex justify-center items-center'>Portfolio</h1>
        <p className='flex justify-center items-end'>Website</p>
      </div>
      <Image  
        className='rounded-full'
        src={logo}
        width={90}
        height={90}
      />


    </header>
  )
}

export default Header
