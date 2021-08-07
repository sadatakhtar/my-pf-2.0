import ProjectCard from "./ProjectCard";
import netflixImg from "../assets/netflix-logo.png";
import huluImg from "../assets/hulu3.png";
import qaImg from "../assets/login1.png";
import cyfImg from "../assets/student-tracker.png";
import tvImg from "../assets/tvshows.jpeg";
import countriesImg from "../assets/countries.jpeg";
import quoteImg from "../assets/random.jpeg";

function Projects() {
  return (
    <div className="md:bg-[#afb2d1] max-w-xs sm:max-w-lg md:max-w-2xl 2xl:max-w-3xl m-auto mb-20">
      <h1 id="projects" className="text-3xl text-black p-5 text-center ">
        PROJECTS
      </h1>
      <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center space-x-2 space-y-1 shadow-2xl">
        <ProjectCard
          Icon={netflixImg}
          title="Netflix Clone"
          techStack="React, CSS, REST Api, Deployed on Netlify"
          link="https://netflix-clone-16e6a.web.app/"
        />
        <ProjectCard
          Icon={huluImg}
          title="Hulu Clone"
          techStack="NextJS, TailwindCSS, REST Api, HeroIcons, Flexbox, CSS Grid, Vercel"
          link="https://hulu-clone-umber.vercel.app/"
        />
        <ProjectCard
          Icon={qaImg}
          title="Q & A platform"
          techStack="React, Node, Express, postgreSQL, Netlify"
          link="https://question-mark.netlify.app/"
        />
        <ProjectCard
          Icon={cyfImg}
          title="Student Tracker App"
          techStack="Javascript, React, CSS, HTML, NodeJS, Express, Heroku"
          link="https://cyf-student-tracker-1.herokuapp.com/"
        />
        <ProjectCard
          Icon={tvImg}
          title="TV Shows"
          techStack="Javascript, CSS, HTML, Netlify"
          link="https://cyf-sadatakhtar-tv.netlify.app/"
        />
        <ProjectCard
          Icon={countriesImg}
          title="Countries"
          techStack="Javascript, CSS, HTML, Netlify"
          link="https://cyf-sadatakhtar-countries.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
