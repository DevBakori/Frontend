import React from 'react'
import { Outlet, Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <div className='pt-5 bg-white'>
                <div className='row m-0 p-0'>
                    <div className='col-sm-7'>
                        <center>
                            <nav className='nav navbar p-0 pt-3 pe-5 me-5'>
                                <ul>
                                    <li><Link to="/store">Store</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/account">Privacy Policy</Link></li>
                                    <li><Link to="/account">Licenses</Link></li>
                                    <li><Link to="/account">Terms of Service</Link></li>
                                    <li><Link to="/account">F.A.Q.</Link></li>
                                    <li><Link to="/account">Affiliates</Link></li>
                                </ul>
                            </nav>
                            <Outlet />
                        </center>
                    </div>
                    <div className='col-sm-5'>
                        <nav className='nav navbar p-0 pt-3 float-0 pe-5 me-5'>
                            <ul>
                                <li><Link to='https://www.facebook.com/login/'><i className='bi bi-facebook'></i></Link></li>
                                <li className='ms-3'><Link to='https://twitter.com/i/flow/login'><i className='bi bi-twitter'></i></Link></li>
                                <li className='ms-3'><Link to='https://dribbble.com/'><i className='bi bi-dribbble'></i></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr className='w-100' />
                <center>
                    <p className='grey'>Copyright © 2023</p>
                </center>
            </div>
        </>
    )
};

export default Footer;