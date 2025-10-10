import { faBookmark, faEnvelope, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CV() {
    return (
        <main className="w-full">
            <section className="flex justify-start">
                <section className="flex flex-col ml-3 items-center justify-start">
                    <div className="bg-red-700 h-[500px] w-[1.65rem]"></div>
                    <FontAwesomeIcon icon={faBookmark} className="text-red-700 text-[35px] relative top-[-10px]"/>
                </section>
                <section className="flex flex-1 flex-col mt-3 ml-10 items-center">
                    <img src="/socialicon.jpg" className='w-[150px] h-[150px] rounded-2xl grayscale-100' alt='Kamil Kijak profile picture' role="image"/>
                    <h1 className="mt-3 text-xl font-bold text-zinc-900">Kamil Kijak</h1>
                    <p className="font-bold text-zinc-800 text-center">(Student of software development)</p>
                    <section className="mt-6 w-full">
                        <p className="font-bold text-zinc-900 self-start">Personal Data:</p>
                        <section className="flex flex-col items-center">
                            <section className="mt-3 gap-y-2 flex flex-col">
                                <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                    <FontAwesomeIcon icon={faLocationDot}/> Poland, Kraków
                                </section>
                                <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                    <FontAwesomeIcon icon={faEnvelope}/> kamil.kijak@pixlesofte.com
                                </section>
                                <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                    <FontAwesomeIcon icon={faGlobe}/> https://aboutme.pixlesofte.com
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Hobbies:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800 text-sm">Programming</li>
                                <li className="text-zinc-800 text-sm">Gamedev</li>
                                <li className="text-zinc-800 text-sm">Designing</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Hard skills:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800 text-sm">Websites, databases creating</li>
                                <li className="text-zinc-800 text-sm">Creating IT systems</li>
                                <li className="text-zinc-800 text-sm">Planning and creating IT projects</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Soft skills:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800 text-sm">Logical thinking</li>
                                <li className="text-zinc-800 text-sm">Creating ideas</li>
                                <li className="text-zinc-800 text-sm">Finding solutions</li>
                                <li className="text-zinc-800 text-sm">Teamwork</li>
                                <li className="text-zinc-800 text-sm">Productivity</li>
                            </ul>
                        </section>
                    </section>
                    
                </section>
                <section className="flex-3 flex flex-col mt-3 ml-10 items-center">
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Education</h1>
                        <div className="bg-red-700 w-full h-[3px] mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm font-bold">Technikum komunikacyjne nr 25, Kraków</p>
                                <p className="text-sm">2023 - (expected gratulation June 2028)</p>
                                <p className="text-sm">Programming Technician</p>
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Technologies</h1>
                        <div className="bg-red-700 w-full h-[3px] mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Basis:</span> HTML, CSS, Java Script</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Backend:</span> Node.js, Express.js, PHP</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Frontend:</span> React.js</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Database:</span> MySQL</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Frameworks:</span> Tailwind</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Languages:</span> C#, Python</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Tools:</span> VScode, Pycharm, MySQL Workbench</p>
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Languages</h1>
                        <div className="bg-red-700 w-full h-[3px] mt-1"></div>
                        <section className="grid grid-cols-2">
                            <section className="mt-4 flex gap-x-5 items-center">
                                <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                                <section className="flex flex-col">
                                    <p className="text-sm"><span className="font-bold">Polish:</span> Native</p>
                                </section>
                            </section>
                            <section className="mt-4 flex gap-x-5 items-center">
                                <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                                <section className="flex flex-col">
                                    <p className="text-sm"><span className="font-bold">English:</span> B1 level</p>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <div className="bg-red-700 w-full h-[3px] mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm font-bold">SK Invest, Koszyce</p>
                                <p className="text-sm">July 2025 - September 2025 (2 months)</p>
                                <ul className="mt-2">
                                    <li className="text-sm"><span className="font-bold">-</span> Designed DBMS using MySQL</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Created Node.js server with Express.js</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Created React app and integrated with backend</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Deployed application on local hosting server</li>
                                </ul>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
        
    )
}