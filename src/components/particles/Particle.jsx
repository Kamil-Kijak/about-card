

export default function Particle({y}) {

    const animationTime = Math.random() * 3 + 1;
    return (
        <div className={`fixed bg-white w-[10px] h-[10px] particle-animation z-1`} aria-hidden={true} style={{
            top:`${y}px`,
            animationDuration:`${animationTime}s`
        }}>
        </div>
    )
}