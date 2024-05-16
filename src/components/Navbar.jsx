import { useState } from "react"
import { navLinks } from "../constants"
import { circles, menu } from "../assets/images/index"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative px-8 py-2">
            <nav className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={circles} width={75} alt="logo" />
                    <div className="flex flex-col items-start">
                        <h1 className='font-lemon text-[2rem]'>WEBPRO</h1>
                        <p className='tracking-widest ml-1'>TAGLINE HERE</p>
                    </div>
                </div>
                <div>
                    <ul className="hidden md:flex gap-6">
                        {navLinks.map((link, index) => (
                            <li key={index} className='hover:cursor-pointer'>{link.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Nav */}
                <img onClick={(e) => setIsOpen((prev) => !prev)} src={menu} width={50} alt="menu-bar" className='hover:cursor-pointer md:hidden' />
                <div className={`px-8 py-6 md:hidden absolute left-0 top-[5.5rem] w-full h-full bg-white ${isOpen ? 'h-[250px] left-0 opacity-100' : 'h-0 -left-20 opacity-0'}`}>
                    {isOpen &&
                        <ul className='flex flex-col font-medium gap-2'>
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