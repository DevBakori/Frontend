import React from 'react';
function Topbar() {
    return (
        <>
            <div className="container-fluid border border-bottom-1 p-0 pt-2">
                <div className="container d-flex p-0 topbar">
                    <div className="col-4">
                        <a href='#'>AboutUs:</a>&nbsp;
                        <a href='#'>My Account:</a>&nbsp;
                        <a href='#'>Wishlist:</a>&nbsp;
                        <a href='#'>Order:</a>&nbsp;
                        <a href='#'>Tracking:</a>
                    </div>
                    <div className="col-4 ps-4">
                        <p>Get great devices to 50% off <a href='#'>View detail</a></p>
                    </div>
                    <div className="col-4 text-center">
                        <p>
                            Need help? Call Us=
                            <a href='#'>3800 908</a>
                            <select className="border-0">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Gujrati</option>
                            </select>
                            <select className="border-0">
                                <option>USD</option>
                                <option>Rupee</option>
                                <option>Euro</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
};
export default Topbar;