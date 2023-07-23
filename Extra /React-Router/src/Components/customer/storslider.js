import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Components/customer/images/storeimageslide11.jpg';
import img2 from '../../Components/customer/images/storeimageslide12.jpg';


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>
                        <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="shadow ms-2 me-2">
                            <div>
                                <img src={img2} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div> 
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div> 
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div> 
                    </div>


                    <div>
                    <div className="shadow ms-2 me-2">
                            <div className="">
                                <img src={img1} alt="slide" className="img-fluid" />
                            </div>
                            <div className="row bg-white m-0 p-0 pt-2">
                                <div className="col-sm-9">
                                    <h6>Shards Dashboard Lite React</h6>
                                    <p className="lightgrey">REACT UI KIT</p>
                                </div>
                                <div className="col-sm-3 pt-3">
                                    <span className="text-success fs-5">FREE</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </Slider>
            </div>
        );
    }
}