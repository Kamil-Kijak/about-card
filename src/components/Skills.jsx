
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb, faMagnifyingGlass, faPen, faUser, faUsers, faHandshakeSimple} from "@fortawesome/free-solid-svg-icons"

export default function Skills({}) {
    return (
        <section className="flex mt-8 justify-center items-start min-h-full">
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Technical</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl">
                        <section className="flex items-center">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Productive</span>
                        </section>
                        
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Practical</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5">
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faPen} className='text-cyan-400 mr-4'/>
                            <span>Planning work</span>
                        </section>
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faUsers} className='text-cyan-400 mr-4'/>
                            <span>Teamwork</span>
                        </section>
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className='text-cyan-400 mr-4'/>
                            <span>Individual work</span>
                        </section>
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-cyan-400 mr-4'/>
                            <span>Finding solutions</span>
                        </section>
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faLightbulb} className='text-cyan-400 mr-4'/>
                            <span>Create own ideas</span>
                        </section>
                        
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Social</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl">
                        <section className="flex items-center">
                            <FontAwesomeIcon icon={faHandshakeSimple} className='text-cyan-400 mr-4'/>
                            <span>communicativeness</span>
                        </section>
                        
                    </section>
                </section>
            </section>
        </section>
    )
}