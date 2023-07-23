import React from 'react';
import logo from '../images/logo.png'
function Header()
{
    return(
        <>
                <div className="container-fluid border border-bottom-1 p-0 pt-2">
                <div className="container d-flex p-0 topbar">
                    <div className="col-2">
                        <div className="d-flex">
                            <div className="col-3">
                                <img src={logo} alt="logo" className="w-75 mt-3  logos" />
                            </div> 
                            <div className="col-9">
                                <h4>Nest</h4>
                                <p>Fruit & Vegetables</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-4 ms-4 me-5">
                        <form>
                            <div class="input-group mt-3">
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                            </div> 
                            </form>
                    </div>
                    <div className="col-5">
                        <p className="mt-4">

                            <select className="ms-1">
                                <option>Your Location</option>
                                <option>Rajkot</option>
                                <option>Ahemdabad</option>
                                <option>Surat</option>
                                <option>Vadodara</option>
                            </select>
                            <b><i class="bi bi-bullseye"></i>Compare</b>
                            <b><i class="bi bi-heart"></i>Compare</b>
                            <b><i class="bi bi-cart"></i>Compare</b>
                            <b><i class="bi bi-person-fill"></i>Compare</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;