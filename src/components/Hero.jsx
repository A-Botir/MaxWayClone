import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Hero1 from "../assets/images/hero_img1.svg";
import Hero2 from "../assets/images/hero_img2.svg";

const Hero = () => {
  return (
    <div className="mt-5 sm:mt-1 md:mt-1">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex w-full transform cursor-pointer items-center justify-between duration-200 active:scale-[0.95]">
            <div className="mx-3 flex items-center justify-between">
              <img
                src={Hero1}
                alt="img"
                className="box-border w-full rounded-[40px] object-cover sm:rounded-[20px] md:rounded-[28px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full transform cursor-pointer items-center justify-between duration-200 active:scale-[0.95]">
            <div className="mx-3 flex items-center justify-between">
              <img
                src={Hero2}
                alt="img"
                className="box-border w-full rounded-[40px] object-cover sm:rounded-[20px] md:rounded-[28px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
