import React from "react";
// import slid from '../images/slider-images.webp';
// import slid1 from '../images/slider-images.webp';

function Slider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="container carousel slide p-0" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div className="carousel-item active slider">
                                <h2 className="text-white">Don't miss amazing <br /> grocery deals</h2>
                                  <p className="text-white">Sign up for the daily newsletter</p>
                                <div className="input-group mb-3 w-25">
                                    <span className="input-group-text bg-white border-right-0"><i className="bi bi-cursor"></i></span>
                                    <input type="text" className="form-control border-0" aria-label="Amount (to the nearest dollar)" />
                                    <button className="input-group-text bg-success slidbnt">Button</button>
                                </div>
                    </div>
                    <div className="carousel-item slider1">
                        <div className="d-flex">
                            <div className="col-7">
                                <h2>Don't miss amazing grocery deals</h2>
                            </div>
                            <div className="col-5"></div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
};
export default Slider;