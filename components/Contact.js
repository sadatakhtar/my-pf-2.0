import linkedInIcon from '../assets/linkedIn.png'
import fbIcon from '../assets/facebookIcon.png'
import githubIcon from '../assets/github2.png'
import SocialMediaIcons from './SocialMediaIcons'
import instagramIcon from '../assets/instagram.jpeg'
import gmailIcon from '../assets/gmailIcon.jpeg'

function Contact() {
  return (
    <div className='flex flex-col border justify-between items-center bg-[#092346] p-10 md:'>
      {/* <h2 className='text-white text-3xl pb-5 '>Get in touch</h2> */}

      <div className='sm:flex  '>
        <form action='POST' data-netlify='true' className='flex flex-col p-10'>
          <h2 id='contact' className='text-white text-3xl pb-5'>Get in touch</h2>
          <label className='text-gray-500 pb-2'>Name *</label>
          <input className='p-2 rounded-lg' type='text' placeholder='Name' name='name' required />
          <label className='text-gray-500 pb-2 pt-4'>Email *</label>
          <input className='p-2 rounded-lg' type='email' placeholder='Email' name='email' required/>
          <label className='text-gray-500 pb-2 pt-4'>Message *</label>
          <textarea className='p-2 rounded-lg' placeholder='Message' name='message'/>
          <button className='mt-10 m-auto text-white border-2 w-40 h-16 rounded-3xl
           hover:text-[#092346] hover:bg-white mb-10'>SEND</button>
        </form>

        <div className='  p-10'>
          <h2 className='text-white text-3xl pb-5'>Connect with me</h2>
          <div className='flex '>
              <SocialMediaIcons  Icon={linkedInIcon} title='LinkedIn' link='https://www.linkedin.com/in/sadatakhtar/'/>
          <SocialMediaIcons  Icon={gmailIcon} title='Gmail' link='https://www.google.com/gmail'/>
          {/* <SocialMediaIcons  Icon={fbIcon} title='FaceBook' link='https://www.facebook.com'/> */}
          <SocialMediaIcons  Icon={githubIcon} title='Github' link='https://github.com/sadatakhtar'/>
          {/* <SocialMediaIcons  Icon={instagramIcon} title='Instagram' link='https://www.instagram.com'/> */}

          </div>
        

        </div>
      </div>
    </div>
  )
}

export default Contact
