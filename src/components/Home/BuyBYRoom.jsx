import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const BuyBYRoom = () => {
  const navigate = useNavigate();

  const handlePersonalWorkspace = () => {
    navigate(`/personal-workspace`);
  };
  const handleUnwindingZone = () => {
    navigate(`/unwinding-zone`);
  };
  return (
    <div>
      <div className="md:mx-[76px] md:px-[30px]">
        <div className="md:mb-[15px] mb-[30px] text-[25px] md:text-[36px] text-center font-semibold">
          BUY NOW
        </div>
        <p className="text-center text-[18px] mb-[15px] leading-6 md:px-0 px-[30px]">
          Discover the global taste of lifestyle with our curated room setups
          priced under 15000 BDT, for your work and relaxation.
        </p>
        <div className="w-full">
          <div className="w-full">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1.35,
                },
                575: {
                  slidesPerView: 2.35,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div
                  onClick={handlePersonalWorkspace}
                  className="bg-blue-300 p-5 md:p-10 cursor-pointer"
                >
                  <img
                    className="object-contain w-full"
                    src="https://i.ibb.co/7xhpfPr/Al-HLXm-CRFg-HUFe-UVSDL0-Nypp-MSczfp4f3-MC6x0-JP.jpg"
                    alt=""
                  />
                  <div className="mt-[50px] flex justify-between items-center">
                    <h1 className="text-[18px] text-white font-semibold">
                      Personal Workspace
                    </h1>
                    <MdNavigateNext className="text-white w-[40px] h-[40px] bg-slate-300 rounded-full text-3xl font-semibold" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={handleUnwindingZone}
                  className="bg-yellow-500 p-5 md:p-10 h-full"
                >
                  <img
                    className="w-full"
                    src="https://i.ibb.co/BgTf2sd/r-Fb8-V3-V9-An-Fo3i-Hw-J6pi-Fydp1-P8jr-Qb97-Epquz2a.jpg"
                    alt=""
                  />
                  <div className="mt-[50px] pb-[2px] flex justify-between items-center cursor-pointer">
                    <h1 className="text-[18px] text-white font-semibold">
                      Unwinding Zone
                    </h1>
                    <MdNavigateNext className="text-white w-[40px] h-[40px] bg-slate-300 rounded-full text-3xl font-semibold" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-pink-500 p-5 md:p-10">
                  <img
                    className="w-full"
                    src="https://i.ibb.co/kH4Xrqr/Byg-ZNCk-HOi-Kq4pqm-Ri-I7nuoi-C7h3fm-Uao8-W1-Lfe4.jpg"
                    alt=""
                  />
                  <div className="mt-[50px] flex justify-between items-center cursor-pointer">
                    <h1 className="text-[18px] text-white font-semibold">
                      Lounge Area
                    </h1>
                    <MdNavigateNext className="text-white w-[40px] h-[40px] bg-slate-300 rounded-full text-3xl font-semibold" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBYRoom;
