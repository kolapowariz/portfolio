import { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
// import Myself from '/Myself.jpeg'
import Myself2 from '/Myself2.jpeg'



function App() {
  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <>
      <header className='lg:hidden flex justify-between mt-4 mx-4'>
        <h1 className='text-2xl'>Kolapo Wariz</h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <MdCancel className='w-8 h-8 border' /> : <FiAlignJustify className='w-8 h-8 border' />}</button>
        </nav>
      </header>
      <main className='lg:hidden'>
        <div className={click ? '' : 'hidden'}>
          <ul className='py-2 text-center'>
            <li className='py-2 text-xl'>About Me</li>
            <li className='py-2 text-xl'>Projects</li>
            <li className='py-2 text-xl'>Contacts</li>
          </ul>
        </div>
      </main>

      <header className='hidden lg:flex justify-between items-center mt-4 mx-4'>
        <h1 className='text-2xl'>Kolapo Wariz</h1>
        <nav>
          <ul className='flex justify-between mx-4 gap-4 text-xl'>
            <a href="#about">

              <li>About Me</li>
            </a>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </header>

      <main className='mx-4 my-4'>
        <p className='text-xl my-4'>Hi there! Call me Wariz, a Front End developer and a student at AltSchool Africa.
        </p>
        {/* <img src={Myself} alt="Kolapo Wariz" className='mt-4 w-full mx-auto h-auto rounded-lg' /> */}
        <img src={Myself2} alt="Kolapo Wariz" className='mt-6 h-72 w-72 mx-auto rounded-full object-cover' />
        <section id='about' className='mt-2'>
          <h2 className='text-center text-xl'>About Me</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
        <section id='projects' className='mt-4'>
          <h2 className='text-center text-xl'>Projects</h2>
          <p>Project section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
        <section id='contact' className='mt-4'>
          <h2 className='text-center text-xl'>Contact</h2>
          <p>Contact section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
      </main>


    </>
  )
}

export default App
