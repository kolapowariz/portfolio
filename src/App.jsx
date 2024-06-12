import { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";


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
          <button onClick={toggle}>{click ? <MdCancel className='w-8 h-8 border'/> : <FiAlignJustify className='w-8 h-8 border'/>}</button>
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
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </header>
      

    </>
  )
}

export default App
