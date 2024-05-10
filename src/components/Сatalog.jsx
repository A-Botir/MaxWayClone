import { Link } from "react-router-dom";
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
    "22:00",
    "22:00",
    "04:00",
    "23:00",
    "03:00",
    "03:00",
    "03:00",
    "22:00",
    "22:00",
    "03:00",
    "23:00",
    "01:00",
    "22:00",
    "04:00",
    "03:00",
    "03:00",
    "01:00",
    "03:00",
    "03:00",
    "03:00",
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
  worktime: [
    " 10:00-22:00",
    " 10:00-22:00",
    " 10:00-04:00",
    " 10:00-23:00",
    " 10:00-03:00",
    " 10:00-03:00",
    " 10:00-03:00",
    " 10:00-22:00",
    " 10:00-22:00",
    " 10:00-03:00",
    " 10:00-23:00",
    " 10:00-01:00",
    " 10:00-22:00",
    " 10:00-04:00",
    " 10:00-03:00",
    " 10:00-03:00",
    " 10:00-01:00",
    " 10:00-03:00",
    " 10:00-03:00",
    " 10:00-03:00",
  ],
};

const catalogArray = catalogData.title.map((title, index) => ({
  title,
  time: catalogData.time[index],
  location: catalogData.location[index],
  worktime: catalogData.worktime[index],
}));

const Сatalog = () => {
  const { t } = useContext(UseAllContext);

  return (
    <div className="flex flex-col gap-6">
      {catalogArray.map((item, index) => (
        <div className="w-[50%] sm:w-[90%] md:w-[85%]" key={index}>
          <div className="rounded-xl bg-white px-5 py-4 shadow-[0_0_12px_#00000004] sm:p-4 md:p-4">
            <div className="mb-[6px] flex items-start justify-between border-b border-[#eaeaea] pb-3">
              <h4 className="text-[20px] font-bold leading-6 sm:text-[18px]">
                {item.title}
              </h4>
              <p className="text-[#5ac53a]">
                {t("Branches_open")}
                {item.time}
                {t("Branches_open_r")}
              </p>
            </div>
            <p>{item.location}</p>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="mb-[6px] text-[#808080]">
                  {t("Branches_wtime")}:
                </p>
                <p>
                  {t("Branches_weeks")}
                  {item.worktime}
                </p>
              </div>
              <div>
                <p className="mb-[6px] text-right text-[#808080]">
                  {t("Branches_phone")}
                </p>
                <p>
                  <Link to="tel:998712005400" target="_blank">
                    +998712005400
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Сatalog;
