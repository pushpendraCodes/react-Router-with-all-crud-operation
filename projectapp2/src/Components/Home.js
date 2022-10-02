import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  return (
<div>
<Navbar/>


    <div className='container shadow-lg p-3  bg-body rounded mt-3'>
      {/* <h1 className='text-center mt-1' >Food Adda-we are  best in the city🍕</h1> */}
      <h1 className='text-center mt-1'><span class="badge bg-danger text-warning">Food Adda</span> - we are  best in the city🍕 </h1>

      <br/>
    
     



      {/* image slider--------------- */}

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={`./images/image1.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img  src={`./images/image2.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img  src={`./images/image3.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img  src={`./images/image4.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={`./images/image5.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={`./images/image6.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={`./images/image7.jpg`} class="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Home
