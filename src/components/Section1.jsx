import { tab } from "../assets/images"
import { iconData } from "../constants"
import Button from "./Button"
export default function Section1() {
    return (
        <>
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
        </>
    )
}