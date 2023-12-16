import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import hamburger from "../assets/icon-menu.svg"
import { navLinks } from '../constants'
import SideBar from './SideBar'

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [active, setActive] = useState<number>(0)


    return (
        <div className='flex flex-col'>
            <nav className='flex justify-between items-center w-full'>
                <div className='w-1/5'>
                    <img src={logo} alt="Logo" width={"54px"} height={"54px"} />
                </div>
                {/* desktop menu */}
                <div className='w-4/5 desktop:grid grid-cols-12 mobile:hidden'>
                    <div className='col-start-8 col-end-13 ' >
                        <ul className="flex justify-between font-inter font-normal">
                            {navLinks.map((navLink) => (
                                <li onClick={() => setActive(navLink.id)} className={`${active === navLink.id ? "text-orange_primary" : "text-dark_grayish_blue"} cursor-pointer hover:text-orange_primary duration-200`} key={navLink.id}>{navLink.title}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* hambuger */}
                <div onClick={() => setToggle((prev) => !prev)} className='desktop:hidden w-40 h-16   mobile:flex  cursor-pointer justify-end items-center focus:outline-none'>
                    <img src={hamburger} alt="menu" width={"40px"} height={"17px"} />
                </div>
            </nav>

            {toggle ? (
                <SideBar
                    setToggle={setToggle}
                />
            ) : null}

        </div>
    )
}

export default Navbar
