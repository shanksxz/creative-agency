export default function Card({ title, desc, img }) {
    return (
        <div className="md:flex md:w-[250px] w-[70%] flex flex-col">
            <img src={img} className='object-cover w-full h-full' alt={title} />
            <div>
                <h1 className="font-semibold">{title}</h1>
                <p className="w-full">{desc}</p>
            </div>
        </div>
    )
}