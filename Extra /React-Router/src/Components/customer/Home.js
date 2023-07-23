import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from './images/homeimage1.jpg';
import img2 from './images/homeimage2.png';
import img3 from './images/homeimage3.jpg';
import img4 from './images/homeimage4.jpg';
import img5 from './images/homeimage5.jpg';


function Home() {
    return (
        <>
            <Container fluid className='mt-5 pt-5 m-0 p-0'>
                <div className='row bgcolor m-0 p-0'>
                    <div className='col-sm m-0 p-0'>
                        <img src={img1} alt='random' className='img-fluid m-0 p-0 shadow' />
                    </div>
                    <div className='col-sm pt-5 ps-5 pe-5'>
                        <h2>Shards Dashboard Lite React <sup className='text-success'>FREE</sup></h2>
                        <p className='lightgrey'>REACT UI KIT</p>
                        <p className='grey'>A free React admin dashboard template pack featuring a modern design system and lots of custom templates and components.</p>
                        <Button className='w-25 text-light border-0 btn-sm rounded-pill border-0 p-2 shadow'>Download</Button>
                        <Button className='w-25 text-dark bg-light shadow border-0 p-2 btn-sm rounded-pill border-0 ms-3'>Live Demo</Button>
                        <li className='grey mt-3'><strong className='lightgrey'>REQUIRES :</strong> REACT 16.5</li>
                        <li className='grey'><strong className='lightgrey'>VERSION :</strong> 0.1.0</li>
                        <li className='grey'><strong className='lightgrey'>lAST UPDATE :</strong> JUN 2023</li>
                        <Button className='bg-light text-dark border-dark btn-sm p-1 mt-4'><i className='bi bi-star'></i> Star</Button>
                        <Button className='bg-white text-dark border-dark btn-sm p-1 mt-4'>1640</Button>
                        <Link to='https://twitter.com/i/flow/login'><Button className='text-light border-dark btn-sm rounded-pill mt-4 border-0 ms-3'><i className='bi bi-twitter'></i> twitter</Button></Link>
                    </div>
                </div>



                <div className='shadow m-0 p-0 p-5'>
                    <div class="row">
                        <div class="col-sm">
                            <center>
                                <i className='bi bi-tablet border-2 font-weight-bold fs-1 grey'></i>
                                <h3>Fully Responsive</h3>
                                <p className='grey'>All templates are fully responsive and able <br /> to adapt and reflow their layout to any <br /> viewport size.</p>
                            </center>
                        </div>
                        <div class="col-sm">
                            <center>
                                <i className='bi bi-flower3 border-2 font-weight-bold fs-1 grey'></i>
                                <h3>Performance</h3>
                                <p className='grey'>Shards Dashboard Lite React features a <br /> minimal footprint and is highly optimized for <br /> blazing-fast performance.</p>
                            </center>
                        </div>
                        <div class="col-sm">
                            <center>
                                <i className='bi bi-files border-2 font-weight-bold fs-1 grey'></i>
                                <h3>Code Quality</h3>
                                <p className='grey'>Shards Dashboard Lite React is built from <br />scratch while following modern <br /> development best practices.</p>
                            </center>
                        </div>
                    </div>
                </div>



                <div className='bgcolor mt-3'>
                    <div className='row m-0 p-0'>
                        <div className='col-sm-7 p-5'>
                            <span className='changer'>
                                <h1>Components & Templates</h1>
                                <p className='grey text-right'>Shards Dashboard Lite comes packed with templates and <br /> dozens of custom components that you can use to kick-start <br /> your next app.</p>
                            </span>
                        </div>
                        <div className='col-sm-5 m-0 p-0 pt-5 pb-5 ps-4 float-right'>
                            <img src={img2} alt='rendom' className='img-fluid' />
                        </div>
                    </div>
                </div>



                <div className=' shadow'>
                    <div className='row m-0 p-0'>
                        <div className='col-sm m-0 p-0'>
                            <img src={img3} alt='random' className='img-fluid' />
                        </div>
                        <div className='col-sm ps-5'>
                            <div className='mt-5 pt-5 ps-5 grey'>
                                <h1 className='pt-5 mt-4'>Icon Packs</h1>
                                <p>We made sure you can find the perfect icons for your app so we <br /> added the option to pick from more than 1500+ supported icons <br /> from both FontAwesome and Material icon packs.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='bgcolor mt-3'>
                    <div className='row m-0 p-0'>
                        <div className='col-sm pt-5 pe-5'>
                            <span className='changer pt-5 pe-5'>
                                <h1 className='pt-4'>Modern Design System</h1>
                                <p className='grey text-right'>Stop focusing on the minor details! With Shards at its core, <br /> everything is designed and hand-crafted from scratch to look <br /> and integrate flawlessly, so you can focus on functionality rather <br /> than on how things look.</p>
                            </span>
                        </div>
                        <div className='col-sm m-0 p-0 pt-5 pb-5 ps-4 float-right'>
                            <img src={img4} alt='rendom' className='img-fluid' />
                        </div>
                    </div>
                </div>



                <div className='shadow'>
                    <div className='row m-0 p-0'>
                        <div className='col-sm m-0 p-0 pt-5 pb-4 ps-2'>
                            <img src={img5} alt='random' className='img-fluid' />
                        </div>
                        <div className='col-sm ps-5 pt-5'>
                            <div className='mt-5 pt-5 ps-5 grey'>
                                <h1 className='pt-5 mt-4 text-dark'>Source Files</h1>
                                <p>Looking to get your hands dirty? That's great! We've included <br /> both SCSS and Sketch files so you can tailor the admin <br />dashboard template pack to your own needs.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='bgcolor mt-3 pt-5 pb-5'>
                    <center>
                        <h1>Reviews</h1>
                        <h1 className='mt-5'>Write a Review</h1>
                    </center>
                    <div className='w-50 mx-auto'>
                        <form>
                            <label>Name *</label><br />
                            <input type='text' className='mt-2 w-100 mb-3 grey form-control' required />
                            <label>Email *</label><br />
                            <input type='email' className='mt-2 w-100 mb-3 grey form-control' required/>
                            <label>Review Title *</label><br />
                            <input type='text' className='mt-2 w-100 mb-4 grey form-control' required/>
                            <label>Rating *</label><br />
                            {/* <span>
                                <i className='bi bi-star fs-4 text-warning'></i>
                                <i className='bi bi-star fs-4 ms-3 text-warning'></i>
                                <i className='bi bi-star fs-4 ms-3 text-warning'></i>
                                <i className='bi bi-star fs-4 ms-3 text-warning'></i>
                                <i className='bi bi-star fs-4 ms-3 text-warning'></i>
                            </span> */}
                            {/* <template>
                                <div>
                                    <b-form-rating v-model="value" readonly></b-form-rating>
                                    <p class="mt-2">Value: {{ value }}</p>
                                </div>
                            </template> */}
                            {/* <script>
                                export default {
                                    data() {
                                        return {
                                            value: 2.567
                                        }
                                    }
                                 }
                            </script> */}
                            <label>Raview *</label><br />
                            <textarea type='text' rows='8' className='form-control mt-2 mb-4' required/>
                            <input type='checkbox' className='me-1' required/>
                            Save my name, email, and website in this browser for the next time I comment.
                            <center>
                            <Button type='submit' className='rounded-pill fs-4 mt-4 mb-3'>Post Review</Button>
                            </center>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
};

export default Home;


