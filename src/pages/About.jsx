import { Link } from "react-router-dom";
import { UseAllContext } from "../App";
import { useContext } from "react";

const About = () => {
  const { t } = useContext(UseAllContext);

  return (
    <div className="container">
      <section className="py-8 sm:py-6 md:py-7">
        <h2 className="mb-6 text-[32px] font-semibold leading-10 sm:mb-4 sm:text-[24px] sm:leading-8 md:mb-4 md:text-[24px] md:leading-8">
          {t("About_title")}
        </h2>
        <div className="mb-8 max-h-[300px] w-full overflow-hidden rounded-xl sm:mb-6 sm:max-h-[165px] md:mb-6 md:max-h-[165px]">
          <img
            src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
            alt="max way img"
            className="box-border w-full rounded-xl object-cover"
          />
        </div>
        <p className="max-w-[68%] text-[16px] leading-6 text-[#252c32]">
          {t("About_desqription1")}
          <br />
          {t("About_desqription2")}
          <br />
          {t("About_desqription3")}
          <br />
          {t("About_desqription4")}
          <Link
            to="https://t.me/maxwaymasterfood_bot"
            target="_blank"
            className="text-[16px] leading-6 text-blue-500 hover:underline"
          >
            @maxwaymasterfood_bot
          </Link>{" "}
          {t("About_desqription5")}
        </p>
      </section>
    </div>
  );
};

export default About;
