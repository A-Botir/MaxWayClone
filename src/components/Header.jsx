import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Select, MenuItem, IconButton } from "@mui/material";
import { UseAllContext } from "../App";

const Header = () => {
  const location = useLocation();
  const { totalPrice, count, handleOpen, setOpnmod, toggleDrawer, t, i18n } =
    useContext(UseAllContext);
  const [language, setLanguage] = useState("uz");

  const openMod = () => setOpnmod(true);

  const renderValue = (selected) => {
    const languages = [
      {
        value: "uz",
        imgSrc: "https://maxway.uz/images/uz.svg",
        label: "O'zbekcha",
      },
      {
        value: "ru",
        imgSrc: "https://maxway.uz/images/ru.svg",
        label: "Русский",
      },
      {
        value: "en",
        imgSrc: "https://maxway.uz/images/en.svg",
        label: "English",
      },
    ];
    const selectedLanguage = languages.find((lang) => lang.value === selected);
    return (
      <div className="flex space-x-2">
        <img src={selectedLanguage.imgSrc} alt={selectedLanguage.label} />
      </div>
    );
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <header
        className={` ${location.pathname === "/" ? "" : "border-#0000000f top-0 z-30 border-b bg-white sm:fixed sm:w-full md:fixed md:w-full"}`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-10 sm:gap-1 md:gap-1">
            <span className="hidden sm:block md:block">
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f1eff4",
                  },
                  borderRadius: "12px",
                  padding: "8px",
                }}
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv hover:fill-[#51267d]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="MenuIcon"
                  width={24}
                  height={24}
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
              </IconButton>
            </span>
            <NavLink to="/">
              <div className="max-h-13 max-w-13  sm:max-w-[38px]  md:max-w-[38px]">
                <img
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
                  alt="site logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </NavLink>
            <nav className="sm:hidden md:hidden">
              <ul className="flex items-center gap-8">
                <li>
                  <NavLink to="/">
                    <p
                      className={`py-1 text-[16px] transition-all duration-200 hover:drop-shadow-item ${location.pathname === "/" ? "drop-shadow-item" : ""}`}
                    >
                      {t("Head_nav1")}
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/branches">
                    <p
                      className={`py-1 text-[16px] transition-all duration-200 hover:drop-shadow-item ${location.pathname === "/branches" ? "drop-shadow-item" : ""}`}
                    >
                      {t("Head_nav2")}
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <p
                      className={`py-1 text-[16px] transition-all duration-200 hover:drop-shadow-item ${location.pathname === "/about" ? "drop-shadow-item" : ""}`}
                    >
                      {t("Head_nav3")}
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">
                    <p
                      className={`py-1 text-[16px] transition-all duration-200 hover:drop-shadow-item ${location.pathname === "/contacts" ? "drop-shadow-item" : ""}`}
                    >
                      {t("Head_nav4")}
                    </p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <button
              className="flex items-center gap-2 sm:hidden md:hidden"
              onClick={openMod}
            >
              <div className="flex h-9 w-8 items-center justify-center rounded-[50%] bg-[#f1eff4]">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FmdGoodIcon"
                  fill="#51267d"
                  width={20}
                  height={20}
                >
                  <path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>
              </div>
              <div>
                <p className=" text-[13px]">{t("Head_delivery_title")}</p>
                <p className="text-[13px] text-[#51267d]">
                  {t("Head_delivery_location")}
                </p>
              </div>
            </button>
            <div className="flex items-center gap-3">
              <div className="sm:hidden md:hidden">
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={language}
                  onChange={changeLanguage}
                  autoWidth
                  renderValue={renderValue}
                  sx={{
                    backgroundColor: "#f1eff4",
                    outline: "none",
                  }}
                >
                  <MenuItem value="uz">
                    <div className="flex space-x-2">
                      <img src="https://maxway.uz/images/uz.svg" alt="uzb" />
                      <p>O'zbekcha</p>
                    </div>
                  </MenuItem>
                  <MenuItem value="ru">
                    <div className="flex space-x-2">
                      <img src="https://maxway.uz/images/ru.svg" alt="rus" />
                      <p>Русский</p>
                    </div>
                  </MenuItem>
                  <MenuItem value="en">
                    <div className="flex space-x-2">
                      <img src="https://maxway.uz/images/en.svg" alt="eng" />
                      <p>English</p>
                    </div>
                  </MenuItem>
                </Select>
              </div>
              <NavLink to="/cart">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#f1eff4]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1427_736)">
                        <path
                          d="M14.0625 15.1875C14.0625 15.41 13.9965 15.6275 13.8729 15.8125C13.7493 15.9975 13.5736 16.1417 13.368 16.2269C13.1625 16.312 12.9363 16.3343 12.718 16.2909C12.4998 16.2475 12.2993 16.1403 12.142 15.983C11.9847 15.8257 11.8775 15.6252 11.8341 15.407C11.7907 15.1887 11.813 14.9625 11.8981 14.757C11.9833 14.5514 12.1275 14.3757 12.3125 14.2521C12.4975 14.1285 12.715 14.0625 12.9375 14.0625C13.2359 14.0625 13.522 14.181 13.733 14.392C13.944 14.603 14.0625 14.8891 14.0625 15.1875ZM5.625 14.0625C5.4025 14.0625 5.18499 14.1285 4.99998 14.2521C4.81498 14.3757 4.67078 14.5514 4.58564 14.757C4.50049 14.9625 4.47821 15.1887 4.52162 15.407C4.56502 15.6252 4.67217 15.8257 4.8295 15.983C4.98684 16.1403 5.18729 16.2475 5.40552 16.2909C5.62375 16.3343 5.84995 16.312 6.05552 16.2269C6.26109 16.1417 6.43679 15.9975 6.5604 15.8125C6.68402 15.6275 6.75 15.41 6.75 15.1875C6.75 14.8891 6.63147 14.603 6.4205 14.392C6.20952 14.181 5.92337 14.0625 5.625 14.0625ZM16.0383 4.725C15.9855 4.65554 15.9175 4.59913 15.8395 4.56012C15.7615 4.52111 15.6755 4.50054 15.5883 4.5H3.39609L2.82656 2.50312C2.75827 2.26853 2.61591 2.06232 2.42074 1.91531C2.22558 1.7683 1.98809 1.68839 1.74375 1.6875H0.5625C0.413316 1.6875 0.270242 1.74676 0.164752 1.85225C0.0592632 1.95774 0 2.10082 0 2.25C0 2.39918 0.0592632 2.54226 0.164752 2.64775C0.270242 2.75324 0.413316 2.8125 0.5625 2.8125H1.74375L2.43281 5.21016V5.22422L4.28906 11.7141C4.39099 12.0663 4.6044 12.3759 4.89727 12.5965C5.19013 12.8171 5.54663 12.9367 5.91328 12.9375H12.6492C13.0159 12.9367 13.3724 12.8171 13.6652 12.5965C13.9581 12.3759 14.1715 12.0663 14.2734 11.7141L16.1297 5.21719C16.1535 5.13366 16.1576 5.04576 16.1418 4.96037C16.1259 4.87497 16.0905 4.79441 16.0383 4.725Z"
                          fill="#51267d"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1427_736">
                          <rect width="18" height="18" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="">
                    {totalPrice + count * 2000} {t("uz_currency")}
                  </p>
                </div>
              </NavLink>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#f1eff4] sm:hidden md:hidden"
                onClick={handleOpen}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.5C12.9663 10.5001 13.8954 10.8732 14.5933 11.5415C15.2913 12.2098 15.7043 13.1218 15.7463 14.0873L15.75 14.25V15C15.7501 15.3784 15.6072 15.7429 15.3499 16.0204C15.0926 16.2979 14.7399 16.4679 14.3625 16.4963L14.25 16.5H3.75C3.37157 16.5001 3.00708 16.3572 2.72959 16.0999C2.4521 15.8426 2.28213 15.4899 2.25375 15.1125L2.25 15V14.25C2.25006 13.2837 2.62316 12.3546 3.29149 11.6567C3.95983 10.9587 4.87181 10.5457 5.83725 10.5037L6 10.5H12ZM9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25C12.75 6.24456 12.3549 7.19839 11.6517 7.90165C10.9484 8.60491 9.99456 9 9 9C8.00544 9 7.05161 8.60491 6.34835 7.90165C5.64509 7.19839 5.25 6.24456 5.25 5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5Z"
                    fill="#51267d"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`container hidden py-2 ${location.pathname === "/" ? "sm:block md:block" : ""}`}
        >
          <button className="flex items-center gap-2" onClick={openMod}>
            <div className="flex h-9 w-8 items-center justify-center rounded-[50%] bg-[#f1eff4]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FmdGoodIcon"
                fill="#51267d"
                width={20}
                height={20}
              >
                <path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <p className=" text-[13px]">{t("Head_delivery_title")}</p>
              <p className="text-[13px] text-[#51267d]">
                {t("Head_delivery_location")}
              </p>
            </div>
          </button>
        </div>
      </header>
      {location.pathname !== "/" && (
        <div className="hidden h-[68px] w-full sm:block md:block"></div>
      )}
    </>
  );
};

export default Header;
