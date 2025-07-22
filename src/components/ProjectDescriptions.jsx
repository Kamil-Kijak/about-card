import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextListItem from "./listItems/TextListItem";

import { useLanguagesStore } from "./hooks/useLanguagesStore";



export default function ProjectDescriptions() {
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    return {
        "none":{
            subtitle:<h1 className="text-white font-bold text-2xl">{getTextByKey("view_details")}</h1>,
            desc:<></>
        },
        "solitaire":{
            subtitle:<h1 className="text-white font-bold text-2xl text-center">{getTextByKey("solitaire_subtitle")}</h1>,
            desc:<>
                <h1 className="project-desc-h">{getTextByKey("sources")}</h1>
                <section className="flex lg:flex-row gap-4 justify-center">
                    <a title="view project on github" target="_blank" href="https://github.com/Kamil-Kijak/console-solitaire" className="project-desc-button"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </section>
                <h1 className="project-desc-h">{getTextByKey("short_desc")}</h1>
                <p className="project-desc-p">{getTextByKey("solitaire_short_desc")}</p>
                <h1 className="project-desc-h">{getTextByKey("technologies")}</h1>
                <section className="flex flex-col items-start text-white font-bold text-2xl gap-y-5 ml-4 px-1">
                    <TextListItem title={<p className="text-cyan-400">C#</p>} text={getTextByKey("solitaire_c#")}/>
                    <TextListItem title={<p className="text-cyan-400">.NET</p>} text={getTextByKey("solitaire_dotnet")}/>
                </section>
                <h1 className="project-desc-h">{getTextByKey("creation")}</h1>
                <p className="project-desc-p">{getTextByKey("solitaire_creation1")}</p>
                <p className="project-desc-p mt-4">{getTextByKey("solitaire_creation2")}</p>
                <p className="project-desc-p mt-4">{getTextByKey("solitaire_creation3")}</p>
                <cite className='text-zinc-400 text-xl my-8 text-center px-5'>''{getTextByKey("solitaire_cite")},,</cite>
            
            </>
        
        }
    }
}