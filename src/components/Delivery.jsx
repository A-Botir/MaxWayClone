import React, { useContext, useState } from "react";
import { Box, Modal, Fade, IconButton } from "@mui/material";
import { UseAllContext } from "../App";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps";
import Adress from "./Adress";
import Filial from "./Filial";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: "rgb(0 0 0 / 20%) 0px 11px 15px -7px",
  borderRadius: "16px",
  pb: "30px",
  outline: "none",
  "@media screen and (max-width: 1024px)": {
    width: "100%",
    maxHeight: "100vh",
    pb: "16px",
    borderRadius: "none",
  },
};

const Delivery = () => {
  const { opnmod, setOpnmod, t } = useContext(UseAllContext);
  const [deliver, setDeliver] = useState(1);

  const closeMod = () => setOpnmod(false);

  const setMapConfig = () => {
    alert("Delivery completed! Waiting pls!");
    closeMod();
  };
  return (
    <div>
      <Modal
        keepMounted
        open={opnmod}
        onClose={closeMod}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Fade in={opnmod}>
          <Box sx={style}>
            <div className="relative px-6 pt-6 sm:static sm:p-0 md:static md:p-0">
              <h2 className="mb-2 text-[24px] font-bold leading-6 sm:hidden md:hidden">
                {t("Delivery_title")}
              </h2>
              <p className="mb-4 leading-6 text-[#808080] sm:hidden md:hidden">
                {t("Delivery_subtitle")}
              </p>
              <div className="grid w-full grid-cols-2 gap-4  sm:flex sm:flex-col-reverse sm:overflow-auto md:flex md:flex-col-reverse md:overflow-auto">
                <div className="col-span-1 sm:relative sm:w-full sm:px-3 sm:pt-9 md:relative md:w-full md:px-4 md:pt-10">
                  <h2 className="mb:block mb:mb-1 mb-2 hidden text-[24px] font-bold leading-6 sm:mb-1 sm:block sm:text-[20px] sm:font-semibold md:text-[20px] md:font-semibold">
                    Qabul qilib olish turini tanlang
                  </h2>
                  <p className="mb:block mb-4 hidden leading-6 text-[#808080] sm:block sm:leading-4 md:leading-4">
                    Real vaqt va joylashuvga mos menyuni ko'rish uchun
                  </p>
                  <div className="mb-5 flex items-center gap-3 sm:mb-4 md:mb-4">
                    <button
                      className={`w-[50%] transform rounded-[22px] px-6 py-[14px] text-center align-middle text-[16px] leading-4 duration-200 hover:text-[#51267d] active:scale-[0.95] ${deliver == 1 ? "bg-[#f1eff4] text-[#51267d]" : "bg-[#f6f4f2] text-[#5b6871]"}`}
                      onClick={() => {
                        setDeliver(1);
                      }}
                    >
                      {t("Delivery_list")}
                    </button>
                    <button
                      className={`w-[50%] transform rounded-[22px] px-6 py-[14px] text-center align-middle text-[16px] leading-4 duration-200 hover:text-[#51267d] active:scale-[0.95] ${deliver == 2 ? "bg-[#f1eff4] text-[#51267d]" : "bg-[#f6f4f2] text-[#5b6871]"}`}
                      onClick={() => {
                        setDeliver(2);
                      }}
                    >
                      {t("Delivery_map")}
                    </button>
                  </div>
                  {deliver === 1 && <Adress />}
                  {deliver === 2 && <Filial />}
                  <button
                    className="w-full transform rounded-[20px] bg-[#51267d] py-[10px] text-center align-middle font-medium leading-6 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95] disabled:bg-[#dde2e4] disabled:text-[#808080]"
                    onClick={setMapConfig}
                  >
                    {t("Delivery_btn")}
                  </button>
                  <span className="absolute right-1 top-1 z-20 sm:right-1 sm:top-1 md:right-1 md:top-1">
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault(), closeMod();
                      }}
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        data-testid="CloseIcon"
                      >
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </IconButton>
                  </span>
                </div>
                <div className="col-span-1 overflow-hidden rounded-xl sm:h-[45vh] sm:w-full sm:rounded-none md:h-[60vh] md:w-full md:rounded-none">
                  {deliver === 1 && (
                    <YMaps>
                      <Map
                        defaultState={{
                          center: [41.311158, 69.279737],
                          zoom: 11,
                          controls: [],
                        }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <SearchControl options={{ float: "right" }} />
                      </Map>
                    </YMaps>
                  )}
                  {deliver === 2 && (
                    <>
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ac1c80756e7fc35c8536dca83504c5a0b183565c021c48c15f5b8286b3267d6&amp;source=constructor"
                        width="100%"
                        height="100%"
                      ></iframe>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Delivery;
