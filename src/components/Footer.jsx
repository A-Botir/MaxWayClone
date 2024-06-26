import { Link, NavLink } from "react-router-dom";
import { UseAllContext } from "../App";
import { useContext } from "react";

const Footer = () => {
  const { t } = useContext(UseAllContext);

  return (
    <footer className="border-t border-[#eef0f2] bg-white py-8 sm:py-6 md:py-6">
      <div className="container">
        <div className="mb-10 flex items-center justify-between sm:mb-6 sm:flex-col sm:items-start sm:gap-y-4 md:mb-8 md:flex-col md:items-start md:gap-y-4">
          <NavLink to="/">
            <div className="max-h-13 max-w-13  sm:max-w-[38px]  md:max-h-[38px]">
              <img
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
                alt="site logo"
                className="w-full object-fill"
              />
            </div>
          </NavLink>
          <nav>
            <ul className="flex items-center gap-8 sm:flex-col sm:items-start sm:gap-4 md:flex-col md:items-start md:gap-5">
              <li>
                <NavLink to="/branches">
                  <p
                    className={`py-1 text-[18px] hover:text-[#51267d] sm:text-[16px]`}
                  >
                    {t("Head_nav2")}
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <p
                    className={`py-1 text-[18px] hover:text-[#51267d] sm:text-[16px]`}
                  >
                    {t("Head_nav3")}
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">
                  <p
                    className={`py-1 text-[18px] hover:text-[#51267d] sm:text-[16px]`}
                  >
                    {t("Head_nav3")}
                  </p>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="h-1 w-1"></div>
        </div>
        <div className="flex items-center justify-between  border-t border-[#eef0f2] pt-5 sm:pt-4 md:pt-3">
          <p className="text-[16px] text-[#808080] sm:text-[14px] md:text-[14px]">
            {t("copyright")}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="https://www.instagram.com/maxwayuz/" target="_blank">
              <svg
                className="svghover selection:MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InstagramIcon"
                fill="#808080"
                width={24}
                height={24}
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </Link>
            <Link to="https://www.facebook.com/maxway.uzb/" target="_blank">
              <svg
                className="svghover MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FacebookOutlinedIcon"
                fill="#808080"
                width={24}
                height={24}
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
              </svg>
            </Link>
            <Link to="https://www.youtube.com/@maxway2010" target="_blank">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv svghover"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="YouTubeIcon"
                fill="#808080"
                width={24}
                height={24}
              >
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
