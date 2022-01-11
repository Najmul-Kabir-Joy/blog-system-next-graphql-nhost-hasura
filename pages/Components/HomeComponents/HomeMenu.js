import Link from 'next/link';
import React, { useState } from 'react';
export const getStaticProps = async () => {
    const res = await fetch('')

}


const HomeMenu = () => {
    const [menu, setMenu] = useState('politics');
    const [subMenu, setSubMenu] = useState('');
    const currentView = (menu, item) => {
        const setCurrent = document.getElementById(item);
        const elements = document.getElementsByClassName(menu);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        };
        setCurrent.classList.add('active');
    };
    //HANDLING THE MENU FOR FURTHER RENDERING
    const menuHandler = (item) => {
        setMenu(item);
        currentView('menuItem', item);
    };
    const subMenuHandler = (item) => {
        setSubMenu(item);
        currentView('subMenuItem', item);
    };

    //DISPLAY FUNCTION FOR MENU AND SUBMENU AFTER SELECTION
    const displayFunc = (menu) => {
        const filterData = defaultBlogs.filter(blog => blog.category === menu);
        setFilterdBlogs(filterData);
    }

    const displaySubFunc = (menu, submenu) => {
        const filterData = defaultBlogs.filter(blog => blog.category === menu && blog.subcategory === submenu);
        setFilterdBlogs(filterData);
    };
    //DATE TO LOCAL DATE TIME
    const dateFixer = () => {
        const date = new Date();
        return date.toDateString();
    }

    return (
        <>
            <h1 className='text-center text-4xl font-semibold'>BLOGS</h1>
            <div className='flex flex-col md:flex-row py-10'>
                {/*MENUS */}
                <div className='w-full md:w-5/6'>
                    <div className='flex flex-wrap justify-evenly px-2 md:px-5'>
                        <h2
                            id='sports'
                            className='menuItem btn btn-ghost text-sm md:text-lg cursor-pointer'
                            onClick={() => { menuHandler('sports'); displayFunc('sports') }}>
                            SPORTS
                        </h2>
                        <h2
                            id='politics'
                            className='menuItem btn btn-ghost text-sm md:text-lg cursor-pointer active'
                            onClick={() => { menuHandler('politics'); displayFunc('politics') }}>
                            POLITICS
                        </h2>
                        <h2
                            id='fashion'
                            className='menuItem btn btn-ghost text-sm md:text-lg cursor-pointer'
                            onClick={() => { menuHandler('fashion'); displayFunc('fashion') }}>
                            FASHION
                        </h2>
                        <h2
                            id='education'
                            className='menuItem btn btn-ghost text-sm md:text-lg cursor-pointer'
                            onClick={() => { menuHandler('education'); displayFunc('education') }}>
                            EDUCATION
                        </h2>
                    </div>
                    {/*CONDITIONAL SUBMENU OPEN FOR MENU SELCTION */}
                    <div className='w-full flex justify-center px-5'>
                        {
                            menu === 'politics'
                            &&
                            <>
                                <div className='w-full flex justify-evenly'>
                                    <h3
                                        id='national'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('national'); displaySubFunc('politics', 'national'); }}>
                                        NATIONAL</h3>
                                    <h3
                                        id='international'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('international'); displaySubFunc('politics', 'international'); }}>
                                        INTERNATIONAL
                                    </h3>
                                </div>
                            </>
                        }
                        {
                            menu === 'sports'
                            &&
                            <>
                                <div className='w-full flex justify-evenly'>
                                    <h3
                                        id='football'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('football'); displaySubFunc('sports', 'football'); }}>
                                        FOOTBALL
                                    </h3>
                                    <h3
                                        id='cricket'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('cricket'); displaySubFunc('sports', 'cricket'); }}>
                                        CRICKET
                                    </h3>
                                    <h3
                                        id='otherSports'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('otherSports'); displaySubFunc('sports', 'others'); }}>
                                        OTHERS
                                    </h3>
                                </div>
                            </>
                        }
                        {
                            menu === 'fashion'
                            &&
                            <>
                                <div className='w-full flex justify-evenly'>
                                    <h3
                                        id='trending'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('trending'); displaySubFunc('fashion', 'trending'); }}>
                                        TRENDING
                                    </h3>
                                    <h3
                                        id='othersFashion'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('othersFashion'); displaySubFunc('fashion', 'others'); }}>
                                        OTHERS
                                    </h3>
                                    <h3
                                        id='celebrity'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('celebrity'); displaySubFunc('fashion', 'celebrity'); }}>
                                        CELEBRITY
                                    </h3>
                                </div>
                            </>
                        }
                        {
                            menu === 'education'
                            &&
                            <>
                                <div className='w-full flex justify-evenly'>
                                    <h3
                                        id='primary'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('primary'); displaySubFunc('education', 'primary'); }}>
                                        PRIMARY
                                    </h3>
                                    <h3
                                        id='secondary'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('secondary'); displaySubFunc('education', 'secondary'); }}>
                                        SECONDARY
                                    </h3>
                                    <h3
                                        id='higher'
                                        className='subMenuItem btn btn-ghost text-base cursor-pointer'
                                        onClick={() => { subMenuHandler('higher'); displaySubFunc('education', 'higher'); }}>
                                        HIGHER
                                    </h3>
                                </div>
                            </>
                        }

                    </div>
                    {/* BLOG CARDS */}

                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 px-5 w-full pb-0'>
                        {
                            filterdBlogs?.slice(0, 9).map(blog => <BlogCardGenerator key={blog.id} blog={blog} />)
                        }
                    </div> */}

                </div>
                {/*POPULAR BLOGS */}
                {/* <div className='w-full md:w-1/6 mt-14 px-5'>
                    <div>
                        <h1 className='text-center text-2xl font-semibold pb-2'>POPULAR BLOGS</h1>
                        <div>
                            {
                                defaultBlogs?.slice(-8).reverse().map(blog => {
                                    return (
                                        <div key={blog.id} className='flex items-center mb-4 mt-2'>
                                            <i className="fas fa-file-alt mr-3 text-3xl md:text-xl"></i>
                                            <div className=''>
                                                <Link to={`/blogdetails/${blog?.id}`}>
                                                    <p className='hover:text-red-500 text-3xl md:text-base'>{blog.title}</p>
                                                </Link>
                                                <small className='text-sm md:text-base'>{dateFixer(blog?.created_at)}</small>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Link to={'/blogs'}>
                                <h1 className='text-center text-lg md:text-sm hover:text-red-500'>SEE ALL</h1>
                            </Link>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    );
};

export default HomeMenu;