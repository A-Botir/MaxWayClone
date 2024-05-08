import { useContext, useState } from "react";
import { UseAllContext } from "../App";
import { NavLink, useLocation } from "react-router-dom";
import {
  IconButton,
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
} from "@mui/material";

const Menu = () => {
  const [language, setLanguage] = useState(10);
  const { toggleDrawer, setOpnmenu, opnmenu, handleOpen } =
    useContext(UseAllContext);
  const location = useLocation();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const renderValue = (selected) => {
    const languages = [
      {
        value: 10,
        imgSrc: "https://maxway.uz/images/uz.svg",
        label: "O'zbekcha",
      },
      {
        value: 21,
        imgSrc: "https://maxway.uz/images/ru.svg",
        label: "Русский",
      },
      {
        value: 22,
        imgSrc: "https://maxway.uz/images/en.svg",
        label: "English",
      },
    ];
    const selectedLanguage = languages.find((lang) => lang.value === selected);
    return (
      <div className="flex space-x-2">
        <img src={selectedLanguage.imgSrc} alt={selectedLanguage.label} />
        <p>{selectedLanguage.label}</p>
      </div>
    );
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ backgroundColor: "#f6f8f9" }}>
        <ListItem
          sx={{
            display: "flex",
            paddingLeft: "24px",
            paddingRight: "6px",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="text-[20px] font-semibold">Menu</h2>
          <IconButton
            color="inherit"
            onClick={() => setOpnmenu(false)}
            sx={{
              "&:hover": {
                backgroundColor: "#dde2e4",
              },
              borderRadius: "12px",
              padding: "8px",
            }}
          >
            <div className="">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseRoundedIcon"
                width={24}
                height={24}
              >
                <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
              </svg>
            </div>
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <List sx={{ pading: "16px" }}>
        <ListItem>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={language}
            onChange={handleChange}
            renderValue={renderValue}
            sx={{
              outline: "none",
              border: "none",
              width: "100%",
            }}
          >
            <MenuItem value={10}>
              <div className="flex items-center space-x-2">
                <img src="https://maxway.uz/images/uz.svg" alt="uzb" />
                <p>O'zbekcha</p>
              </div>
            </MenuItem>
            <MenuItem value={21}>
              <div className="flex items-center space-x-2">
                <img src="https://maxway.uz/images/ru.svg" alt="rus" />
                <p>Русский</p>
              </div>
            </MenuItem>
            <MenuItem value={22}>
              <div className="flex items-center space-x-2">
                <img src="https://maxway.uz/images/en.svg" alt="eng" />
                <p>English</p>
              </div>
            </MenuItem>
          </Select>
        </ListItem>
        <ListItem>
          <ListItemButton
            onClick={() => {
              setOpnmenu(false), handleOpen();
            }}
            sx={{
              paddingX: "16px",
              "&:hover": {
                backgroundColor: "#f6f8f9",
              },
              fontSize: "16px",
              color: "#51267d",
              fontWeight: "600",
              width: "100%",
              lineHeight: "40px",
              borderRadius: "12px",
            }}
          >
            Kirish
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={{
            borderTop: "1px solid #e5e9eb",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          <NavLink to="/" className="w-full">
            <div
              className={`flex h-11 w-full items-center justify-between rounded-xl px-4 hover:bg-[#f6f8f9] ${location.pathname === "/" ? "bg-[#f6f8f9]" : ""}`}
            >
              <p className="text-[16px]">Bosh sahifa</p>
              <svg
                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ${location.pathname === "/" ? "block" : "hidden"}`}
                focusable="false"
                aria-hidden="true"
                width={24}
                height={24}
                fill="#51267d"
                viewBox="0 0 24 24"
                data-testid="CheckRoundedIcon"
              >
                <path d="M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"></path>
              </svg>
            </div>
          </NavLink>
          <NavLink to="/branches" className="w-full">
            <div
              className={`flex h-11 w-full items-center justify-between rounded-xl px-4 hover:bg-[#f6f8f9] ${location.pathname === "/branches" ? "bg-[#f6f8f9]" : ""}`}
            >
              <p className="text-[16px]">Filiallar</p>
              <svg
                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ${location.pathname === "/branches" ? "block" : "hidden"}`}
                focusable="false"
                aria-hidden="true"
                width={24}
                height={24}
                fill="#51267d"
                viewBox="0 0 24 24"
                data-testid="CheckRoundedIcon"
              >
                <path d="M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"></path>
              </svg>
            </div>
          </NavLink>
          <NavLink to="/about" className="w-full">
            <div
              className={`flex h-11 w-full items-center justify-between rounded-xl px-4 hover:bg-[#f6f8f9] ${location.pathname === "/about" ? "bg-[#f6f8f9]" : ""}`}
            >
              <p className="text-[16px]">Biz haqimizda</p>
              <svg
                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ${location.pathname === "/about" ? "block" : "hidden"}`}
                focusable="false"
                aria-hidden="true"
                width={24}
                height={24}
                fill="#51267d"
                viewBox="0 0 24 24"
                data-testid="CheckRoundedIcon"
              >
                <path d="M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"></path>
              </svg>
            </div>
          </NavLink>
          <NavLink to="/contacts" className="w-full">
            <div
              className={`flex h-11 w-full items-center justify-between rounded-xl px-4 hover:bg-[#f6f8f9] ${location.pathname === "/contacts" ? "bg-[#f6f8f9]" : ""}`}
            >
              <p className="text-[16px]">Bog'lanish</p>
              <svg
                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ${location.pathname === "/contacts" ? "block" : "hidden"}`}
                focusable="false"
                aria-hidden="true"
                width={24}
                height={24}
                fill="#51267d"
                viewBox="0 0 24 24"
                data-testid="CheckRoundedIcon"
              >
                <path d="M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"></path>
              </svg>
            </div>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={opnmenu} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
