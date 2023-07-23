import React from 'react';
import Header from './Header';
import Footer from './Footer';
import News from './News';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from './images/storeimageslide11.jpg';
import img2 from './images/storeimageslide12.jpg';
import img3 from './images/storeimageslide13.jpg';
import img4 from './images/storeimageslide21.jpg';
import img5 from './images/storeimageslide22.jpg';
import img6 from './images/storeimageslide23.jpg';
import img7 from './images/storeimageslide31.jpg';
import img8 from './images/storeimageslide32.jpg';
import img9 from './images/storeimageslide33.jpg';


function Store() {
    return (
        <>
            <Header />
            <Container fluid className='m-0 p-0'>
                <div className='container pt-5 pb-5 mt-5 mb-5'>
                    <h1 className='mt-5 pt-5'>Powerful tools for</h1>
                    <h1>web professionals</h1>
                    <p className='grey mt-3 mb-4'>We help designers and developers finish their projects on <br /> time and ship faster.</p>
                    <Link to="#products" className='bg-primary text-white p-2 rounded-pill'>View Our Products</Link>
                </div>
                <div className='p-5'></div>



                <div className='contanier-fluid pt-5 pb-5 m-0 p-0' id='products'>
                    <div className='row container-fluid mt-3 mb-4'>
                        <div className='col-sm m-0 p-0'>
                            <img src={img1} alt='rendom' className='img-fluid h-75 w-100' />
                        </div>
                        <div className='col-sm'>
                            <div className='row m-0 p-0 p-5'>
                                <div className='col-sm-7'>
                                    <h1>Shards Pro</h1>
                                    <p className='lightgrey'>BOOTSTRAP 4 UI KIT</p>
                                </div>
                                <div className='col-sm-5 text-end'>
                                    <h3 className='text-success'>US$ 105.02</h3>
                                    <del className='lightgrey'>US$ 140.42</del>
                                </div>
                                <p className='grey'>A premium UI pack featuring 120+ blocks, 350+ components, 15 pre-made layout pages and 13 total categories perfect for digital products, mobile apps, startups or agencies.</p>
                                <Button className='w-25 text-light border-0 btn-sm rounded-pill border-0 p-2 shadow'>Download</Button>
                                <Button className='w-25 text-dark bg-light shadow border-0 p-2 btn-sm rounded-pill border-0 ms-3'>Live Demo</Button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='container-fluid bgcolor'>
                    <div className='container p-5'>
                        <h1>Latest Products</h1>
                        <div className='row m-0 p-0 mt-5'>
                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img1} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard Lite React</h6>
                                        <p className='lightgrey p-0 m-0'>REACT UI KIT</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img2} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-8 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard React</h6>
                                        <p className='lightgrey p-0 m-0'>REACT UI KIT</p>
                                    </div>
                                    <div className='col-sm-4 m-0 p-0 ps-3'>
                                        <p className='text-success fs-6 pt-4'>
                                            US$ 46.02<br/>
                                            <del className='lightgrey'>US$ 57.82</del>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img3} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards React</h6>
                                        <p className='lightgrey p-0 m-0'>REACT UI KIT</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='row m-0 p-0 mt-5'>
                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img4} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard Lite Vue</h6>
                                        <p className='lightgrey p-0 m-0'>VUE UI KIT</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img5} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-8 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard Vue</h6>
                                        <p className='lightgrey p-0 m-0'>PREMIUM VUE UI KIT</p>
                                    </div>
                                    <div className='col-sm-4 m-0 p-0 ps-3'>
                                        <p className='text-success fs-6 pt-4'>
                                            US$ 46.02<br/>
                                            <del className='lightgrey'>US$ 57.82</del>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img6} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Vue</h6>
                                        <p className='lightgrey p-0 m-0'>VUE UI KIT</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='row m-0 p-0 mt-5 pb-4'>
                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img7} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard Lite</h6>
                                        <p className='lightgrey p-0 m-0'>BOOTSTRAP 4 ADMIN TEMPLATE</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img8} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-8 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards Dashboard Pro</h6>
                                        <p className='lightgrey p-0 m-0'>BOOTSTRAP 4 TEMPLATE</p>
                                    </div>
                                    <div className='col-sm-4 m-0 p-0 ps-3'>
                                        <p className='text-success fs-6 pt-4'>
                                            US$ 46.02<br/>
                                            <del className='lightgrey'>US$ 57.82</del>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='shadow'>
                                    <img src={img9} alt='store_image' className='img-fluid'></img>
                                </div>
                                <div className='row m-0 p-0 bg-white shadow'>
                                    <div className='col-sm-10 m-0 p-0 p-3'>
                                        <h6 className='mt-2'>Shards</h6>
                                        <p className='lightgrey p-0 m-0'>BOOTSTRAP 4 UI TOOLKIT</p>
                                    </div>
                                    <div className='col-sm-2 m-0 p-0'>
                                        <p className='text-success fs-6 pt-5'>FREE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='m-0 p-2 pt-2'>
                    <center className='m-0 p-0'>
                        <p className='lightgrey latterspace m-0 p-0 lh-base'>WE'RE PROUDLY FEATURED BY</p>
                    </center>
                </div>


                <News/>
            </Container>
            <Footer />
        </>
    )
};

export default Store;