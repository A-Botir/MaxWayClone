import React, { useContext, useState } from "react";
import { Box, Modal, Fade } from "@mui/material";
import { UseAllContext } from "../App";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps";
import Adress from "./Adress";
import Filial from "./Filial";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: "rgb(0 0 0 / 20%) 0px 11px 15px -7px",
  borderRadius: "16px",
  py: "30px",
  px: "25px",
  outline: "none",
};

const Delivery = () => {
  const { opnmod, setOpnmod } = useContext(UseAllContext);
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
            <div className="relaive">
              <h2 className="mb-2 text-[24px] font-bold leading-[24px]">
                Qabul qilib olish turini tanlang
              </h2>
              <p className="mb-4  leading-6 text-[#808080]">
                Real vaqt va joylashuvga mos menyuni ko'rish uchun
              </p>
              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1">
                <div className="col-span-1 sm:col-start-2 md:col-start-2">
                  <div className="mb-5 flex items-center gap-3 ">
                    <button
                      className={`flex-grow transform rounded-[22px] px-6 py-[14px] text-center align-middle text-[16px] leading-4 duration-200 hover:text-[#51267d] active:scale-[0.95] ${deliver == 1 ? "bg-[#f1eff4] text-[#51267d]" : "bg-[#f6f4f2] text-[#5b6871]"}`}
                      onClick={() => {
                        setDeliver(1);
                      }}
                    >
                      Yetkazib berish
                    </button>
                    <button
                      className={`flex-grow transform rounded-[22px] px-6 py-[14px] text-center align-middle text-[16px] leading-4 duration-200 hover:text-[#51267d] active:scale-[0.95] ${deliver == 2 ? "bg-[#f1eff4] text-[#51267d]" : "bg-[#f6f4f2] text-[#5b6871]"}`}
                      onClick={() => {
                        setDeliver(2);
                      }}
                    >
                      Olib ketish
                    </button>
                  </div>
                  {deliver === 1 && <Adress />}
                  {deliver === 2 && <Filial />}
                  <button
                    className="w-full transform rounded-[20px] bg-[#51267d] py-[10px] text-center align-middle font-medium leading-6 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95] disabled:bg-[#dde2e4] disabled:text-[#808080]"
                    onClick={setMapConfig}
                  >
                    Belgilash
                  </button>
                </div>
                <div className="col-span-1 overflow-hidden rounded-xl sm:col-start-1 md:col-start-1">
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
              <button
                className="absolute right-2 top-4 z-20"
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
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Delivery;
