import React, { useEffect, useState } from "react"
import Particle from "./Particle";


export default function ParticlesScreen({}) {
    const [particles, setParticles] = useState([]);
    const [turned, setTurned] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            if(turned)
                setParticles(prev => [...prev, <Particle y={window.innerHeight * Math.random()}/>])
        }, 100);
        return () => {
            clearInterval(interval)
        }
    }, [turned]);
    useEffect(() => {
        if(particles.length > 100) {
            setTurned(false);
        }
    }, [particles]);
    return (
        <section className="fixed top-0 bottom-0 left-0 right-0">
            {particles.map((obj, index) => <React.Fragment key={index}>{obj}</React.Fragment>)}
        </section>
    )
}