'use client'
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "motion/react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
      <main className="w-full">
        <div className="fixed bottom-0 right-0 z-50 ">
          <DotLottieReact
            src='/bg/like.lottie'
            loop
            autoplay
            style={{ width: '100%', marginLeft: 'auto' }}
          />
        </div>
        <ol className="flex items-center justify-evenly text-xs px-2 pt-4">
          <motion.img
            initial={{ opacity: 0, x: -80 }}   // trạng thái ban đầu
            animate={{ opacity: 1, x: 0 }}      // trạng thái khi animating
            transition={{ duration: 0.8 }}      // thời gian
            src="/svg/cake.png"
            alt="Main img"
            className="w-[10%] h-auto object-cover bg-transparent mx-auto"
          />
          <img
            src="/svg/heart-line.png"
            alt="Main img"
            className="w-[10%] -scale-x-100 h-auto object-cover bg-transparent mx-auto"
          />
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
          <motion.img
            initial={{ opacity: 0, x: 80 }}   // trạng thái ban đầu
            animate={{ opacity: 1, x: 0 }}      // trạng thái khi animating
            transition={{ duration: 0.8 }}
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
         <div className="relative text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}   
              animate={{ opacity: 1, y: 0 }}      
              transition={{ duration: 1 }} 
              className=" mb-3 font-title text-sm font-bold tracking-[0.2em]">Thiệp mời</motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}   
              animate={{ opacity: 1, y: 0 }}      
              transition={{ duration: 1 }} 
              className="text-2xl mb-2 font-title font-bold text-[#e30118ab] tracking-widest">Lễ Thành Hôn</motion.h1>
            <motion.img
              initial={{ opacity: 0, x: 80 }}   
              animate={{ opacity: 1, x: 0 }}      
              transition={{ duration: 1, delay: 0.5 }} 
              src="/svg/bubble-heart.png"
              alt="Main img"
              className="absolute top-1/2 left-0 -scale-x-100 -translate-y-1/2 w-[20%] h-auto object-cover bg-transparent"
            />
            <motion.img
              initial={{ opacity: 0, x: 80 }}   
              animate={{ opacity: 1, x: 0 }}      
              transition={{ duration: 1, delay: 0.5 }} 
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
            <motion.img
              initial={{ opacity: 0 }}   
              animate={{ opacity: 1 }}      
              transition={{ duration: 1 }} 
              src="/img/anh-chinh.jpg"
              alt="Main img"
              className="w-full h-auto object-contain mask-fade"
            />
            <div className="absolute inset-0 z-10 bg-effect w-full"></div>

            <div className='absolute top-1/2 left-3 -translate-y-1/2 text-center font-name font-semibold text-base text-[#505050] tracking-widest'>
              <motion.h2 
                initial={{ opacity: 0, x: '100%' }}   
                animate={{ opacity: 1, x: 0 }}      
                transition={{ duration: 1.1, delay: 0.2 }} 
                className="py-2">Lê Trí Trung</motion.h2>
              <div className="flex justify-center text-center">
                <motion.img
                  initial={{ opacity: 0, x: '-100%' }}   
                  animate={{ opacity: 1, x: 0 }}      
                  transition={{ duration: 0.9, delay: 0.1 }}
                  src="/img/heart.png"
                  alt="Main img"
                  className="w-8 h-8 object-contain bg-transparent"
                />
              </div>
              <motion.h2 
                initial={{ opacity: 0, x: '100%' }}   
                animate={{ opacity: 1, x: 0 }}      
                transition={{ duration: 1.2, delay: 0.5 }}
                className="py-2">Hoàng Ngọc Anh</motion.h2>
            </div>
        </div>
        <div>
          <motion.img
            animate={{ x: ["100vw", "-10vw"] }}     // chạy từ trái sang phải
            transition={{
              duration: 20,                         // thời gian 1 vòng
              ease: "linear",                      // tốc độ đều
              repeat: Infinity,                    // lặp vô hạn
            }}  
            src="/svg/car.png"
            alt="Main img"
            className="w-8 h-8 object-contain bg-transparent"
          />
          
        </div>
        <div className="p-5 pt-2">
          <h3 className="relative">
            <p className="text-[#e30119] text-center font-semibold">
              Chúng mình ở đây !
            </p>
            <p className="text-sm py-1 font-semibold tracking-wide text-center">
                Khi bạn nhận được tấm thiệp này,<br/> 
                Đám cưới của chúng mình đã bước vào những ngày đếm ngược rồi~ <br/> 
                Điều may mắn nhất trong cuộc đời, là giữa biển người mênh mông, <br/> 
                chúng mình đã gặp nhau, hiểu nhau và yêu nhau. <br/>  
            </p>
            <div className="mt-4">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}   
                whileInView={{ opacity: 1, scale: 1 }}     
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                src="/svg/cute1.png"
                alt="Main img"
                className="w-[30%] h-auto object-cover bg-transparent mx-auto"
              />
            </div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}   
              whileInView={{ opacity: 1, x: 0 }}     
              transition={{ duration: 0.9, delay: 0.5, ease: "linear" }}
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
            <p className="tracking-widest font-semibold">Thời gian</p>
            <h2 className="text-2xl font-semibold text-[#e30119] my-2">25 - 26 / 10 / 2025</h2>
            <h2 className="text-base tracking-widest font-semibold text-[#e30119] my-2">5 - 6 / 9 ( âm lịch )</h2>
            
          </div>

          <div className="w-full mt-5">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}   
              whileInView={{ opacity: 1, scale: 1 }}     
              transition={{ duration: 0.9, ease: "easeOut" }}
              src="/svg/arrow.png"
              alt="Main img"
              className="w-[14%] h-auto object-cover bg-transparent mx-auto"
            />
           <div className="text-center mt-4">
              <p className="tracking-widest font-semibold">Địa điểm</p>
              <h2 className="text-xl font-semibold text-[#e30119] my-2">Nam Lý - Trung Giã - Hà Nội</h2>
              <p className="tracking-widest font-semibold">
                Xin trân trọng mời bạn cùng đến dự bữa tiệc ngập tràn yêu thương và hạnh phúc cùng chúng mình nha ^_^<br/> 
              </p>
           </div>
          </div>
          
          <div className="flex ">
            <motion.img
              initial={{ opacity: 0, x: 80 }}   
              whileInView={{ opacity: 1, x: 0 }}     
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              src="/svg/chaucay.png"
              alt="Main img"
              className="w-[14%] h-auto mx-auto object-contain bg-transparent rounded-2xl"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0 }}   
              whileInView={{ opacity: 1, scale: 1 }}     
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              src="/svg/start.png"
              alt="Main img"
              className="w-[30%] h-auto mx-auto object-contain bg-transparent rounded-2xl"
            />
            <motion.img
              initial={{ opacity: 0, x: -80 }}   
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
              src="/svg/chaucay.png"
              alt="Main img"
              className="w-[14%] h-auto mx-auto object-contain bg-transparent rounded-2xl"
            />
          </div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: 60 }}   
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{ duration: 0.9, ease: "linear" }}
              src="/img/ai2.png"
              alt="Main img"
              className="w-full h-auto object-contain bg-transparent rounded-2xl"
            />
            <motion.label 
              initial={{ opacity: 0, x: -80 }}   
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{ duration: 0.9, delay: 0.4, ease: "linear" }}
              className="absolute top-[8%] left-0 right-0 mx-auto text-3xl text-center shadow-2xl font-wedding text-[#ffffff]">Wedding</motion.label>
          </div>

          <div className="mt-3 font-title">
            <p className="text-xl tracking-wider  text-center">Hành trình yêu nhau 6 năm</p>
            <p className="mt-2 text-xs leading-6">
              🎉 Trái đất tròn rộng lớn, chúng ta thật nhỏ bé giữa thế giới muôn vàn con người <br/>
              🎉 Bằng cách nào đó mà anh và em gặp được nhau, từ hai người xa lạ không quen biết và sau đó tìm hiểu để giờ đây... <br/>
              🎉 Chúng ta đã về chung một nhà. Cảm ơn sự cố gắng vượt qua mọi khó khăn thử thách của hai ta, cảm ơn sự hy sinh dành cho nhau cả một đời <br/>
              🎉 Ngày ta chung đôi cũng là ngày mà anh và em hạnh phúc nhất. <br/>
            </p>
            <p className="mt-2 text-xs text-center">🥰 Cùng nhau viết lên chuyện tình trăm năm 🥰</p>
          </div>

          <div className="relative mt-3">
            <motion.img
              initial={{ opacity: 0, y: 60 }}   
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 1, delay: 0.4, ease: "linear" }}
              src="/img/anh1.jpg"
              alt="Main img"
              className="w-full h-auto object-contain bg-transparent rounded-2xl"
            />
            {/* <motion.img 
              src="/img/anh2.jpg"
              initial={{ opacity: 0, x: -80 }}   
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{ duration: 0.9, delay: 0.4, ease: "linear" }}
              className="absolute top-[50%] left-0 right-0 mx-auto text-3xl text-center shadow-2xl font-wedding text-[#ffffff]"/> */}
          </div>

        </div>
      </main>
     
  )
}
