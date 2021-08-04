import { DownloadIcon } from '@heroicons/react/outline'

function ResumeComponent() {
  return (
    <div className='flex justify-center items-center p-10'>
      {/* <h2 className='text-3xl text-black'>CV</h2> */}
      <div className='flex hover:text-gray-500'>
        <DownloadIcon className='text-white bg-black rounded-l-md cursor-pointer p-2'/>
        <button className='bg-black text-white p-2 rounded-r-md hover:text-gray-500' onClick={() => {}}> 
          Download CV
        </button>
      </div>
      
    </div>
  )
}

export default ResumeComponent
