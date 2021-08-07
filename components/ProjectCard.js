import Image from "next/image";

function ProjectCard({ Icon, title, techStack, link }) {
  return (
    <div
      className="flex justify-center flex-col group bg-[#989bc2] p-5 cursor-pointer border
    transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 sm:object-cover"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          className="rounded-2xl sm:w-auto"
          src={Icon}
          width={200}
          height={200}
          alt="project picuture"
        />
      </a>

      <p className="text-black pt-4 text-md"> {title}</p>
      <p className="text-sm text-black pt-2 ">
        <span className="text-[#092346]">Technologies used:</span> {techStack}
      </p>
      <p
        className="text-sm text-black pt-2 cursor-pointer text-[#092346]
       hover:text-white md:opacity-0 group-hover:opacity-100 group-hover:animate-bounce
      "
      >
        <a href={link}> Click here to view site</a>
      </p>
    </div>
  );
}

export default ProjectCard;
