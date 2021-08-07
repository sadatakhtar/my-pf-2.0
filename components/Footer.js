function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-black 
    text-white text-sm font-thin p-3 sm:flex-row  justify-evenly sm:p-10 
    sm:text-base md:text-lg md:p-10">
      <p className=''>&copy; Copyright 2021. Sadats Portfolio Website.</p>
      <a
        href="https://docs.google.com/document/d/1p9-4aXI951dotOAKszdt2rsy6_8OU8vAVxph7cTyLuQ/edit"
        target="_blank"
        rel="noreferrer"
      >
        <p id='resume' className=' hover:text-pink-500 animate-bounce'>Click here to view CV</p>
      </a>
    </div>
  );
}

export default Footer;
