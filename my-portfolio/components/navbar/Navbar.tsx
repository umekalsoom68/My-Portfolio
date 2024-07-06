import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

export default function Navbar(){
    return(
        
        <div className='bg-gray-900  mb-10 mr-10 ml-10  '>
        <nav className='font-medium flex justify-between p-2 bg-gray-900 '>
    <div className='text-white text-xl font-bold ml-8 mr-80'>Um-e-Kalsoom Rizvia.</div>
    <ul className="flex space-x-4 text-white font medium mr-10">
    <Link className='text-blue-400' href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/education">Education</Link>
    <Link href="/skills">Skills</Link>
    <Link href="/contact">Contact</Link>
                </ul>
                <Image
            src="/images/git profile.jpg"
            width={250}
            height={250}
            alt='profile'
            className='absolute top-8 right-6  mix-blend-overlay opacity-0.2 overflow-hidden flex mr-20 mt-12 '
        />
            </nav>
        <div className=' ml-8 bg-gray-900 ' > 
    <h1 className='text-white font-semibold text-2xl ml-5 mb-2  '>Hi,I'm Um-e-Kalsoom Rizvia</h1>
      <h1 className='text-sky-500 font-semibold text-xl ml-5 mb-3'>Frontend Developer |</h1>  
      <p className='text-white ml-5'> I'm a passionate frontend developer. I am learning HTML, CSS, and JavaScript to build websites. </p>
      <p className='text-white ml-5' >I have created several small projects to practice my skills. </p>
      <p className='text-white ml-5'> I'm continuously expanding my skills in modern frameworks Next.js </p>
      <p className='text-white ml-5'>I enjoy making websites that look good on all devices.I use Git to keep track of my code changes </p>
      <p className='text-white ml-5'>I like to stay updated with the latest trends in web development. </p>
       <button className='text-gray-600  rounded-sm font-bold m-5 h-10 w-20   hover:bg-sky-400 '>Hire Me </button>
       <button className='text-sky-400 h-10 w-28 m-2 focus:border-2 focus:border-blue-500 ' >Let's Talk</button>
       </div>
       <div className='flex space-x-2  ml-7 text-blue-400 '>
       <div className='p-2 border-blue-400 rounded-full'><FaFacebook/></div>
    <div className='p-2 border-blue-400 rounded-full' > <FaTwitter/>   </div>
    <div className='p-2 border-blue-400 rounded-full' ><FaLinkedin/>   </div>
    </div>   
        </div>
    )
}