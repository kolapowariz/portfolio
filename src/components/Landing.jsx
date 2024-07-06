import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import Myself2 from '/Myself2.jpeg';
import nft from '/nft.jpg';
import { Link } from 'react-router-dom';
import fb from '/fb.svg';
import ig from '/insta.svg';
import tw from '/Group.svg';
import ln from '/Linkedin.svg';
import portdata from '../Data/portfolio.json';

const Landing = () => {
  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <div className='w-full mx-auto lg:w-[95%] lg:mx-auto bg-[#ffbb8b] p-5 lg:m-5'>
      <header className='lg:hidden flex justify-between items-center mt-4 mx-4'>
        <h1 className='text-sm'>Kolapo Wariz</h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <MdCancel className='w-8 h-8 ' /> : <FiAlignJustify className='w-8 h-8' />}</button>
        </nav>
      </header>
      <main className='lg:hidden'>
        <div className={click ? '' : 'hidden'}>
          <ul className='py-2 text-center'>
            <li className='py-2 text-sm'>About Me</li>
            <li className='py-2 text-sm'>Projects</li>
            <li className='py-2 text-sm'>Contacts</li>
            <li className='py-2 text-sm'>Download Resume</li>
          </ul>
        </div>
      </main>

      <header className='hidden lg:flex justify-between items-center mt-4'>
        <h1 className='text-sm'>Kolapo Wariz</h1>
        <nav>
          <ul className='flex justify-between mx-4 gap-20 text-sm'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li>Download Resume</li>
          </ul>
        </nav>
      </header>

      <main className='mx-4 my-4'>
        <section id='#' className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
          <section className='order-last lg:order-first lg:w-3/5'>
            <p className='text-2xl lg:text-3xl my-4'>Hi there! Call me Wariz,</p>
            <p className='text-3xl lg:text-4xl my-4'>FrontEnd developer.</p>
            <section id='about' className='mt-5'>
              <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
              <p>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C# (C Sharp) programming language. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit.</p>
              <p>However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development.</p>
              <p>This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
            </section>
          </section>
          <section>
            <img src={Myself2} width={779} height={571} alt="Kolapo Wariz" loading='lazy' className='block mt-6 h-72 w-72 mx-auto rounded-full object-cover' />
          </section>
        </section>
        <section id='projects' className='mt-4'>
          <h2 className='text-center text-4xl'>Projects</h2>
          <section className='flex flex-col lg:flex-row justify-center items-center my-10 '>
            <div className='w-full h-72 rounded-t-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-s-2xl p-5'>
              <p>Healler</p>
              <p className='mb-4'>Description of Healler</p>
              <Link to='/projects' className='text-blue-500 border-slate-800 border rounded-lg p-2'>View Project</Link>
            </div>
            <div className='w-full h-72 rounded-b-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-e-2xl p-5'>
              <img src={nft} alt="myself" className='h-full mx-auto' />
            </div>
          </section>
          <section className='flex flex-col lg:flex-row justify-center items-center my-10'>
            <div className='w-full h-72 rounded-b-xl lg:w-96 lg:h-96 bg-gray-200 lg:rounded-r-2xl lg:rounded-l-none p-5'>
              <p>Capstone Project</p>
              <p className='mb-4'>Description of Capstone project</p>
              <Link to='/projects' className='text-blue-500 border-slate-800 border rounded-lg p-2'>View Project</Link>
            </div>
            <div className='w-full h-72 rounded-t-xl lg:w-96 lg:h-96 bg-gray-200 lg:rounded-l-2xl lg:rounded-r-none p-5 order-first'>
              <img src={nft} alt="myself" className='h-full mx-auto' />
            </div>
          </section>
        </section>
        <section>
          {/* <h2 className='text-center text-4xl'>Projects</h2> */}
          <div>
            {portdata.portfolio.map((data, index) => {
              return (
                <div key={index} className='flex flex-col lg:flex-row justify-center items-center my-10 '>
                  <div className='w-full h-72 rounded-t-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-s-2xl p-5'>
                    <p>{data.title}</p>
                    <p className='mb-4'>{data.description}</p>
                    <Link to='/projects' className='text-blue-500 border-slate-800 border rounded-lg p-2'>View Project</Link>
                  </div>
                  <div className='w-full h-72 rounded-b-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-e-2xl p-5'>
                    <img src={data.image} alt={data['image-alt']} width={338} height={344} className='h-full mx-auto' />
                  </div>
                </div>
              )
            })}
          </div>

        </section>
        <section id='contact' className='mt-4 w-4/5 lg:w-2/4 mx-auto'>
          <h2 className='text-center text-4xl'>Contact</h2>
          <form action="">
            <input type="text" placeholder='Name' className='w-full p-2 my-2 rounded-md' />
            <input type="email" placeholder='Email' className='w-full p-2 my-2 rounded-md' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-full p-2 my-2 rounded-md'></textarea>
            <button type="button" className='w-full p-2 my-2 bg-blue-500 text-white rounded-md'>Send</button>
          </form>
        </section>
      </main>
      <footer>
        <div className='flex justify-center'>
          <img src={fb} width={30} height={30} className='mr-4' alt="Facebook Account" />
          <img src={ig} width={30} height={30} className='mr-4' alt="Instagram Account" />
          <img src={tw} width={37} height={30} className='mr-4' alt="X Account" />
          <img src={ln} width={30} height={30} className='mr-4' alt="Facebook Account" />
        </div>
        <p className='text-center text-sm my-4'>Kolapo Wariz &copy; 2024</p>
      </footer>
    </div>

  )
}

export default Landing;