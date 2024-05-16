
import Button from "../components/Button";

export default function Hero() {
    return (
        <section className="h-[100vh] hero_main bg-black text-white flex">
            <div className="hidden lg:block w-1/2"></div>
            <div className="lg:w-1/2 p-10 text-left flex flex-col items-start justify-center">
                <h1 className="text-[4rem] md:text-[8rem] leading-none font-semibold font-montserrat capitalize">
                    WE ARE
                    CREATIVE
                    AGENCY
                </h1>
                <p className="mt-10 md:w-2/3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nisi reiciendis consectetur. Quam quidem velit delectus ipsam amet eum reprehenderit corrupti maiores dolor sequi laboriosam, porro nesciunt quo saepe laborum.
                </p>
                <Button className={`bg-btn-orange mt-10 text-white`} />
            </div>
        </section>
    )
}