import { useState } from "react"
import { navLinks } from "../constants"
import { circles, menu } from "../assets/images/index"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-10 py-2 lg:max-w-[80%] mx-auto">
            <nav className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={circles} width={50} alt="logo" />
                    <div className="flex flex-col items-start justify-center">
                        <h1 className='font-lemon text-[1.5rem]'>WEBPRO</h1>
                        <p className='tracking-widest ml-1 -mt-2'>TAGLINE HERE</p>
                    </div>
                </div>
                <div>
                    <ul className="hidden md:flex gap-6 font-bold">
                        {navLinks.map((link, index) => (
                            <li key={index} className='hover:cursor-pointer'>{link.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Nav */}
                <img onClick={(e) => setIsOpen((prev) => !prev)} src={menu} width={50} alt="menu-bar" className='hover:cursor-pointer md:hidden' />
                <div className={`px-12 py-6 md:hidden absolute left-0 top-16 w-full h-full bg-white ${isOpen ? 'h-[250px] left-0 opacity-100' : 'h-0 -left-20 opacity-0'}`}>
                    {isOpen &&
                        <ul className='flex flex-col font-medium gap-5'>
                            {navLinks.map((link, index) => (
                                <li key={index} className='hover:cursor-pointer'>{link.name}</li>
                            ))}
                        </ul>
                    }
                </div>
            </nav>
        </header>
    )
}