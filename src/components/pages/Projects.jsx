import { useLocation, useParams } from "react-router-dom";
import ProjectItem from "../listItems/ProjectItem";
import ProjectDescriptions from "../ProjectDescriptions";

import PageTitle from "../PageTitle";

import solitaireImg from "../../assets/projects/solitaireMain.png"
import pmsImg from "../../assets/projects/pmsMain.png"
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export default function Projects({}) {

    const descRef = useRef(null);

    const {id} = useParams();
    const {pathname} = useLocation();

    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    const projectDescriptions = ProjectDescriptions();

    useEffect(() => {
        descRef.current?.scrollIntoView({ behavior: 'smooth' });
        descRef.current.scrollTop = 0;
    }, [pathname])

    return (
        <section className="flex lg:flex-row flex-col mt-8 md:justify-around justify-center items-center min-h-full flex-1">
            <PageTitle title={`${projectDescriptions[id] ? id !="none" ? id : "projects" : "project not found"} - Kamil Kijak`}/>
            <section className="grid lg:grid-cols-2 grid-cols-1 w-full sm:w-[75%] md:w-full p-5 gap-7 items-stretch lg:h-[600px] overflow-auto scrollbar lg:max-w-screen md:max-w-[500px] max-w-screen" aria-label="Project list" role="grid">
                <ProjectItem title="solitaire" img={solitaireImg} typeDescription={<><FontAwesomeIcon icon={faGamepad}/> Game</>} colorClass="bg-orange-700"/>
                <ProjectItem title="property-managament-system" img={pmsImg} typeDescription={<><FontAwesomeIcon icon={faDatabase}/> Database system</>} colorClass="bg-green-700"/>
            </section>
            <section ref={descRef} className=" w-full flex flex-col items-center lg:mt-0 overflow-y-auto lg:h-[600px] h-full scrollbar self-start pt-20" role="description">
                {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("type")) && projectDescriptions[id].type}
                {<h1 className="text-cyan-400 font-bold text-5xl mb-4 mt-4 text-center">{projectDescriptions[id] ? id !="none" ? id : getTextByKey("select") : 404}</h1>}
                {projectDescriptions[id]?.subtitle || <h1 className="text-white font-bold text-2xl text-center">{getTextByKey("project_not_found")}</h1>}
                {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("desc") ? projectDescriptions[id].desc : <h1 className="text-white font-bold text-2xl my-5 text-center">{getTextByKey("no_desc")}</h1>)}
            </section>
        </section>
    )
}