function Nav() {
  return (
    <nav
      className="flex justify-evenly list-none p-3 bg-[#092346] font-small
     text-sm md:text-lg"
    >
      <a href="#home">
        <li className="text-white hover:text-pink-300">Home</li>
      </a>
      <a href="#projects">
        <li className="text-white hover:text-pink-300">Projects</li>
      </a>
      <a href='#resume'>
        <li className="text-white hover:text-pink-300">Resume</li>
      </a>
      <a href="#contact">
        <li className="text-white hover:text-pink-300">Contact</li>
      </a>
    </nav>
  );
}

export default Nav;
