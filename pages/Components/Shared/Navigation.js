import { useNhostAuth } from '@nhost/react-auth';
import Link from 'next/link';
import React, { useState } from 'react';
import nhost from '../../../utils/nhost';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
    const { user, isLoading, isAuthenticated } = useNhostAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <div className="navbar shadow-lg bg-neutral text-neutral-content py-4">
                <div className="px-2 mx-2 navbar-start">
                    <Link href="/">
                        {/* <i className="fas fa-blog mr-2"></i> */}
                        <span className="text-lg font-bold">
                            BLOGS
                        </span>
                        {/* <i className="fas fa-blog ml-2"></i> */}
                    </Link>
                </div>
                <div className="hidden px-2 mx-2 navbar-center md:flex">
                    <div className="flex items-stretch">
                        <Link href='/'>
                            <button className="btn btn-ghost btn-sm rounded-btn" href='#!'>
                                HOME
                            </button>
                        </Link>
                        <Link href='/blogs'>
                            <button className="btn btn-ghost btn-sm rounded-btn" href='#!'>
                                ALL BLOGS
                            </button>
                        </Link>

                        <button className="btn btn-ghost btn-sm rounded-btn" href='#!'>
                            <Link href='/'>CONTRIBUTORS</Link>
                        </button>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    {isAuthenticated ?
                        <div className='dropdown dropdown-hover dropdown-end'>
                            <div className="flex-none">
                                <div className="avatar">
                                    <div className="rounded-full w-10 h-10 m-1">
                                        <img src={user?.avatar_url} alt='user_img' />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-neutral rounded-box w-40">
                                <li className='px-5'>
                                    <h1>Hi, {user.displayName}</h1>
                                </li>
                                <li>
                                    {/* <Link to='/postblog'>POST BLOG</Link> */}
                                </li>
                                <li>
                                    {/* <Link to='/myblogs'>MY BLOGS</Link> */}
                                </li>
                                <li>
                                    <button onClick={() => nhost.auth.signOut()}>LOG OUT <i className="fas fa-sign-in-alt mr-3 ml-1"></i></button>
                                </li>

                            </ul>

                        </div>

                        :
                        <>
                            <Link href="/login">
                                <button
                                    className="btn btn-ghost btn-sm rounded-btn text" href='#!'>
                                    LOGIN<i className="fas fa-sign-in-alt mr-0 ml-1"></i>
                                </button>
                            </Link>
                        </>

                    }

                </div>
                <div className="navbar-end md:hidden z-50">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-1 -mr-1 transition duration-5000 rounded "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {!isMenuOpen ? <FontAwesomeIcon className='text-white px-2 text-3xl' icon={faBars} /> : <FontAwesomeIcon className='text-white px-2 text-3xl' icon={faTimes} />}
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-14 right-0 w-1/2 border-1 border-black">
                            <ul className='bg-neutral px-1 py-3'>
                                <li>
                                    <Link href='/' className="btn btn-ghost btn-sm rounded-btn">
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/blogs' className="btn btn-ghost btn-sm rounded-btn">
                                        ALL BLOGS
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link to='/myblogs' className="btn btn-ghost btn-sm rounded-btn">
                                        MY BLOGS
                                    </Link> */}
                                </li>
                                <li>
                                    {/* <Link to='/postblog' className="btn btn-ghost btn-sm rounded-btn" href='#!'>
                                        POST BLOG
                                    </Link> */}
                                </li>
                                <li>
                                    <Link to='/' className="btn btn-ghost btn-sm rounded-btn" href='#!'>
                                        CONTRIBUTORS
                                    </Link>
                                </li>
                                {isAuthenticated && <li onClick={() => nhost.auth.signOut()}>
                                    {user?.displayName}, Logout
                                </li>}

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navigation;