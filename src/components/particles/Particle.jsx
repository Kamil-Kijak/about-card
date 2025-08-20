

export default function Particle({x, y}) {
    return (
        <div className={`fixed bg-white w-[10px] h-[10px] particle-animation z-1`} style={{
            top:`${y}px`
        }}>

        </div>
    )
}