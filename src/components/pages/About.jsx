import { useLanguagesStore } from "../hooks/useLanguagesStore";
import TextListItem from "../listItems/TextListItem";
import PageTitle from "../PageTitle"

export default function About({}) {
    
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"About Card - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex flex-col items-center flex-1/2" aria-label="profile description">
                    <h1 className="text-4xl font-bold text-cyan-400 text-center px-5" aria-label="greetings">{getTextByKey("about_hello")} Kamil Kijak</h1>
                    <h1 className="text-2xl font-bold text-white mt-4 text-center px-5" aria-label="profession">{getTextByKey("want_be")} Software Engineer</h1>
                    <div className='h-3 w-[200px] bg-cyan-400 rounded-2xl my-3'></div>
                    <p className="text-white text-xl lg:w-[50%] w-[75%] text-center" aria-label="description">
                        {getTextByKey("about_desc1")}
                    </p>
                    <p className="text-white text-xl lg:w-[50%] w-[75%] text-center mt-4" aria-label="description">
                        {getTextByKey("about_desc2")}
                    </p>
                    <p className="text-white text-3xl font-bold lg:w-[50%] w-[75%] text-center mt-5">{getTextByKey("have_fun")}</p>
                </section>
                <section className="flex-1/4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("good_things")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-3 px-5" role="list" aria-label="good things">
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("productive")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("creative")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("self-improvement")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("problem_solving")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("logical_thinking")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("helper")}/>
                        <TextListItem title={<div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full"></div>} text={getTextByKey("teamwork")}/>
                    </section>
                </section>
            </section>
        </section>
    )
}