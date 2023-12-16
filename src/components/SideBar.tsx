import React from 'react'
import closeIcon from "../assets/icon-menu-close.svg"
import { ISideBarProps } from '../types'
import { navLinks } from '../constants'


const SideBar: React.FC<ISideBarProps> = ({ setToggle }) => {
    return (
        <div className='z-10  top-0 left-0 right-0 mobile:absolute desktop:hidden  bg-very_dark_blue/50 h-[100dvh] '>
            <aside id="default-sidebar" className="mobile:fixed desktop:hidden font-inter bg-off_white top-0 right-0 z-20 w-64 h-screen transition-transform -translate-x-full mobile:translate-x-0" aria-label="Sidebar">
                {/* close icon */}
                <div className="flex justify-end p-5">
                    <div onClick={() => setToggle((toggle) => !toggle)} className='desktop:hidden h-16  mobile:flex  cursor-pointer  items-center focus:outline-none'>
                        <img src={closeIcon} alt="menu" width={"40px"} height={"17px"} />
                    </div>
                </div>

                {/* menu links */}
                <div className='p-5'>
                    <ul className='font-normal text-lg text-very_dark_blue flex flex-col gap-5'>
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>{navLink.title}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>

    )
}

export default SideBar
