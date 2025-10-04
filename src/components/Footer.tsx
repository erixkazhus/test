import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import footer from '../assets/footer-pattern.jpg'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10' 
    style={{
        backgroundImage: `url(${footer})`, 
        backgroundPosition:'bottom',
        backgroundSize: 'cover'
        }}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
                <Link to="/" className="flex items-center gap-3">
                        <img
                        src={logo}
                        alt="Happy Gay Travel Logo"
                        style={{ width: "54px", height: "54px", objectFit: "contain" }}
                        />
                        <h1 className="text-2xl text-white font-bold">Happy Gay Travel</h1>
                    </Link>
                <p className='text-sm'>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.</p>
            </div>
            <div className='flex flex-col lg:items-center'>
                <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-2 text-sm'>
                    <li><a href="/about" className='hover:underline'>Home</a></li>
                    <li><a href="#" className='hover:underline'>Destinations</a></li>
                    <li><a href="/tours" className='hover:underline'>Tours</a></li>
                    <li><a href="/about" className='hover:underline'>About Us</a></li>
                    <li><a href="/contact" className='hover:underline'>Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                <ul className='space-y-2 text-sm'>
                    <li>123 Travel Street, City, Country</li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Email: happy@happygaytravel.com</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 '>
                    <FaFacebook className='hover:text-red-500'/>
                    <FaInstagram className='hover:text-red-500'/>
                    <FaTwitter className='hover:text-red-500'/>
                </div>
            </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm'>
            <p>&copy; {new Date().getFullYear()} ©2006-2020, Happy Travel, Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
