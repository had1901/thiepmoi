'use client'
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "motion/react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
      <main className="w-full">
        <div className="fixed bottom-20 right-0 z-50 ">
          <DotLottieReact
            src='/bg/like.lottie'
            loop
            autoplay
            style={{ width: '100%', marginLeft: 'auto' }}
          />
        </div>
        <ol className="flex items-center justify-evenly text-xs px-2 pt-4">
          {/* <li>Happy</li> */}
          <img
            src="/svg/cake.png"
            alt="Main img"
            className="w-[10%] h-auto object-cover bg-transparent mx-auto"
          />
          <img
            src="/svg/heart-line.png"
            alt="Main img"
            className="w-[10%] -scale-x-100 h-auto object-cover bg-transparent mx-auto"
          />
          {/* <li>Wedding</li> */}
          <img
            src="/svg/cake.png"
            alt="Main img"
            className="w-[10%] h-auto object-cover bg-transparent mx-auto"
          />
          <img
            src="/svg/heart-line.png"
            alt="Main img"
            className="w-[10%] h-auto object-cover bg-transparent mx-auto"
          />
          {/* <li>Wedding</li> */}
          <img
            src="/svg/cake.png"
            alt="Main img"
            className="w-[10%] h-auto object-cover bg-transparent mx-auto"
          />
        </ol>
        <div className="p-4">
          <div className="w-full">
            <img
              src="/svg/top2.png"
              alt="Main img"
              className="w-full h-auto object-cover bg-transparent mx-auto"
            />
          </div>
         <div className="relative">
            <h1 className="text-center mb-2 text-sm font-semibold tracking-widest">Thiệp mời</h1>
            <h1 className="text-center text-2xl font-bold text-[#e30119] tracking-widest">Lễ Thành Hôn</h1>
            <img
              src="/svg/bubble-heart.png"
              alt="Main img"
              className="absolute top-1/2 left-0 -scale-x-100 -translate-y-1/2 w-[20%] h-auto object-cover bg-transparent"
            />
            <img
              src="/svg/bubble-heart.png"
              alt="Main img 2"
              className="absolute top-1/2 right-0  -translate-y-1/2 w-[20%] h-auto object-cover bg-transparent"
            />
         </div>
          <div className="w-full">
            <img
              src="/svg/under.png"
              alt="Main img"
              className="w-[80%] h-auto object-cover bg-transparent mx-auto"
            />
          </div>
          
        </div>
        <div className="relative w-full">
            <img
              src="/img/anh-chinh.jpg"
              alt="Main img"
              className="w-full h-auto object-contain mask-fade"
            />
            <div className="absolute inset-0 z-10 bg-effect w-full"></div>

            <div className='absolute top-1/2 left-3 -translate-y-1/2 text-center font-name font-semibold text-base text-[#505050] tracking-widest'>
              <h2 className="py-2">Lê Trí Trung</h2>
              <div className="flex justify-center text-center">
                <img
                  src="/img/heart.png"
                  alt="Main img"
                  className="w-8 h-8 object-contain bg-transparent"
                />
              </div>
              <h2 className="py-2">Hoàng Ngọc Anh</h2>
            </div>
        </div>
        
        <div className="p-5">
          <h3 className="relative">
            <p className="text-[#e30119] text-center font-semibold">
              Chúng mình ở đây !
            </p>
            <p className="text-sm py-1 text-center">
                Khi bạn nhận được tấm thiệp này,<br/> 
                Đám cưới của chúng mình đã bước vào những ngày đếm ngược rồi~ <br/> 
                Điều may mắn nhất trong cuộc đời, là giữa biển người mênh mông, <br/> 
                chúng mình đã gặp nhau, hiểu nhau và yêu nhau. <br/>  
            </p>
            <div className="mt-4">
              <img
                src="/svg/cute1.png"
                alt="Main img"
                className="w-[30%] h-auto object-cover bg-transparent mx-auto"
              />
            </div>
            <img
              src="/svg/maybaygiay.png"
              alt="Main img"
              className="absolute top-0 right-0 w-[10%] h-auto object-cover bg-transparent mx-auto"
            />
          </h3>
          
          <div className="w-full mt-5">
            <img
              src="/svg/bot1.png"
              alt="Main img"
              className="w-[80%] h-auto object-cover bg-transparent mx-auto"
            />
          </div>
          <div className="relative text-center">
            <p className="tracking-widest">Thời gian</p>
            <h2 className="text-2xl font-semibold text-[#e30119] my-2">24 / 10 / 2025</h2>
            <p className="font-semibold">
              Xin trân trọng mời bạn cùng đến dự bữa tiệc ngập tràn yêu thương và hạnh phúc cùng chúng mình nha<br/> 
            </p>
          </div>

          <div className="w-full mt-5">
            <img
              src="/svg/arrow.png"
              alt="Main img"
              className="w-[14%] h-auto object-cover bg-transparent mx-auto"
            />
           <div className="text-center mt-4">
              <p className="tracking-widest">Địa điểm</p>
              <h2 className="text-xl font-semibold text-[#e30119] my-2">Nam Lý - Trung Giã - Hà Nội</h2>
              <p className="font-semibold">
                Xin trân trọng mời bạn cùng đến dự bữa tiệc ngập tràn yêu thương và hạnh phúc cùng chúng mình nha<br/> 
              </p>
           </div>
          </div>
        </div>
      </main>
     
  )
}
