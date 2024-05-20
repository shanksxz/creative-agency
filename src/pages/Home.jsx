import { tab, watch, iphone, ipad } from "../assets/images";
import { cardData, contactInfo, iconData, phoneData, tabData } from "../constants";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <main>
            <Hero />
            <section className="lg:h-[80vh] lg:flex text-white">
                <div className="lg:w-2/5 h-full">
                    <img src={tab} className="w-full h-full object-cover" alt="tab" />
                </div>
                <div className="px-14 py-10 lg:w-3/5 bg-purple text-left flex flex-col items-center justify-center">
                    <div className="md:w-[80%]">
                        <h1 className="font-bold h1 leading-none">
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
                </div>
            </section>

            <section className="lg:flex">
                <div className="lg:w-1/3 flex flex-col justify-center lg:items-end px-10 py-6">
                    <div className="lg:w-[60%]">
                        <h2 className="leading-none h2 text-purple font-bold">
                            WHAT MAKES US AWESOME?
                        </h2>
                        <Button className="bg-purple text-white mt-10 py-5 px-16" />
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className='p-20 bg-btn-orange flex md:items-center lg:justify-center gap-10 text-white flex-wrap lg:flex-nowrap'>
                        {iconData.map((ele, index) => {
                            return (
                                <div key={index} className="lg:w-[70%] flex flex-col justify-center md:items-start gap-10">
                                    <img width={75} src={ele.img} alt={ele.index} />
                                    <h2 className="font-bold h2 text-[1.5rem] lg:w-1/3">{ele.title}</h2>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex items-start justify-center p-20 gap-5 text-left flex-wrap md:flex-nowrap">
                        <p className="md:w-[60%] leading-7">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                        </p>
                        <p className="md:w-[60%] leading-7">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                        </p>
                        <p className="md:w-[60%] leading-7">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                        </p>
                    </div>
                </div>
            </section>

            <section className='lg:flex-row flex flex-col lg:h-screen'>
                <div className="lg:w-2/3 bg-purple text-white text-left flex flex-col justify-center items-center">
                    <div className="w-[70%]">
                        <h1 className="py-10 h1 leading-none font-bold">
                            WE ARE <br /> CREATIVE AGENCY
                        </h1>
                        <div className="md:mt-10 leading-8 py-10 flex items-center flex-wrap gap-20">
                            {tabData.map((ele, index) => {
                                return (
                                    <div key={index} className="flex flex-col justify-center items-start gap-2 md:w-[40%]">
                                        <p className='uppercase text-[1.5rem] font-semibold'>{ele.title}</p>
                                        <p className='tracking-widest'>{ele.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="px-10 lg:px-0 lg:w-1/3 lg:relative bg-purple flex items-center justify-center lg:bg-white">
                    <img src={ipad} alt="ipad" className="lg:absolute lg:top-1/2 lg:-left-1/4 lg:-translate-y-1/2 pb-10 md:pb-0" />
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
                <div className="mt-10 px-14 py-10  md:w-2/3  bg-purple flex flex-col justify-center items-center gap-5">
                    <div className="md:w-[60%]">
                        <h1 className="font-bold h1 leading-none">
                            WE ARE CREATIVE AGENCY
                        </h1>
                        {phoneData.map((ele, index) => {
                            return (
                                <div key={index} className="mt-10 flex flex-col items-start justify-center gap-5">
                                    <p className='uppercase text-[1.5rem]'>{ele.title}</p>
                                    <p>{ele.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="lg:flex">
                <div className="lg:w-1/2 py-10 md:py-0 flex flex-wrap lg:p-36 gap-10 lg:justify-end justify-center">
                    {cardData.map((ele, index) => {
                        return <Card key={index} title={ele.title} desc={ele.desc} img={ele.img} />
                    })}
                </div>
                <div className="lg:w-1/2 px-14 py-10 bg-btn-orange text-white lg:pl-[10rem] lg:pr-[15rem] flex flex-col items-start justify-center">
                    <h1 className="h1 font-bold leading-none">
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
                <h1 className="h1 font-bold">THANKS FOR VISIT</h1>
                <h2 className="h2 font-bold">STAY IN TOUCH</h2>
                <p className="lg:w-[50%] text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</p>
            </section>

            <section className="p-10 lg:max-w-[80%] lg:mx-auto lg:flex lg:justify-between justify-center lg:items-center flex-wrap">
                <div className="flex flex-col order-1 justify-center ic gap-2">
                    <h2 className='font-bold'>SAY HELLO !</h2>
                    <div className='mt-10 k'>
                        <label htmlFor="">
                            Name
                        </label>
                        <input type="text" />
                    </div>
                    <div className='k'>
                        <label htmlFor="">
                            Email
                        </label>
                        <input type="text" />
                    </div>
                    <div className='k'>
                        <label htmlFor="">
                            Phone
                        </label>
                        <input type="text" />
                    </div>
                    <div className='k'>
                        <label htmlFor="">
                            Message
                        </label>
                        <input type="text" className="mt-10" />
                    </div>
                    <Button className={`bg-btn-orange mt-10 text-white`} />
                </div>
                <div className="mt-10">
                    <h1 className='uppercase font-bold'>Lorem ipsum dolor sit amet</h1>
                    {contactInfo.map((ele, index) => {
                        return (
                            <div key={index} className="flex items-center gap-2">
                                <img src={ele.icon} className="-ml-5" alt={ele.title} />
                                <div className="flex flex-col justify-center items-start">
                                    <p>{ele.title}</p>
                                    <p>{ele.desc}</p>
                                    {ele.extra && <p>{ele.extra}</p>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}