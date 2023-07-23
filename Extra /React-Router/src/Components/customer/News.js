import React from 'react'


function News() {
    return (
        <>
            <div className='bg-dark p-5'>
                <center>
                    <h1 className='text-white'>Join our Newsletter</h1>
                    <p className='text-light'>Get access to subscriber exclusive deals and be the first to know when we 🚀 launch something new!</p>
                    <form>
                        <input type='email' placeholder='Email Address' className='rounded-pill p-2 border-0' />
                        <input type='submit' value='Subscribe' className='rounded-pill p-2 border-0'/>
                    </form>
                </center>
            </div>
        </>
    )
};

export default News;