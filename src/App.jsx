import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import Myself2 from '/Myself2.jpeg';
import nft from '/nft.jpg';



function App() {
  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <div className='w-[95%] mx-auto lg:w-4/5 lg:mx-auto '>
      <header className='lg:hidden flex justify-between mt-4 mx-4'>
        <h1 className='text-sm'>Kolapo Wariz</h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <MdCancel className='w-8 h-8 border' /> : <FiAlignJustify className='w-8 h-8 border' />}</button>
        </nav>
      </header>
      <main className='lg:hidden'>
        <div className={click ? '' : 'hidden'}>
          <ul className='py-2 text-center'>
            <li className='py-2 text-sm'>About Me</li>
            <li className='py-2 text-sm'>Projects</li>
            <li className='py-2 text-sm'>Contacts</li>
            <li className='py-2 text-sm'>Download CV</li>
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
            <li>Download CV</li>
          </ul>
        </nav>
      </header>

      <main className='mx-4 my-4'>
        <section className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
          <section className='order-last lg:order-first lg:w-3/5'>
            <p className='text-2xl lg:text-3xl my-4'>Hi there! Call me Wariz,</p>
            <p className='text-4xl lg:text-4xl my-4'>FrontEnd developer.</p>
            <section id='about' className='mt-5'>
              <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
              <p>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C#. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit. However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development. This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
            </section>
          </section>
          <section>
            <img src={Myself2} alt="Kolapo Wariz" className='block mt-6 h-72 w-72 mx-auto rounded-full object-cover' />
            {/* <img src={Myself2} alt="Kolapo Wariz" className='mt-6 h-72 w-72 mx-auto rounded-full object-cover' /> */}
          </section>
        </section>
        <section id='projects' className='mt-4'>
          <h2 className='text-center text-4xl'>Projects</h2>
          <section className='flex flex-col lg:flex-row justify-center items-center my-10 '>
            <div className='w-4/5 h-72 rounded-t-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-s-2xl p-5'>
              <p>Healler</p>
              <p>Description of Healler</p>
            </div>
            <div className='w-4/5 h-72 rounded-b-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-e-2xl p-5'>
              <img src={nft} alt="myself" className='h-full mx-auto' />
            </div>
          </section>
          <section className='flex flex-col lg:flex-row justify-center items-center my-10'>
            <div className='w-4/5 h-72 rounded-t-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-s-2xl p-5'>
              <p>Capstone Project</p>
              <p>Description of Capstone project</p>
            </div>
            <div className='w-4/5 h-72 rounded-b-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-e-2xl p-5'>
              <img src={nft} alt="myself" className='h-full mx-auto' />
            </div>
          </section>
          <p>Project section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
        <section id='contact' className='mt-4'>
          <h2 className='text-center text-4xl'>Contact</h2>
          <p>Contact section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
      </main>
    </div>

  )
}

export default App
