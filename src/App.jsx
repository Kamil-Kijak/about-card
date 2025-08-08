
import PolandFlag from "./assets/profile/polandFlag.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faThreads, faTiktok, faYoutube} from "@fortawesome/free-brands-svg-icons"

import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';

import { useLanguagesStore } from './components/hooks/useLanguagesStore';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const {updateActualLanguage, getTextByKey, actualLanguage} = useLanguagesStore();
  return (
      <main className='min-h-[100vh] bg-zinc-950 z-10 lg:px-20 px-8 py-10 flex flex-col'>
        <section className='py-5 px-10 bg-zinc-900 rounded-xl flex flex-col shadow-lg shadow-cyan-400/70'>
          <section className='flex justify-start flex-col lg:flex-row items-center'>
              <img src="/socialicon.jpg" className='w-[200px] h-[200px] grayscale-100 shadow-lg shadow-cyan-400' alt='Kamil Kijak profile picture' role="image"/>
              <section className='flex-1/3 lg:ml-10'>
                <section className='flex items-center flex-col lg:flex-row lg:mt-0 mt-4'>
                  <h1 className='text-3xl font-bold text-cyan-400 lg:mt-0 mt-5'>Kamil Kijak</h1>
                  <select aria-label="choose language" role="select" className='border-zinc-700 border-2 text-white font-bold px-3 py-2 bg-zinc-900 rounded-md lg:ml-10 mt-5 lg:mt-0' value={actualLanguage} onChange={(e) => updateActualLanguage(e.target.value)}>
                      <option value="en">English</option>
                      <option value="pl">Polski</option>
                  </select>
                </section>
                <section className='flex flex-col lg:flex-row mt-4 lg:ml-3 items-center justify-center lg:justify-start gap-y-3'>
                  <section className="flex items-center">
                    <img src={PolandFlag} className='w-[1.5rem] h-[1rem] mr-1' aria-label="poland flag" />
                    <h1 className='text-xl text-white font-bold' aria-label="localization">{getTextByKey("localization")}</h1>
                  </section>
                  <h1 className="text-md text-white font-bold lg:ml-7" aria-label="email adress"><FontAwesomeIcon icon={faEnvelope}/> kamil.kijak@pixlesofte.com</h1>
                </section>
                <section className='my-8 ml-3' aria-label="cite">
                  <cite className='text-zinc-400 text-xl text-center'>''{getTextByKey("main_cite")},,</cite>
                </section>
              </section>
              <section className='flex-1/3 flex flex-col items-center lg:mb-0 mb-4'>
                <section className='flex flex-col lg:items-start items-center' aria-label="social links" role="list">
                  <h1 className='text-3xl font-bold text-cyan-400 mb-5'>{getTextByKey("social")}</h1>
                  <a title='Github' href="https://github.com/Kamil-Kijak" rel='nofollow' target="_blank" className='social-link' aria-label="github"><FontAwesomeIcon icon={faGithub}/> Kamil-Kijak</a>
                  <a title='Instagram' href="https://www.instagram.com/kamilkijak/" rel='nofollow' target="_blank" className='social-link mt-3' aria-label="instagram"><FontAwesomeIcon icon={faInstagram}/> kamilkijak</a>
                  <a title='Threads' href="https://www.threads.com/@kamilkijak" rel='nofollow' target="_blank" className='social-link mt-3' aria-label="threads"><FontAwesomeIcon icon={faThreads}/> @kamilkijak</a>
                  <a title='Tiktok' href="https://www.tiktok.com/@externalgear" rel='nofollow' target="_blank" className='social-link mt-3' aria-label="tiktok"><FontAwesomeIcon icon={faTiktok}/> @externalgear</a>
                  <a title='Youtube' href="https://www.youtube.com/@External-Gear" rel='nofollow' target="_blank" className='social-link mt-3' aria-label="youtube"><FontAwesomeIcon icon={faYoutube}/> @External-Gear</a>
                </section>
              </section>
            </section>
            <section className='mt-3 flex flex-col items-center'>
              <div className='h-3 w-[250px] bg-cyan-400 rounded-2xl'></div>
              <section className='flex flex-col lg:flex-row lg:justify-around gap-y-10 justify-center items-center mt-5 mb-2 w-full'>
                <h1 className='font-bold text-3xl text-white text-center' aria-label="completed projects">{getTextByKey("completed_projects")} 2</h1>
              </section>
            </section>
          </section>
          <BrowserRouter>
            <section className='pb-5 bg-zinc-900 rounded-xl flex flex-col mt-20 overflow-hidden min-h-[100vh] shadow-lg shadow-cyan-400/70'>
              <nav className='flex justify-start items-center border-b-4 border-cyan-400 flex-wrap' aria-label="navigation">
                <Link to={"/"}><button className='nav-button' aria-label="about section link">{getTextByKey("about")}</button></Link>
                <Link to={"/projects/none"}><button className='nav-button' aria-label="projects section link">{getTextByKey("projects")}</button></Link>
                <Link to={"/skills"}><button className='nav-button' aria-label="skills section link">{getTextByKey("skills")}</button></Link>
              </nav>
              <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/projects' element={<Navigate to={"/projects/none"} replace/>}/>
                <Route path='/projects/:id' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
              </Routes>
            </section>
          </BrowserRouter>
      </main>
  )
}

export default App
