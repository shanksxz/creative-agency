import { cardData, contactInfo } from "../constants"
import Button from "./Button"
import Card from "./Card"

export default function Section3() {
    return (
        <>
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
        </>
    )
}