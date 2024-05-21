import { ipad, iphone, watch } from "../assets/images"
import { phoneData, tabData } from "../constants"

export default function Section2() {
    return (
        <>
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

            <section className="my-10 h-[60vh] flex items-center justify-center">
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
        </>
    )
}