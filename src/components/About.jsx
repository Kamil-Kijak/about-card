
export default function About({}) {
    return (
        <section className="flex mt-8 justify-center items-start h-full">
            <section className="flex justify-around w-full mt-10">
                <section className="flex flex-col items-center flex-1/2">
                    <h1 className="text-4xl font-bold text-cyan-400">Hello I'm Kamil Kijak</h1>
                    <h1 className="text-2xl font-bold text-white mt-4">I want to be a Software Engineer</h1>
                    <div className='h-3 w-[200px] bg-cyan-400 rounded-2xl my-3'></div>
                    <h1 className="text-white text-xl w-[50%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum, architecto ullam autem repellat et eos dolore. Ipsa corrupti natus quaerat, itaque, perspiciatis impedit suscipit facere libero earum, porro illum.</h1>
                </section>
                <section className="flex-1/4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">My good things</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl">
                        <section className="flex items-center">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Productive</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Creative</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Self-improvement</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Problem solving</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Logical thinking</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Helper</span>
                        </section>
                        <section className="flex items-center mt-2">
                            <div className="bg-cyan-400 w-[1rem] h-[1rem] rounded-full mr-4"></div>
                            <span>Teamwork</span>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}