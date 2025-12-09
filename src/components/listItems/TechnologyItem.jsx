


export default function TechnologyItem({title = "language", width="w-[50%]", certificateLink, textColor="text-white", barColor="bg-white"}) {

    return (
        <section className={`flex flex-col lg:flex-row items-center gap-5 justify-start bg-zinc-800 rounded-xl p-4 w-full transition-all duration-75 ease-in-out hover:shadow-white/50 hover:scale-105 shadow-lg`}>
            <section className={`min-w-[15px] min-h-[15px] rounded-full ${barColor} hidden lg:block static`}>

            </section>
            <h1 className={`${textColor} text-3xl font-extrabold flex-1/6`}>{title}</h1>
            <section className="mx-4 w-full relative flex justify-start flex-1/2">
                <section className={`${barColor} h-[10px] ${width} rounded-r-xl z-10`}>
                </section>
                <section className={`bg-zinc-900 h-[10px] w-[100%] rounded-r-xl absolute`}>
                </section>
            </section>
        </section>
    )
}