import React, { useState } from "react";
import { Navigation, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const NavCarousel = () => {
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
          spaceBetween={8}
          slidesPerView={7}
          onSwiper={(swiper) => console.log(swiper)}
          initialSlide={currentSlide}
          navigation
          className="swipper_2"
        >
          <SwiperSlide>
            <Navlink url={"#maxibox"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(1)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 1 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍟🍔🥤Maxi BOX
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#klabsend"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(2)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 2 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🥪Klab-Sendvich
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#lavash"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(3)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 3 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🌯Lavash
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#shaurma"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(4)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 4 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🌮Shaurma
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#panini"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(5)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 5 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🫔Panini
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#burger"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(6)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 6 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍔Burger
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#donar"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(7)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 7 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍱Donar kebab
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#hotdog"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(8)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 8 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🌭Hot-Dog
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#gazak"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(9)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 9 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍟Gazaklar
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#tamaddi"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(10)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 10 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍚Tamaddilar
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#desert"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(11)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 11 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🍰Desertlar
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#drink"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(12)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 12 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🥤Ichimliklar
                </p>
              </button>
            </Navlink>
          </SwiperSlide>
          <SwiperSlide>
            <Navlink url={"#sous"}>
              <button
                className="transform active:scale-[0.95]"
                onClick={() => setCurrentSlide(13)}
              >
                <p
                  className={`rounded-xl px-4 py-3 text-[16px] font-medium transition hover:bg-[#f1eff4] hover:text-[#51267d] ${currentSlide === 13 ? "bg-[#f1eff4] text-[#51267d]" : ""}`}
                >
                  🥫Souslar
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
