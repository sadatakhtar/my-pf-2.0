import Image from "next/image";
import logo from "../assets/sphereLogo.jpeg";

function Header() {
  return (
    <header className="bg-[#092346] text-white flex  justify-between p-5">
      <div className="flex">
        <p className="flex justify-center items-start font-thin">Sadats</p>
        <h1 className="text-4xl flex justify-center items-center font-medium">
          Portfolio
        </h1>
        <p className="flex justify-center items-end font-thin">Website</p>
      </div>
      {/* <Image  
        className='rounded-full animate-pulse '
        src={logo}
        width={60}
        height={60}
      /> */}
    </header>
  );
}

export default Header;
