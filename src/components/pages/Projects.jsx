import { useLocation, useParams } from "react-router-dom";
import ProjectItem from "../listItems/ProjectItem";
import ProjectDescriptions from "../ProjectDescriptions";

import PageTitle from "../PageTitle";

import solitaireImg from "../../assets/projects/solitaireMain.png"
import pmsImg from "../../assets/projects/pmsMain.png"
import efaImg from "../../assets/projects/efaMain.png"
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGamepad, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export default function Projects({}) {

    const descRef = useRef(null);

    const {id} = useParams();
    const {pathname} = useLocation();

    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    const projectDescriptions = ProjectDescriptions();

    useEffect(() => {
        if (pathname != "/projects/none") {
            descRef.current?.scrollIntoView({ behavior: 'smooth' });
            descRef.current.scrollTop = 0;
        }
    }, [pathname])

    return (
        <section className="flex lg:flex-row flex-col mt-8 md:justify-around justify-center lg:items-start items-center min-h-full flex-1">
            <PageTitle title={`${projectDescriptions[id] ? id !="none" ? id : "projects" : "project not found"} - Kamil Kijak`}/>
            <section className="lg:max-h-[800px] max-h-full overflow-auto flex-1/2">
                <section className="flex flex-col justify-center items-center m-10 gap-y-10 flex-1/2" aria-label="Project list" role="grid">
                    <ProjectItem title="solitaire" img={solitaireImg} typeDescription={<><FontAwesomeIcon icon={faGamepad}/> Game</>} colorClass="bg-orange-700"/>
                    <ProjectItem title="property-management-system" img={pmsImg} typeDescription={<><FontAwesomeIcon icon={faDatabase}/> Database system</>} colorClass="bg-green-700"/>
                    <ProjectItem title="evoting-flask-app" img={efaImg} typeDescription={<><FontAwesomeIcon icon={faGlobe}/> Web application</>} colorClass="bg-blue-800"/>
                </section>
            </section>
            <section className="lg:max-h-[800px] max-h-full overflow-auto md:flex-1/2">
                <section ref={descRef} className="flex-1/2 md:m-10 m-0 flex flex-col justify-center items-center" role="description">
                    {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("type")) && projectDescriptions[id].type}
                    {<h1 className="text-cyan-400 font-bold md:text-5xl text-3xl mb-4 mt-4 text-center">{projectDescriptions[id] ? id !="none" ? id : getTextByKey("select") : 404}</h1>}
                    {projectDescriptions[id]?.subtitle || <h1 className="text-white font-bold text-2xl text-center">{getTextByKey("project_not_found")}</h1>}
                    {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("desc") ? projectDescriptions[id].desc : <h1 className="text-white font-bold text-2xl my-5 text-center">{getTextByKey("no_desc")}</h1>)}
                </section>
            </section>
        </section>
    )
}