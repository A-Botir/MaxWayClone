import React, { useState } from "react";
import { Navigation, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useTheme } from "@mui/material/styles";
import { UseAllContext } from "../App";
import { useContext } from "react";

const NavCarousel = () => {
  const theme = useTheme();
  const { t } = useContext(UseAllContext);
  const [currentSlide, setCurrentSlide] = useState(1);

  const Navlink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, EffectFade]}
          spaceBetween={14}
          slidesPerView="auto"
          onSwiper={(swiper) => console.log(swiper)}
          initialSlide={currentSlide}
          navigation
          className="swipper_2"
        >
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#maxibox"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(1)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px]  ${currentSlide === 1 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_1")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#klabsend"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(2)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 2 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_2")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#lavash"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(3)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 3 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_3")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#shaurma"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(4)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 4 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_4")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#panini"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(5)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 5 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_5")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#burger"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(6)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 6 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_6")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#donar"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(7)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 7 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_7")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#hotdog"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(8)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 8 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_8")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#gazak"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(9)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 9 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_9")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#tamaddi"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(10)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 10 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_10")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#desert"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(11)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 11 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_11")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#drink"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(12)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 12 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_12")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Navlink url={"#sous"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(13)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] sm:px-2 sm:py-[6px] sm:text-[12px] md:px-3 md:py-2 md:text-[14px] ${currentSlide === 13 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  {t("Navbar_13")}
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NavCarousel;
