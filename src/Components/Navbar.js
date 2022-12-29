import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <Link to='/media'><li className='mr-10 text-sky-500 font-semibold'>Media</li></Link>
        <Link to='/message'><li className='mr-10 text-sky-500 font-semibold'>Message</li></Link>
        <Link to='/about'> <li className='mr-10 text-sky-500 font-semibold'>About</li></Link>



    </>
    return (
        <div className="navbar bg-base-100 shadow-2xl rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52">
                        {menuItems}

                    </ul>
                </div>
                <Link to='/' className='text-sky-500 font-semibold'>Social Media</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;