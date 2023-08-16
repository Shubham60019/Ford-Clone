 import React from 'react'
 import { Carousel } from 'antd';
 import "./global.css"
import Navbar from './Navbar.jsx';

 const App = () => {
   return (
    <>
        <Navbar/>

    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://st.hotrod.com/uploads/sites/21/2011/09/1109phr-01-1969-ford-mustang-front-right.jpg " class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://st.automobilemag.com/uploads/sites/5/2018/11/11-classic-recreations-1969-boss-429-mustang.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://st.automobilemag.com/uploads/sites/5/2018/11/09-classic-recreations-1969-boss-429-mustang.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



   </>
   )
 }

 export default App