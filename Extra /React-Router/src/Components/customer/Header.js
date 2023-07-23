import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../Components/customer/images/logo.png';
import { Outlet, Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <Container>
                <div className='container shadow d-flex p-1'>
                    <div className='col-6  d-flex'>
                        <div className='col-1'>
                        <img src={Logo} alt='Brand' className='brand' />
                        </div>
                        <div className='col-9 mt-1 ms-3'>
                        <h1>Designrevision</h1>
                        </div>
                    </div>
                    <div className='col-6'>
                        <nav className='nav navbar p-0 pt-3'>
                            <ul>
                                <li><Link to="/"></Link></li>
                                <li><Link to="/store">Store</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/account">My Account</Link></li>
                            </ul>
                        </nav>
                        <Outlet/>
                    </div>
                </div>
            </Container>
        </>
    )
};

export default Header;
