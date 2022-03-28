import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
function App() {
  
  return (
    <div className="App">
     <h1>I am Trying to add swiperjs in react</h1>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
  
   </Swiper>
    </div>
  )
}

export default App
