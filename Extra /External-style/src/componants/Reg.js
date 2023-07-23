import React from "react";
const img1 = require("../registernow.gif");

function Register() {
    return (
        <>
            <section id='main-section'>
                <div className='content-1' align="center">
                    <img src={img1} alt='bookimg' /><br/>
                    <span className="fa fa-arrow-down" style={{color:"#2c3e67" , fontSize:"30px"}}></span>
                </div>
                <div className='content-2'>
                    <form className="frm">
                    <h1>Appeal Application Form</h1>
                    <h3>Personal Information</h3>
                        <label>Name</label><br />
                        <input className="First" type="text" name="name" placeholder="First Name *" required />
                        <input className="Last" type="text" name="name" placeholder="Last Name *" required />
                        <br /><br/>
                        <lable>Student Number</lable><br />
                        <input className="Number" type="text" name="name" required />
                        <h3>Appeal Application Form</h3>
                        <label>Request Summery</label><br />
                        <textarea className="Summary" type="text"></textarea><br /><br/>
                        <label>Appeal Information</label><br />
                        <input className="File" type="file" placeholder="choose file here"></input><br /><br/>
                        <label>Do Yo u Have Supporting Document To Upload In Support Of Your Appeal</label><br />
                        <select>
                        <option value="#"> Please Select </option>
                        <option value="#">AddharCard</option>
                        <option value="#">PanCard</option>
                        <option value="#">Licence</option>
                        </select>
                        <br/><br/>
                        <input type="submit" className="button" value="submit"></input>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Register;