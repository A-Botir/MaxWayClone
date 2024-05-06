import { useState } from "react";
import Catalog from "../components/Сatalog";
import Map from "../components/Map";

const Branches = () => {
  const [pagestate, setPagestate] = useState(1);

  return (
    <div className="container my-8 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[32px] font-bold leading-10">Filiallar</h2>
        <div className="flex items-center gap-3">
          <button
            className={`w-[144px] transform rounded-[20px] py-[10px] text-center align-middle font-medium leading-6 duration-200 active:scale-[0.95] ${pagestate == 1 ? "bg-[#51267d] text-white" : "bg-[#f1eff4] text-[#48535b]"}`}
            onClick={() => {
              setPagestate(1);
            }}
          >
            Ro'yxat
          </button>
          <button
            className={`w-[144px] transform rounded-[20px] py-[10px] text-center align-middle font-medium leading-6 duration-200 active:scale-[0.95] ${pagestate == 2 ? "bg-[#51267d] text-white" : "bg-[#f1eff4] text-[#48535b]"}`}
            onClick={() => {
              setPagestate(2);
            }}
          >
            Ro'yxat
          </button>
        </div>
      </div>
      {pagestate == 1 && <Catalog />}
      {pagestate == 2 && <Map />}
    </div>
  );
};

export default Branches;
