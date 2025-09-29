import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(nav => <Link nav={nav}></Link>)

    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto py-5'>
            <span className='flex space-x-4' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden space-y-2 px-5 absolute ${open ? 'top-14' : '-top-40'} duration-500 left-12 bg-gray-400`}>
                    {links}
                </ul>
                <h3>Navbar</h3>
            </span>

            <ul className='hidden md:flex space-x-3'>
                {
                    links
                }
            </ul>

            <button className='btn btn-primary'>Sing In</button>
        </nav>
    );
};

export default Navbar;