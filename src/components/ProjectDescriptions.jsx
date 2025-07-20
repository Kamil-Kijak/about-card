import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextListItem from "./listItems/TextListItem";


const ProjectDescriptions = {
        "none":{
            subtitle:<h1 className="text-white font-bold text-2xl">Select project from list</h1>,
            desc:<></>
        },
        "solitaire":{
            subtitle:<h1 className="text-white font-bold text-2xl text-center">A console game about cards</h1>,
            desc:<>
                <h1 className="project-desc-h">Sources</h1>
                <section className="flex lg:flex-row gap-4 justify-center">
                    <a target="_blank" href="https://github.com/Kamil-Kijak/console-solitaire" className="project-desc-button"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </section>
                <h1 className="project-desc-h">Short description</h1>
                <p className="project-desc-p">A basic solitaire game playable in console created in polish language. Game has simple graphics and controls.</p>
                <h1 className="project-desc-h">Technologies</h1>
                <section className="flex flex-col items-start text-white font-bold text-2xl gap-y-5 ml-4">
                    <TextListItem title={<p className="text-cyan-400">C#</p>} text={"Main programming language"}/>
                    <TextListItem title={<p className="text-cyan-400">.NET</p>} text={"Tool used for creating project"}/>
                </section>
                <h1 className="project-desc-h">Creation</h1>
                <p className="project-desc-p">This project is my first project in console and also one of my first finished projects in C# language</p>
                <p className="project-desc-p mt-4">Creating this project learnt me things about programming apps in console and also tested my skills in C#</p>
                <p className="project-desc-p mt-4">Summarize: I learned a lot of things after creating this solo created game for my future programming projects</p>
            
            </>
        
        }
    }

export default ProjectDescriptions;