import { useState } from 'react'

import Profile from "./assets/profile.jpg"
import PolandFlag from "./assets/polandFlag.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faThreads, faTiktok, faYoutube} from "@fortawesome/free-brands-svg-icons"

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
      <main className='min-h-[100vh] bg-zinc-950 z-10 px-20 py-10 flex flex-col'>
        <section className='py-5 px-10 bg-zinc-900 rounded-xl flex flex-col'>
          <section className='flex justify-start'>
              <img src={Profile} className='w-[20%] h-[20%] grayscale-100' />
              <section className='flex-1/3 ml-10'>
                <section className='flex items-center'>
                <h1 className='text-3xl font-bold text-cyan-400'>Kamil Kijak</h1>
                  <select className='border-zinc-700 border-2 text-white font-bold px-3 py-2 bg-zinc-900 rounded-md ml-10'>
                      <option value="en">English</option>
                      <option value="pl">Polski</option>
                  </select>
                </section>
                <section className='flex mt-4 ml-3 items-center'>
                  <img src={PolandFlag} className='w-[1.5rem] h-[1rem] mr-1' />
                  <h1 className='text-xl text-white font-bold'>Cracov, Małopolska</h1>
                </section>
                <section className='my-10 ml-3'>
                  <cite className='text-white text-xl'>''Have a good day!,,</cite>
                </section>
              </section>
              <section className='flex-1/3 flex flex-col items-center'>
                <section className='flex flex-col items-start'>
                  <h1 className='text-3xl font-bold text-cyan-400 mb-5'>Socials</h1>
                  <a href="https://github.com/Kamil-Kijak" target="_blank" className='social-link'><FontAwesomeIcon icon={faGithub}/> Kamil-Kijak</a>
                  <a href="https://www.instagram.com/kamilkijak/" target="_blank" className='social-link mt-3'><FontAwesomeIcon icon={faInstagram}/> kamilkijak</a>
                  <a href="https://www.threads.com/@kamilkijak" target="_blank" className='social-link mt-3'><FontAwesomeIcon icon={faThreads}/> @kamilkijak</a>
                  <a href="https://www.tiktok.com/@externalgear" target="_blank" className='social-link mt-3'><FontAwesomeIcon icon={faTiktok}/> @externalgear</a>
                  <a href="https://www.youtube.com/@External-Gear" target="_blank" className='social-link mt-3'><FontAwesomeIcon icon={faYoutube}/> @External-Gear</a>
                </section>
              </section>
            </section>
            <section className='mt-3 flex flex-col items-center'>
              <div className='h-3 w-[20%] bg-cyan-400 rounded-2xl'></div>
              <section className='flex justify-center mt-5 mb-2'>
                <h1 className='font-bold text-3xl text-white'>Completed Projects: 2</h1>
              </section>
            </section>
          </section>
          <BrowserRouter>
            <section className='pb-5 bg-zinc-900 rounded-xl flex flex-col mt-20 overflow-hidden h-[100vh]'>
              <nav className='flex justify-start items-center border-b-4 border-cyan-400'>
                <Link to={"/"}><button className='nav-button'>About</button></Link>
                <Link to={"/projects"}><button className='nav-button'>Projects</button></Link>
                <Link to={"/skills"}><button className='nav-button'>Skills</button></Link>
              </nav>
              <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
              </Routes>
            </section>
          </BrowserRouter>
      </main>
  )
}

export default App
