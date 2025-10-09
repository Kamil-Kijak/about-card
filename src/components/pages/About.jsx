import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import PageTitle from "../PageTitle"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ThingLink from "../listItems/ThingLink";
import { faFile, faPrint } from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";
import CV from "./CV";
import { useRef } from "react";

export default function About({}) {
    
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    const CVRef = useRef(null);

    const printCV = useReactToPrint({
        contentRef:CVRef
    });

    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"About Card - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex flex-col items-center flex-1/2" aria-label="profile description">
                    <h1 className="text-4xl font-bold text-cyan-400 text-center px-5" aria-label="greetings">{getTextByKey("about_hello")} Kamil Kijak</h1>
                    <h1 className="text-2xl font-bold text-white mt-4 text-center px-5" aria-label="profession">{getTextByKey("want_be")} Software Developer</h1>
                    <div className='h-3 w-[200px] bg-cyan-400 rounded-2xl my-3'></div>
                    <p className="text-white text-xl lg:w-[50%] w-[75%] text-center" aria-label="description">
                        {getTextByKey("about_desc1")}
                    </p>
                    <p className="text-white text-xl lg:w-[50%] w-[75%] text-center mt-4" aria-label="description">
                        {getTextByKey("about_desc2")}
                    </p>
                    <p className="text-white text-3xl font-bold lg:w-[50%] w-[75%] text-center mt-5">{getTextByKey("check_out")}</p>
                    <section className="flex lg:flex-row gap-4 justify-center mt-6">
                        <a role="button" title="Download CV" aria-label="download button" target="_blank" className="project-desc-button"><FontAwesomeIcon icon={faFile}/> {getTextByKey("download")} CV</a>
                    </section>
                    <section className="flex lg:flex-row gap-4 justify-center mt-4">
                        <button role="button" title="Print CV" aria-label="print button" target="_blank" className="project-desc-button" onClick={printCV}><FontAwesomeIcon icon={faPrint}/> {getTextByKey("print")} CV</button>
                    </section>
                </section>
                <section className="flex-1/4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("good_things")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-3 px-5" role="list" aria-label="things">
                        <ThingLink
                            href={"https://github.com/Kamil-Kijak"}
                            title={
                            <>
                                <FontAwesomeIcon icon={faGithub}/> Github
                            </>
                            }
                        />
                    </section>
                </section>
                {/* Component only prepared for print */}
                <section className="hidden">
                    <section ref={CVRef}>
                        <CV/>
                    </section>
                </section>
            </section>
        </section>
    )
}