import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <section className="mb-12 flex flex-col items-center justify-center">
        <div className="">
          <img
            src="https://maxway.uz/_next/image?url=%2Fimages%2Fnotfound.png&w=256&q=75"
            alt="pagr not found"
            className="box-border object-fill"
          />
        </div>
        <h1 className=" text-center text-[35px] font-bold leading-[42px]">
          <span className="headtitle text-[60px] font-bold leading-[72px]">
            404
          </span>
          <br />
          Page not found
        </h1>
        <p className="mb-4 text-[16px] leading-5">
          The resource requested could not be found in this server.
        </p>
        <NavLink to="/">
          <p className="w-[144px] transform rounded-[20px] bg-[#51267d] py-[10px] text-center align-middle font-medium leading-6 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95]">
            Go Back to Home
          </p>
        </NavLink>
      </section>
    </div>
  );
};

export default PageNotFound;
