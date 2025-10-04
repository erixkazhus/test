import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import logo from '../../assets/logo.png'; // Adjust the path as needed

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    return (
        <header className='sticky mx-auto top-0 transition-all py-6 bg-transparent z-10'>
            <div className='bg-transparent/75 px-4 fixed w-full z-50 top-0 py-2'>
                <div className='max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center'>
                    <Link to="/" className="flex items-center gap-3">
                        <img
                        src={logo}
                        alt="Happy Gay Travel Logo"
                        style={{ width: "54px", height: "54px", objectFit: "contain" }}
                        />
                        <h1 className="text-2xl text-white font-bold">Happy Gay Travel</h1>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <nav className='hidden md:flex gap-7'>
                            <ul className='flex items-center font-semibold text-white text-xl gap-7'>
                               <Link to='/'><li>Home</li></Link> 
                                <Link to='/about'><li>About Us</li></Link>
                               {/* Tours Dropdown */}
                                <li className="relative group">
                                <span className="cursor-pointer">Tours</span>

                                <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <li>
                                    <Link to="/tours/adventure" className="block px-4 py-2 hover:bg-gray-100">
                                        All Gay Cruises
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tours/cruise" className="block px-4 py-2 hover:bg-gray-100">
                                        All Lesbian Cruises
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tours/cultural" className="block px-4 py-2 hover:bg-gray-100">
                                        Gay Group Cruises
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tours/sailing" className="block px-4 py-2 hover:bg-gray-100">
                                        Gay Sailing Cruises
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tours/resorts" className="block px-4 py-2 hover:bg-gray-100">
                                        All Gay Resorts
                                    </Link>
                                    </li>
                                </ul>
                                </li>

                                <Link to='/gallery'><li>Gallery</li></Link>
                                <Link to='/contact'><li>Contact</li></Link>
                            </ul>
                            {/* <button className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold'>Book Now</button> */}
                        </nav>
                        <HiMenuAlt1 
                        onClick={toggleMenu} 
                        className='cursor-pointer md:hidden text-white'
                        size={30}
                        />
                    </div>
                </div>
                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            </div>
        </header>
    )
}

export default Navbar
