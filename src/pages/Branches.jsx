import { useState } from "react";
import Catalog from "../components/Сatalog";
import Map from "../components/Map";
import { UseAllContext } from "../App";
import { useContext } from "react";

const Branches = () => {
  const [pagestate, setPagestate] = useState(1);
  const { t } = useContext(UseAllContext);

  return (
    <div className="container my-8 py-6 sm:mb-11 sm:pb-0 md:mb-11 md:pb-0">
      <div className="mb-6 flex items-center justify-between sm:mb-4 sm:flex-col sm:gap-3 md:mb-4 md:flex-col md:gap-3">
        <h2 className="text-[32px] font-bold leading-10 sm:text-[24px] sm:leading-8 md:text-[24px] md:leading-8 ">
          {t("Head_nav2")}
        </h2>
        <div className="flex items-center gap-3 sm:w-full md:w-full">
          <button
            className={`w-[145px] transform rounded-[20px] py-[10px] text-center align-middle font-medium leading-6 duration-200 active:scale-[0.95] sm:w-auto sm:flex-grow md:w-auto md:flex-grow ${pagestate == 1 ? "bg-[#51267d] text-white" : "bg-[#f1eff4] text-[#48535b]"}`}
            onClick={() => {
              setPagestate(1);
            }}
          >
            {t("catalog")}
          </button>
          <button
            className={`w-[145px] transform rounded-[20px] py-[10px] text-center align-middle font-medium leading-6 duration-200 active:scale-[0.95] sm:w-auto sm:flex-grow md:w-auto md:flex-grow ${pagestate == 2 ? "bg-[#51267d] text-white" : "bg-[#f1eff4] text-[#48535b]"}`}
            onClick={() => {
              setPagestate(2);
            }}
          >
            {t("map")}
          </button>
        </div>
      </div>
      {pagestate == 1 && <Catalog />}
      {pagestate == 2 && <Map />}
    </div>
  );
};

export default Branches;
