import { useLanguagesStore } from "../hooks/useLanguagesStore";
import AchivementLink from "../listItems/AchivementLink";
import PageTitle from "../PageTitle";

export default function Achivements() {
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);
    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"Achivements - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex-1/3 flex flex-col items-center p-5">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-5">{getTextByKey("experience")}</h1>
                    <AchivementLink
                        href={"/jobReferences/skinvest.pdf"}
                        title={
                        <>
                            SK INVEST Job July - September 2025
                        </>
                        }
                        shadowColor="shadow-cyan-400"
                        desc="Created MySQL database system"
                    />
                </section>
                <section className="flex-1/3 flex flex-col items-center"></section>
                <section className="flex-1/3 flex flex-col items-center"></section>
            </section>
            
        </section>
    )
}