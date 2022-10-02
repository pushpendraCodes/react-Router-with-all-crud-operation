import React from 'react'
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <div className='container shadow-lg p-3 mb-5 bg-body rounded mt-4'>
      <h1 className='text-center mt-5'>Contact us</h1>
      <br></br>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button className="btn btn-primary">Submit</button>
    </div></div>
  )
}

export default Contact
