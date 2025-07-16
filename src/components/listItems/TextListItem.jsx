

export default function TextListItem({title = <p>ITEM</p>, text}) {
    return (
        <section className="flex items-center">
            <section className="mr-4">
                {title}
            </section>
            <span>{text}</span>
        </section>
    )
}