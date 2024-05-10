import { UseAllContext } from "../App";
import { useContext } from "react";

const catalogData = {
  title: [
    "MAX WAY BERUNIY",
    "MAX WAY ATLAS",
    "MAX WAY - DRUJBA",
    "MAX WAY MEGA PLANET",
    "MAX WAY AVIASOZLAR",
    "MAX WAY RISOVIY",
    "MAX WAY PARUS",
    "MAX WAY MAGIC CITY",
    "MAX WAY SAMARQAND DARVOZA",
    "MAX WAY PARKENT",
    "MAX WAY UNIVERSAM",
    "MAX WAY ROYSON",
    "MAX WAY NEXT",
    "MAX WAY MUQUMIY",
    "MAX WAY GRAND MIR",
    "MAX WAY SAYRAM",
    "MAX WAY MAKSIM GORKIY",
    "MAX WAY SERGELI",
    "MAX WAY FONTAN",
    "MAX WAY MINOR",
  ],
  time: [
    "Restoran soat 22:00 da yopiladi",
    "Restoran soat 22:00 da yopiladi",
    "Restoran soat 04:00 da yopiladi",
    "Restoran soat 23:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 22:00 da yopiladi",
    "Restoran soat 22:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 23:00 da yopiladi",
    "Restoran soat 01:00 da yopiladi",
    "Restoran soat 22:00 da yopiladi",
    "Restoran soat 04:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 01:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
    "Restoran soat 03:00 da yopiladi",
  ],
  location: [
    "улица Беруни, 47, Ташкент",
    "улица Катартал, 28, Ташкент",
    "микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент",
    "улица Ниязбек, 1",
    "улица Авиасозлар, 23",
    "Узбекистан, Ташкент, Алтынкульская улица, 10",
    "улица Катартал, 60/5",
    "Узбекистан, Ташкент, улица Бабура, 174/6",
    "Узбекистан, Ташкент, улица Коратош, 5А",
    "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
    "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
    "Узбекистан, Ташкент, улица Заркайнар, 2",
    "Узбекистан, Ташкент, улица Бабура, 6",
    "Узбекистан, Ташкент, улица Чиланзар",
    "Узбекистан, Ташкент, улица Шота Руставели, 9А",
    "Узбекистан, Ташкент, улица Юнусота",
    "махалля Элобод",
    "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
    "проспект Амира Темура",
    "MaxWay",
  ],
};

const Filial = () => {
  const { t } = useContext(UseAllContext);

  const catalogArray = catalogData.title.map((title, index) => ({
    title,
    time: catalogData.time[index],
    location: catalogData.location[index],
  }));

  return (
    <div className="w-full">
      <div className="">
        <input
          type="search"
          className="w-full rounded-xl border border-[#e5e9eb] px-4 py-[14px] outline-none focus:border-[#51267d]"
          placeholder={t("Delivery_placeholder2")}
        />
        <div className="mb-3 mt-2 h-[260px] overflow-auto rounded-xl bg-white p-3 shadow-[0_4px_10px_#5982e729]">
          <ul className="flex flex-col gap-6 bg-white">
            {catalogArray.map((item, index) => (
              <li
                className="w-full rounded-xl border border-[#e5e9eb] bg-white px-4 py-[10px] active:border-[#51267d]"
                key={index}
              >
                <div className="w-[50%] sm:w-[60%]  md:w-[40%] ">
                  <div className="mb-1 flex items-center gap-2">
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      color="var(--primary-color)"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="PlaceOutlinedIcon"
                      width={24}
                      height={24}
                      fill="#51267d"
                    >
                      <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
                    </svg>
                    <h4 className="text-[16px] font-medium leading-5 ">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mb-2 sm:text-[12px] md:text-[12px]">
                    {item.location}
                  </p>
                  <p className="text-[#5982e7] sm:text-[12px] md:text-[12px]">
                    {item.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filial;
