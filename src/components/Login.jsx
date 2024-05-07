import React, { useContext } from "react";
import { Box, Modal, Button, Fade } from "@mui/material";
import { UseAllContext } from "../App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "32%",
  bgcolor: "background.paper",
  boxShadow: "rgb(0 0 0 / 20%) 0px 11px 15px -7px",
  borderRadius: "12px",
  pt: 10,
  pb: 4,
};

const Login = () => {
  const { setOpen, open, handleOpen, handleClose } = useContext(UseAllContext);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="relaive">
              <h2 className="mb-2 text-center text-[32px] font-bold leading-[52px]">
                sign_in
              </h2>
              <p className="mb-8 text-center text-[18px] leading-7 text-[#808080]">
                sign_in_with_your_phone_number
              </p>
              <div className="mx-auto flex w-[85%] flex-col items-start gap-4">
                <p className="text-[16px]">phone number</p>
                <div className="flex w-full items-center rounded-xl border border-[#e5e9eb] px-3 py-[10px] focus:border-[black]">
                  <p className="text-[16px]">+998 </p>
                  <input
                    type="bymber"
                    pattern="[0-9]d{1,9}$"
                    maxLength={9}
                    required
                    className="w-full pb-[2px] pl-1 text-[16px] outline-none"
                  />
                </div>
                <button className="w-full transform rounded-[20px] bg-[#51267d] py-[10px] text-center align-middle font-medium leading-6 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95]">
                  send_code
                </button>
              </div>
              <button
                className="absolute right-2 top-4 z-20"
                onClick={(e) => {
                  e.preventDefault(), handleClose();
                }}
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
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
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
