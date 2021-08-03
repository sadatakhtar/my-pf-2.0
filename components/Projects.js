import ProjectCard from './ProjectCard'
import netflixImg from '../assets/netflix-logo.png'
import huluImg from '../assets/hulu2.png'
import qaImg from '../assets/login1.png'
import cyfImg from '../assets/student-tracker.png'
import tvImg from '../assets/tvshows.jpeg'
import countriesImg from '../assets/countries.jpeg'

function Projects() {
  return (
    <div className='bg-[#092346] '>
      <h1 className='text-3xl text-white p-5 text-center'>PROJECTS</h1>
      <div className='sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        <ProjectCard 
        Icon={netflixImg} 
        title='Netflix Clone' 
        techStack='React-node-CSS' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={huluImg} 
        title='Hulu Clone' 
        techStack='NextJS, TailwindCSS, REST Api, HeroIcons, Flexbox, CSS Grid' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={qaImg} 
        title='Q & A platform' 
        techStack='React, Node, Express, postgreSQL' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={cyfImg} 
        title='Student Tracker App' 
        techStack='Javascript, React, CSS, HTML, NodeJS, Express' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={tvImg} 
        title='TV Shows' 
        techStack='Javascript, CSS, HTML' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={countriesImg} 
        title='Countries' 
        techStack='Javascript, CSS, HTML' 
        link='https://example.com'
        />
        <ProjectCard 
        Icon={tvImg} 
        title='TV Shows' 
        techStack='Javascript, CSS, HTML' 
        link='https://example.com'
        />

      </div>
      
      
    </div>
  )
}

export default Projects
