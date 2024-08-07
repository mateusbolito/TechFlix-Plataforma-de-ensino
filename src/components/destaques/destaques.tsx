"use client";

import { useEffect, useState } from "react";
import node from "../../../public/node.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative } from "swiper/modules";

export default function Destaques() {
  const data = [
    {
      id: "1",
      image:
        "https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Fimages%2Fdashboard%2Fformacao-c-sharp-desktop.png&w=1920&q=75",
    },
    {
      id: "2",
      image:
        "https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Fimages%2Fdashboard%2Fnlw-unite-desktop.png&w=1920&q=75",
    },
    {
      id: "3",
      image:
        "https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Fimages%2Fdashboard%2Fnlw-unite-desktop.png&w=1920&q=75",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h3 className="text-xl size-4 text-gray-200 mb-3 flex justify-start items-end max-w-screen-xl w-[95%] xl:w-[1200px] xl:text-center">
        Destaques
      </h3>

      <div className=" flex col-span-1 gap-4 flex-wrap items-center justify-center">
        <div className="flex flex-col rounded-md bg-colorsecondary border border-zinc-800 hover:border-green-700 w-[600px] h-[315px] ">
          <div className="flex gap-5 p-4 border-b border-zinc-800">
            <div>
              <div className="w-[130px] h-[120px] flex items-center justify-center bg-slate-500 rounded-full">
                <span className="flex  text-center">
                  <img src={node.src} alt="" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-[120px] ">
              <strong className="text-gray-200">Meu Perfil</strong>
              <span className="text-colorViewProfileButon">
                Visualizado ha 7 dias
              </span>
              <a href="">
                <button className="w-[120px] h-[40px] rounded-md border text-gray-200 border-zinc-800 hover:border-green-700 ">
                  ver perfil
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-md  border border-zinc-800  w-[600px] h-[315px] ">
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            className="w-[599px] rounded-md"
            modules={[Pagination, Navigation, Autoplay]}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  className="w-[600px] h-[315px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
