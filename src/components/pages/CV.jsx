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
                                <section className="text-zinc-800 flex items-center gap-x-2">
                                    <FontAwesomeIcon icon={faLocationDot}/> Poland, Kraków
                                </section>
                                <section className="text-zinc-800 flex items-center gap-x-2">
                                    <FontAwesomeIcon icon={faEnvelope}/> kamil.kijak@pixlesofte.com
                                </section>
                                <section className="text-zinc-800 flex items-center gap-x-2">
                                    <FontAwesomeIcon icon={faGlobe}/> https://aboutme.pixlesofte.com
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Hobbies:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800">Programming</li>
                                <li className="text-zinc-800">Gamedev</li>
                                <li className="text-zinc-800">Designing</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Hard skills:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800">Websites, databases creating</li>
                                <li className="text-zinc-800">Creating IT systems</li>
                                <li className="text-zinc-800">Planning and creating IT projects</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Soft skills:</p>
                        <section className="flex flex-col items-center">
                            <ul className="mt-3 list-disc">
                                <li className="text-zinc-800">Logical thinking</li>
                                <li className="text-zinc-800">Creating ideas</li>
                                <li className="text-zinc-800">Finding solutions</li>
                                <li className="text-zinc-800">Teamwork</li>
                                <li className="text-zinc-800">Productivity</li>
                            </ul>
                        </section>
                    </section>
                    
                </section>
                <section className="flex-3">
                    
                </section>
            </section>
        </main>
        
    )
}