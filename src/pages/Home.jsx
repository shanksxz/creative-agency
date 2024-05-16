import { tab, watch, iphone, ipad } from "../assets/images";
import Button from "../components/Button";
import Hero from "../components/Hero";
import { cardData } from "../constants";

export default function Home() {
    return (
        <main>
            <Hero />
            <section className="lg:h-[80vh] lg:flex text-white">
                <div className="lg:w-2/5 h-full">
                    <img src={tab} className="w-full h-full object-cover" alt="tab" />
                </div>
                <div className="px-14 py-10 lg:w-3/5 bg-purple text-left lg:pl-[10rem] lg:pr-[15rem] flex flex-col items-start justify-center">
                    <h1 className="text-[5rem] font-bold leading-none">
                        WE ARE CREATIVE AGENCY
                    </h1>
                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate et assumenda fugit nam qui optio eius harum.
                    </p>
                    <p className="mt-10">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className="bg-btn-orange text-white mt-10" />
                </div>
            </section>
            <section className='lg:flex-row flex flex-col lg:h-screen'>
                <div className="lg:w-2/3 bg-purple text-white leading-none flex flex-col justify-center items-start">
                    <h1 className="px-14 py-10 text-[4rem] lg:pl-[15rem] lg:pr-[20rem] font-bold">
                        WE ARE <br /> CREATIVE AGENCY
                    </h1>
                    <div className="md:mt-10 px-14 py-10 lg:pl-[15rem] flex items-center flex-wrap gap-20 lg:w-[70%]">
                        <div className="flex flex-col justify-center items-start gap-2 lg:w-[250px]">
                            <p className='uppercase text-[1.5rem] font-semibold'>Lorem ipsum  sit</p>
                            <p className='tracking-widest'>Ut enim ad minim veniam, quisostrud exercitation ullacboris nit aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 lg:w-[250px]">
                            <p className='uppercase text-[1.5rem] font-semibold'>Lorem ipsum  sit</p>
                            <p className='tracking-widest leading-3'>Ut enim ad minim veniam, quisostrud exercitation ullacboris nit aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 lg:w-[250px]">
                            <p className='uppercase  text-[1.5rem] font-semibold'>Lorem ipsum  sit</p>
                            <p className='tracking-widest'>Ut enim ad minim veniam, quisostrud exercitation ullacboris nit aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 lg:w-[250px]">
                            <p className='uppercase  text-[1.5rem] font-semibold'>Lorem ipsum  sit</p>
                            <p className='tracking-widest'>Ut enim ad minim veniam, quisostrud exercitation ullacboris nit aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</p>
                        </div>
                    </div>
                </div>
                <div className="px-10 lg:px-0 lg:w-1/3 lg:relative bg-purple flex items-center justify-center lg:bg-white">
                    <img src={ipad} alt="ipad" className="lg:absolute lg:top-1/2 lg:-left-1/4 lg:-translate-y-1/2" />
                </div>
            </section>
            <section className="mt-10 h-[60vh] flex items-center justify-center">
                <div className="bg-btn-orange flex items-center justify-center w-screen h-[400px]">
                    <img src={watch} className="" width={300} height={300} alt="watch" />
                </div>
            </section>
            <section className="md:flex pt-10 bg-purple md:bg-white md:h-screen text-white">
                <div className="md:w-1/3 relative bg-purple md:bg-white flex justify-center items-center">
                    <img src={iphone} className='md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-1/2 md:-translate-x-1/2' alt="iphone" />
                </div>
                <div className="mt-10 px-14 py-10  md:w-2/3 md:pl-[20rem] md:pr-[15rem] bg-purple flex flex-col justify-center items-start gap-5">
                    <h1 className="text-[5rem] font-bold leading-none">
                        WE ARE CREATIVE AGENCY
                    </h1>
                    <div className="mt-5 flex flex-col items-start justify-center gap-2">
                        <p className='uppercase text-[1.5rem]'>Lorem ipsum dolor sit</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq</p>
                    </div>
                    <div className="mt-5 flex flex-col items-start justify-center gap-2">
                        <p className='uppercase text-[1.5rem]'>Lorem ipsum dolor sit</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq</p>
                    </div>
                    <div className="mt-5 flex flex-col items-start justify-center gap-2">
                        <p className='uppercase text-[1.5rem]'>Lorem ipsum dolor sit</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq</p>
                    </div>
                </div>
            </section>
            <section className="lg:flex">
                <div className="lg:w-1/2 flex flex-wrap lg:p-36 gap-10 lg:justify-end justify-center">
                    {cardData.map((ele, index) => {
                        return (
                            <div key={index} className="md:flex md:w-[250px] w-[70%] flex flex-col">
                                <img src={ele.img} className='object-cover w-full h-full' alt={ele.title} />
                                <div>
                                    <h1 className="font-semibold">{ele.title}</h1>
                                    <p className="w-full">{ele.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="lg:w-1/2 px-14 py-10 bg-btn-orange text-white lg:pl-[10rem] lg:pr-[15rem] flex flex-col items-start justify-center">
                    <h1 className="text-[5rem] font-bold leading-none">
                        WE ARE CREATIVE AGENCY
                    </h1>
                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate et assumenda fugit nam qui optio eius harum.
                    </p>
                    <p className="mt-10">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className="bg-purple text-white mt-10" />
                </div>
            </section>
            <section className="p-10 city_bg bg-purple h-[40vh] flex flex-col gap-5 justify-center text-center items-center text-white">
                <h1 className="text-[4rem] font-bold">THANKS FOR VISIT</h1>
                <h2 className="text-[2rem] font-bold">STAY IN TOUCH</h2>
                <p className="lg:w-[50%] text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</p>
            </section>
        </main>
    )
}