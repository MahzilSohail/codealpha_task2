"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Main from './Main';
import Blogpage from './Blogpage';
import Delete, { DialogDemo } from './edit';
import { AddDialog } from './Addblog';

export default function First() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="bg-gradient-to-r from-yellow-200 to-orange-300 min-h-screen">
        <SwiperSlide> <Main/> </SwiperSlide>
        <SwiperSlide> <Blogpage/> </SwiperSlide>
        <SwiperSlide> <DialogDemo/> </SwiperSlide>
        <SwiperSlide> <AddDialog/> </SwiperSlide>
      </Swiper>
    </>
  );
}
