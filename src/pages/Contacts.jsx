import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="container">
      <section className="py-8 sm:min-h-[52vh] md:min-h-[65vh]">
        <h2 className="mb-8 text-[32px] font-semibold leading-10 sm:mb-6 sm:text-[24px] sm:leading-8 md:mb-6 md:text-[24px] md:leading-8">
          Bog'lanish
        </h2>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-1">
          <div className="col-span-1 rounded-xl bg-[#96b1c2] py-8 pl-8 pr-3 sm:p-4 md:p-4">
            <div className="h-[100px] w-[100px] rounded-[10px] bg-white p-2 sm:hidden md:hidden ">
              <svg
                viewBox="0 0 29 29"
                xmlns="http://www.w3.org/2000/svg"
                height="256"
                width="256"
                className="h-auto w-full max-w-full"
              >
                <path
                  d="       M 7 0 l 1 0 0 1 -1 0 Z M 8 0 l 1 0 0 1 -1 0 Z    M 12 0 l 1 0 0 1 -1 0 Z    M 16 0 l 1 0 0 1 -1 0 Z  M 18 0 l 1 0 0 1 -1 0 Z M 19 0 l 1 0 0 1 -1 0 Z M 20 0 l 1 0 0 1 -1 0 Z M 21 0 l 1 0 0 1 -1 0 Z         M 1 1 l 1 0 0 1 -1 0 Z M 2 1 l 1 0 0 1 -1 0 Z M 3 1 l 1 0 0 1 -1 0 Z M 4 1 l 1 0 0 1 -1 0 Z M 5 1 l 1 0 0 1 -1 0 Z  M 7 1 l 1 0 0 1 -1 0 Z M 8 1 l 1 0 0 1 -1 0 Z M 9 1 l 1 0 0 1 -1 0 Z M 10 1 l 1 0 0 1 -1 0 Z   M 13 1 l 1 0 0 1 -1 0 Z M 14 1 l 1 0 0 1 -1 0 Z  M 16 1 l 1 0 0 1 -1 0 Z M 17 1 l 1 0 0 1 -1 0 Z M 18 1 l 1 0 0 1 -1 0 Z M 19 1 l 1 0 0 1 -1 0 Z  M 21 1 l 1 0 0 1 -1 0 Z  M 23 1 l 1 0 0 1 -1 0 Z M 24 1 l 1 0 0 1 -1 0 Z M 25 1 l 1 0 0 1 -1 0 Z M 26 1 l 1 0 0 1 -1 0 Z M 27 1 l 1 0 0 1 -1 0 Z   M 1 2 l 1 0 0 1 -1 0 Z    M 5 2 l 1 0 0 1 -1 0 Z  M 7 2 l 1 0 0 1 -1 0 Z M 8 2 l 1 0 0 1 -1 0 Z    M 12 2 l 1 0 0 1 -1 0 Z M 13 2 l 1 0 0 1 -1 0 Z  M 15 2 l 1 0 0 1 -1 0 Z  M 17 2 l 1 0 0 1 -1 0 Z   M 20 2 l 1 0 0 1 -1 0 Z M 21 2 l 1 0 0 1 -1 0 Z  M 23 2 l 1 0 0 1 -1 0 Z    M 27 2 l 1 0 0 1 -1 0 Z   M 1 3 l 1 0 0 1 -1 0 Z    M 5 3 l 1 0 0 1 -1 0 Z  M 7 3 l 1 0 0 1 -1 0 Z  M 9 3 l 1 0 0 1 -1 0 Z   M 12 3 l 1 0 0 1 -1 0 Z M 13 3 l 1 0 0 1 -1 0 Z   M 16 3 l 1 0 0 1 -1 0 Z  M 18 3 l 1 0 0 1 -1 0 Z M 19 3 l 1 0 0 1 -1 0 Z M 20 3 l 1 0 0 1 -1 0 Z M 21 3 l 1 0 0 1 -1 0 Z  M 23 3 l 1 0 0 1 -1 0 Z    M 27 3 l 1 0 0 1 -1 0 Z   M 1 4 l 1 0 0 1 -1 0 Z    M 5 4 l 1 0 0 1 -1 0 Z  M 7 4 l 1 0 0 1 -1 0 Z  M 9 4 l 1 0 0 1 -1 0 Z  M 11 4 l 1 0 0 1 -1 0 Z     M 16 4 l 1 0 0 1 -1 0 Z M 17 4 l 1 0 0 1 -1 0 Z    M 21 4 l 1 0 0 1 -1 0 Z  M 23 4 l 1 0 0 1 -1 0 Z    M 27 4 l 1 0 0 1 -1 0 Z   M 1 5 l 1 0 0 1 -1 0 Z M 2 5 l 1 0 0 1 -1 0 Z M 3 5 l 1 0 0 1 -1 0 Z M 4 5 l 1 0 0 1 -1 0 Z M 5 5 l 1 0 0 1 -1 0 Z  M 7 5 l 1 0 0 1 -1 0 Z M 8 5 l 1 0 0 1 -1 0 Z   M 11 5 l 1 0 0 1 -1 0 Z M 12 5 l 1 0 0 1 -1 0 Z   M 15 5 l 1 0 0 1 -1 0 Z  M 17 5 l 1 0 0 1 -1 0 Z M 18 5 l 1 0 0 1 -1 0 Z M 19 5 l 1 0 0 1 -1 0 Z  M 21 5 l 1 0 0 1 -1 0 Z  M 23 5 l 1 0 0 1 -1 0 Z M 24 5 l 1 0 0 1 -1 0 Z M 25 5 l 1 0 0 1 -1 0 Z M 26 5 l 1 0 0 1 -1 0 Z M 27 5 l 1 0 0 1 -1 0 Z         M 7 6 l 1 0 0 1 -1 0 Z  M 9 6 l 1 0 0 1 -1 0 Z  M 11 6 l 1 0 0 1 -1 0 Z  M 13 6 l 1 0 0 1 -1 0 Z  M 15 6 l 1 0 0 1 -1 0 Z  M 17 6 l 1 0 0 1 -1 0 Z  M 19 6 l 1 0 0 1 -1 0 Z  M 21 6 l 1 0 0 1 -1 0 Z        M 0 7 l 1 0 0 1 -1 0 Z M 1 7 l 1 0 0 1 -1 0 Z M 2 7 l 1 0 0 1 -1 0 Z M 3 7 l 1 0 0 1 -1 0 Z M 4 7 l 1 0 0 1 -1 0 Z M 5 7 l 1 0 0 1 -1 0 Z M 6 7 l 1 0 0 1 -1 0 Z M 7 7 l 1 0 0 1 -1 0 Z M 8 7 l 1 0 0 1 -1 0 Z  M 10 7 l 1 0 0 1 -1 0 Z M 11 7 l 1 0 0 1 -1 0 Z   M 14 7 l 1 0 0 1 -1 0 Z M 15 7 l 1 0 0 1 -1 0 Z M 16 7 l 1 0 0 1 -1 0 Z M 17 7 l 1 0 0 1 -1 0 Z M 18 7 l 1 0 0 1 -1 0 Z M 19 7 l 1 0 0 1 -1 0 Z M 20 7 l 1 0 0 1 -1 0 Z M 21 7 l 1 0 0 1 -1 0 Z M 22 7 l 1 0 0 1 -1 0 Z M 23 7 l 1 0 0 1 -1 0 Z M 24 7 l 1 0 0 1 -1 0 Z M 25 7 l 1 0 0 1 -1 0 Z M 26 7 l 1 0 0 1 -1 0 Z M 27 7 l 1 0 0 1 -1 0 Z M 28 7 l 1 0 0 1 -1 0 Z   M 2 8 l 1 0 0 1 -1 0 Z M 3 8 l 1 0 0 1 -1 0 Z M 4 8 l 1 0 0 1 -1 0 Z    M 8 8 l 1 0 0 1 -1 0 Z   M 11 8 l 1 0 0 1 -1 0 Z  M 13 8 l 1 0 0 1 -1 0 Z   M 16 8 l 1 0 0 1 -1 0 Z  M 18 8 l 1 0 0 1 -1 0 Z M 19 8 l 1 0 0 1 -1 0 Z M 20 8 l 1 0 0 1 -1 0 Z M 21 8 l 1 0 0 1 -1 0 Z M 22 8 l 1 0 0 1 -1 0 Z M 23 8 l 1 0 0 1 -1 0 Z   M 26 8 l 1 0 0 1 -1 0 Z M 27 8 l 1 0 0 1 -1 0 Z M 28 8 l 1 0 0 1 -1 0 Z M 0 9 l 1 0 0 1 -1 0 Z M 1 9 l 1 0 0 1 -1 0 Z     M 6 9 l 1 0 0 1 -1 0 Z M 7 9 l 1 0 0 1 -1 0 Z  M 9 9 l 1 0 0 1 -1 0 Z  M 11 9 l 1 0 0 1 -1 0 Z M 12 9 l 1 0 0 1 -1 0 Z M 13 9 l 1 0 0 1 -1 0 Z  M 15 9 l 1 0 0 1 -1 0 Z M 16 9 l 1 0 0 1 -1 0 Z M 17 9 l 1 0 0 1 -1 0 Z M 18 9 l 1 0 0 1 -1 0 Z  M 20 9 l 1 0 0 1 -1 0 Z M 21 9 l 1 0 0 1 -1 0 Z M 22 9 l 1 0 0 1 -1 0 Z M 23 9 l 1 0 0 1 -1 0 Z  M 25 9 l 1 0 0 1 -1 0 Z   M 28 9 l 1 0 0 1 -1 0 Z  M 1 10 l 1 0 0 1 -1 0 Z M 2 10 l 1 0 0 1 -1 0 Z      M 8 10 l 1 0 0 1 -1 0 Z  M 10 10 l 1 0 0 1 -1 0 Z   M 13 10 l 1 0 0 1 -1 0 Z M 14 10 l 1 0 0 1 -1 0 Z M 15 10 l 1 0 0 1 -1 0 Z M 16 10 l 1 0 0 1 -1 0 Z   M 19 10 l 1 0 0 1 -1 0 Z  M 21 10 l 1 0 0 1 -1 0 Z    M 25 10 l 1 0 0 1 -1 0 Z M 26 10 l 1 0 0 1 -1 0 Z M 27 10 l 1 0 0 1 -1 0 Z M 28 10 l 1 0 0 1 -1 0 Z M 0 11 l 1 0 0 1 -1 0 Z M 1 11 l 1 0 0 1 -1 0 Z  M 3 11 l 1 0 0 1 -1 0 Z M 4 11 l 1 0 0 1 -1 0 Z  M 6 11 l 1 0 0 1 -1 0 Z M 7 11 l 1 0 0 1 -1 0 Z  M 9 11 l 1 0 0 1 -1 0 Z   M 12 11 l 1 0 0 1 -1 0 Z M 13 11 l 1 0 0 1 -1 0 Z    M 17 11 l 1 0 0 1 -1 0 Z  M 19 11 l 1 0 0 1 -1 0 Z       M 26 11 l 1 0 0 1 -1 0 Z M 27 11 l 1 0 0 1 -1 0 Z M 28 11 l 1 0 0 1 -1 0 Z  M 1 12 l 1 0 0 1 -1 0 Z  M 3 12 l 1 0 0 1 -1 0 Z  M 5 12 l 1 0 0 1 -1 0 Z   M 8 12 l 1 0 0 1 -1 0 Z   M 11 12 l 1 0 0 1 -1 0 Z M 12 12 l 1 0 0 1 -1 0 Z   M 15 12 l 1 0 0 1 -1 0 Z  M 17 12 l 1 0 0 1 -1 0 Z M 18 12 l 1 0 0 1 -1 0 Z M 19 12 l 1 0 0 1 -1 0 Z  M 21 12 l 1 0 0 1 -1 0 Z   M 24 12 l 1 0 0 1 -1 0 Z M 25 12 l 1 0 0 1 -1 0 Z M 26 12 l 1 0 0 1 -1 0 Z M 27 12 l 1 0 0 1 -1 0 Z    M 2 13 l 1 0 0 1 -1 0 Z   M 5 13 l 1 0 0 1 -1 0 Z M 6 13 l 1 0 0 1 -1 0 Z     M 11 13 l 1 0 0 1 -1 0 Z    M 15 13 l 1 0 0 1 -1 0 Z M 16 13 l 1 0 0 1 -1 0 Z M 17 13 l 1 0 0 1 -1 0 Z    M 21 13 l 1 0 0 1 -1 0 Z    M 25 13 l 1 0 0 1 -1 0 Z M 26 13 l 1 0 0 1 -1 0 Z    M 1 14 l 1 0 0 1 -1 0 Z   M 4 14 l 1 0 0 1 -1 0 Z M 5 14 l 1 0 0 1 -1 0 Z  M 7 14 l 1 0 0 1 -1 0 Z  M 9 14 l 1 0 0 1 -1 0 Z M 10 14 l 1 0 0 1 -1 0 Z M 11 14 l 1 0 0 1 -1 0 Z M 12 14 l 1 0 0 1 -1 0 Z    M 16 14 l 1 0 0 1 -1 0 Z  M 18 14 l 1 0 0 1 -1 0 Z M 19 14 l 1 0 0 1 -1 0 Z  M 21 14 l 1 0 0 1 -1 0 Z      M 27 14 l 1 0 0 1 -1 0 Z M 28 14 l 1 0 0 1 -1 0 Z      M 5 15 l 1 0 0 1 -1 0 Z M 6 15 l 1 0 0 1 -1 0 Z M 7 15 l 1 0 0 1 -1 0 Z   M 10 15 l 1 0 0 1 -1 0 Z M 11 15 l 1 0 0 1 -1 0 Z    M 15 15 l 1 0 0 1 -1 0 Z M 16 15 l 1 0 0 1 -1 0 Z M 17 15 l 1 0 0 1 -1 0 Z  M 19 15 l 1 0 0 1 -1 0 Z     M 24 15 l 1 0 0 1 -1 0 Z M 25 15 l 1 0 0 1 -1 0 Z  M 27 15 l 1 0 0 1 -1 0 Z   M 1 16 l 1 0 0 1 -1 0 Z      M 7 16 l 1 0 0 1 -1 0 Z   M 10 16 l 1 0 0 1 -1 0 Z M 11 16 l 1 0 0 1 -1 0 Z  M 13 16 l 1 0 0 1 -1 0 Z     M 18 16 l 1 0 0 1 -1 0 Z   M 21 16 l 1 0 0 1 -1 0 Z M 22 16 l 1 0 0 1 -1 0 Z M 23 16 l 1 0 0 1 -1 0 Z M 24 16 l 1 0 0 1 -1 0 Z   M 27 16 l 1 0 0 1 -1 0 Z M 28 16 l 1 0 0 1 -1 0 Z  M 1 17 l 1 0 0 1 -1 0 Z M 2 17 l 1 0 0 1 -1 0 Z M 3 17 l 1 0 0 1 -1 0 Z M 4 17 l 1 0 0 1 -1 0 Z  M 6 17 l 1 0 0 1 -1 0 Z M 7 17 l 1 0 0 1 -1 0 Z M 8 17 l 1 0 0 1 -1 0 Z   M 11 17 l 1 0 0 1 -1 0 Z M 12 17 l 1 0 0 1 -1 0 Z M 13 17 l 1 0 0 1 -1 0 Z M 14 17 l 1 0 0 1 -1 0 Z       M 21 17 l 1 0 0 1 -1 0 Z    M 25 17 l 1 0 0 1 -1 0 Z      M 2 18 l 1 0 0 1 -1 0 Z M 3 18 l 1 0 0 1 -1 0 Z M 4 18 l 1 0 0 1 -1 0 Z M 5 18 l 1 0 0 1 -1 0 Z      M 11 18 l 1 0 0 1 -1 0 Z     M 16 18 l 1 0 0 1 -1 0 Z M 17 18 l 1 0 0 1 -1 0 Z M 18 18 l 1 0 0 1 -1 0 Z  M 20 18 l 1 0 0 1 -1 0 Z    M 24 18 l 1 0 0 1 -1 0 Z  M 26 18 l 1 0 0 1 -1 0 Z M 27 18 l 1 0 0 1 -1 0 Z   M 1 19 l 1 0 0 1 -1 0 Z   M 4 19 l 1 0 0 1 -1 0 Z  M 6 19 l 1 0 0 1 -1 0 Z M 7 19 l 1 0 0 1 -1 0 Z  M 9 19 l 1 0 0 1 -1 0 Z   M 12 19 l 1 0 0 1 -1 0 Z M 13 19 l 1 0 0 1 -1 0 Z    M 17 19 l 1 0 0 1 -1 0 Z M 18 19 l 1 0 0 1 -1 0 Z M 19 19 l 1 0 0 1 -1 0 Z M 20 19 l 1 0 0 1 -1 0 Z  M 22 19 l 1 0 0 1 -1 0 Z  M 24 19 l 1 0 0 1 -1 0 Z M 25 19 l 1 0 0 1 -1 0 Z M 26 19 l 1 0 0 1 -1 0 Z M 27 19 l 1 0 0 1 -1 0 Z M 28 19 l 1 0 0 1 -1 0 Z  M 1 20 l 1 0 0 1 -1 0 Z   M 4 20 l 1 0 0 1 -1 0 Z M 5 20 l 1 0 0 1 -1 0 Z  M 7 20 l 1 0 0 1 -1 0 Z M 8 20 l 1 0 0 1 -1 0 Z M 9 20 l 1 0 0 1 -1 0 Z   M 12 20 l 1 0 0 1 -1 0 Z M 13 20 l 1 0 0 1 -1 0 Z M 14 20 l 1 0 0 1 -1 0 Z M 15 20 l 1 0 0 1 -1 0 Z M 16 20 l 1 0 0 1 -1 0 Z  M 18 20 l 1 0 0 1 -1 0 Z M 19 20 l 1 0 0 1 -1 0 Z      M 25 20 l 1 0 0 1 -1 0 Z    M 0 21 l 1 0 0 1 -1 0 Z M 1 21 l 1 0 0 1 -1 0 Z M 2 21 l 1 0 0 1 -1 0 Z M 3 21 l 1 0 0 1 -1 0 Z M 4 21 l 1 0 0 1 -1 0 Z M 5 21 l 1 0 0 1 -1 0 Z M 6 21 l 1 0 0 1 -1 0 Z M 7 21 l 1 0 0 1 -1 0 Z   M 10 21 l 1 0 0 1 -1 0 Z M 11 21 l 1 0 0 1 -1 0 Z   M 14 21 l 1 0 0 1 -1 0 Z  M 16 21 l 1 0 0 1 -1 0 Z   M 19 21 l 1 0 0 1 -1 0 Z  M 21 21 l 1 0 0 1 -1 0 Z M 22 21 l 1 0 0 1 -1 0 Z M 23 21 l 1 0 0 1 -1 0 Z   M 26 21 l 1 0 0 1 -1 0 Z M 27 21 l 1 0 0 1 -1 0 Z M 28 21 l 1 0 0 1 -1 0 Z        M 7 22 l 1 0 0 1 -1 0 Z  M 9 22 l 1 0 0 1 -1 0 Z  M 11 22 l 1 0 0 1 -1 0 Z M 12 22 l 1 0 0 1 -1 0 Z    M 16 22 l 1 0 0 1 -1 0 Z  M 18 22 l 1 0 0 1 -1 0 Z   M 21 22 l 1 0 0 1 -1 0 Z  M 23 22 l 1 0 0 1 -1 0 Z    M 27 22 l 1 0 0 1 -1 0 Z M 28 22 l 1 0 0 1 -1 0 Z  M 1 23 l 1 0 0 1 -1 0 Z M 2 23 l 1 0 0 1 -1 0 Z M 3 23 l 1 0 0 1 -1 0 Z M 4 23 l 1 0 0 1 -1 0 Z M 5 23 l 1 0 0 1 -1 0 Z  M 7 23 l 1 0 0 1 -1 0 Z   M 10 23 l 1 0 0 1 -1 0 Z M 11 23 l 1 0 0 1 -1 0 Z   M 14 23 l 1 0 0 1 -1 0 Z  M 16 23 l 1 0 0 1 -1 0 Z M 17 23 l 1 0 0 1 -1 0 Z M 18 23 l 1 0 0 1 -1 0 Z   M 21 23 l 1 0 0 1 -1 0 Z M 22 23 l 1 0 0 1 -1 0 Z M 23 23 l 1 0 0 1 -1 0 Z  M 25 23 l 1 0 0 1 -1 0 Z M 26 23 l 1 0 0 1 -1 0 Z  M 28 23 l 1 0 0 1 -1 0 Z  M 1 24 l 1 0 0 1 -1 0 Z    M 5 24 l 1 0 0 1 -1 0 Z  M 7 24 l 1 0 0 1 -1 0 Z M 8 24 l 1 0 0 1 -1 0 Z  M 10 24 l 1 0 0 1 -1 0 Z    M 14 24 l 1 0 0 1 -1 0 Z   M 17 24 l 1 0 0 1 -1 0 Z M 18 24 l 1 0 0 1 -1 0 Z        M 26 24 l 1 0 0 1 -1 0 Z    M 1 25 l 1 0 0 1 -1 0 Z    M 5 25 l 1 0 0 1 -1 0 Z  M 7 25 l 1 0 0 1 -1 0 Z M 8 25 l 1 0 0 1 -1 0 Z M 9 25 l 1 0 0 1 -1 0 Z M 10 25 l 1 0 0 1 -1 0 Z M 11 25 l 1 0 0 1 -1 0 Z M 12 25 l 1 0 0 1 -1 0 Z M 13 25 l 1 0 0 1 -1 0 Z M 14 25 l 1 0 0 1 -1 0 Z   M 17 25 l 1 0 0 1 -1 0 Z     M 22 25 l 1 0 0 1 -1 0 Z M 23 25 l 1 0 0 1 -1 0 Z M 24 25 l 1 0 0 1 -1 0 Z   M 27 25 l 1 0 0 1 -1 0 Z   M 1 26 l 1 0 0 1 -1 0 Z    M 5 26 l 1 0 0 1 -1 0 Z  M 7 26 l 1 0 0 1 -1 0 Z M 8 26 l 1 0 0 1 -1 0 Z M 9 26 l 1 0 0 1 -1 0 Z    M 13 26 l 1 0 0 1 -1 0 Z M 14 26 l 1 0 0 1 -1 0 Z   M 17 26 l 1 0 0 1 -1 0 Z M 18 26 l 1 0 0 1 -1 0 Z  M 20 26 l 1 0 0 1 -1 0 Z M 21 26 l 1 0 0 1 -1 0 Z  M 23 26 l 1 0 0 1 -1 0 Z     M 28 26 l 1 0 0 1 -1 0 Z  M 1 27 l 1 0 0 1 -1 0 Z M 2 27 l 1 0 0 1 -1 0 Z M 3 27 l 1 0 0 1 -1 0 Z M 4 27 l 1 0 0 1 -1 0 Z M 5 27 l 1 0 0 1 -1 0 Z  M 7 27 l 1 0 0 1 -1 0 Z  M 9 27 l 1 0 0 1 -1 0 Z M 10 27 l 1 0 0 1 -1 0 Z  M 12 27 l 1 0 0 1 -1 0 Z M 13 27 l 1 0 0 1 -1 0 Z M 14 27 l 1 0 0 1 -1 0 Z  M 16 27 l 1 0 0 1 -1 0 Z M 17 27 l 1 0 0 1 -1 0 Z   M 20 27 l 1 0 0 1 -1 0 Z M 21 27 l 1 0 0 1 -1 0 Z M 22 27 l 1 0 0 1 -1 0 Z M 23 27 l 1 0 0 1 -1 0 Z    M 27 27 l 1 0 0 1 -1 0 Z         M 7 28 l 1 0 0 1 -1 0 Z   M 10 28 l 1 0 0 1 -1 0 Z  M 12 28 l 1 0 0 1 -1 0 Z M 13 28 l 1 0 0 1 -1 0 Z M 14 28 l 1 0 0 1 -1 0 Z M 15 28 l 1 0 0 1 -1 0 Z  M 17 28 l 1 0 0 1 -1 0 Z M 18 28 l 1 0 0 1 -1 0 Z  M 20 28 l 1 0 0 1 -1 0 Z  M 22 28 l 1 0 0 1 -1 0 Z     M 27 28 l 1 0 0 1 -1 0 Z M 28 28 l 1 0 0 1 -1 0 Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z M 2 0 l 1 0 0 1 -1 0 Z M 3 0 l 1 0 0 1 -1 0 Z M 4 0 l 1 0 0 1 -1 0 Z M 5 0 l 1 0 0 1 -1 0 Z M 6 0 l 1 0 0 1 -1 0 Z   M 9 0 l 1 0 0 1 -1 0 Z M 10 0 l 1 0 0 1 -1 0 Z M 11 0 l 1 0 0 1 -1 0 Z  M 13 0 l 1 0 0 1 -1 0 Z M 14 0 l 1 0 0 1 -1 0 Z M 15 0 l 1 0 0 1 -1 0 Z  M 17 0 l 1 0 0 1 -1 0 Z     M 22 0 l 1 0 0 1 -1 0 Z M 23 0 l 1 0 0 1 -1 0 Z M 24 0 l 1 0 0 1 -1 0 Z M 25 0 l 1 0 0 1 -1 0 Z M 26 0 l 1 0 0 1 -1 0 Z M 27 0 l 1 0 0 1 -1 0 Z M 28 0 l 1 0 0 1 -1 0 Z M 0 1 l 1 0 0 1 -1 0 Z      M 6 1 l 1 0 0 1 -1 0 Z     M 11 1 l 1 0 0 1 -1 0 Z M 12 1 l 1 0 0 1 -1 0 Z   M 15 1 l 1 0 0 1 -1 0 Z     M 20 1 l 1 0 0 1 -1 0 Z  M 22 1 l 1 0 0 1 -1 0 Z      M 28 1 l 1 0 0 1 -1 0 Z M 0 2 l 1 0 0 1 -1 0 Z  M 2 2 l 1 0 0 1 -1 0 Z M 3 2 l 1 0 0 1 -1 0 Z M 4 2 l 1 0 0 1 -1 0 Z  M 6 2 l 1 0 0 1 -1 0 Z   M 9 2 l 1 0 0 1 -1 0 Z M 10 2 l 1 0 0 1 -1 0 Z M 11 2 l 1 0 0 1 -1 0 Z   M 14 2 l 1 0 0 1 -1 0 Z  M 16 2 l 1 0 0 1 -1 0 Z  M 18 2 l 1 0 0 1 -1 0 Z M 19 2 l 1 0 0 1 -1 0 Z   M 22 2 l 1 0 0 1 -1 0 Z  M 24 2 l 1 0 0 1 -1 0 Z M 25 2 l 1 0 0 1 -1 0 Z M 26 2 l 1 0 0 1 -1 0 Z  M 28 2 l 1 0 0 1 -1 0 Z M 0 3 l 1 0 0 1 -1 0 Z  M 2 3 l 1 0 0 1 -1 0 Z M 3 3 l 1 0 0 1 -1 0 Z M 4 3 l 1 0 0 1 -1 0 Z  M 6 3 l 1 0 0 1 -1 0 Z  M 8 3 l 1 0 0 1 -1 0 Z  M 10 3 l 1 0 0 1 -1 0 Z M 11 3 l 1 0 0 1 -1 0 Z   M 14 3 l 1 0 0 1 -1 0 Z M 15 3 l 1 0 0 1 -1 0 Z  M 17 3 l 1 0 0 1 -1 0 Z     M 22 3 l 1 0 0 1 -1 0 Z  M 24 3 l 1 0 0 1 -1 0 Z M 25 3 l 1 0 0 1 -1 0 Z M 26 3 l 1 0 0 1 -1 0 Z  M 28 3 l 1 0 0 1 -1 0 Z M 0 4 l 1 0 0 1 -1 0 Z  M 2 4 l 1 0 0 1 -1 0 Z M 3 4 l 1 0 0 1 -1 0 Z M 4 4 l 1 0 0 1 -1 0 Z  M 6 4 l 1 0 0 1 -1 0 Z  M 8 4 l 1 0 0 1 -1 0 Z  M 10 4 l 1 0 0 1 -1 0 Z  M 12 4 l 1 0 0 1 -1 0 Z M 13 4 l 1 0 0 1 -1 0 Z M 14 4 l 1 0 0 1 -1 0 Z M 15 4 l 1 0 0 1 -1 0 Z   M 18 4 l 1 0 0 1 -1 0 Z M 19 4 l 1 0 0 1 -1 0 Z M 20 4 l 1 0 0 1 -1 0 Z  M 22 4 l 1 0 0 1 -1 0 Z  M 24 4 l 1 0 0 1 -1 0 Z M 25 4 l 1 0 0 1 -1 0 Z M 26 4 l 1 0 0 1 -1 0 Z  M 28 4 l 1 0 0 1 -1 0 Z M 0 5 l 1 0 0 1 -1 0 Z      M 6 5 l 1 0 0 1 -1 0 Z   M 9 5 l 1 0 0 1 -1 0 Z M 10 5 l 1 0 0 1 -1 0 Z   M 13 5 l 1 0 0 1 -1 0 Z M 14 5 l 1 0 0 1 -1 0 Z  M 16 5 l 1 0 0 1 -1 0 Z    M 20 5 l 1 0 0 1 -1 0 Z  M 22 5 l 1 0 0 1 -1 0 Z      M 28 5 l 1 0 0 1 -1 0 Z M 0 6 l 1 0 0 1 -1 0 Z M 1 6 l 1 0 0 1 -1 0 Z M 2 6 l 1 0 0 1 -1 0 Z M 3 6 l 1 0 0 1 -1 0 Z M 4 6 l 1 0 0 1 -1 0 Z M 5 6 l 1 0 0 1 -1 0 Z M 6 6 l 1 0 0 1 -1 0 Z  M 8 6 l 1 0 0 1 -1 0 Z  M 10 6 l 1 0 0 1 -1 0 Z  M 12 6 l 1 0 0 1 -1 0 Z  M 14 6 l 1 0 0 1 -1 0 Z  M 16 6 l 1 0 0 1 -1 0 Z  M 18 6 l 1 0 0 1 -1 0 Z  M 20 6 l 1 0 0 1 -1 0 Z  M 22 6 l 1 0 0 1 -1 0 Z M 23 6 l 1 0 0 1 -1 0 Z M 24 6 l 1 0 0 1 -1 0 Z M 25 6 l 1 0 0 1 -1 0 Z M 26 6 l 1 0 0 1 -1 0 Z M 27 6 l 1 0 0 1 -1 0 Z M 28 6 l 1 0 0 1 -1 0 Z          M 9 7 l 1 0 0 1 -1 0 Z   M 12 7 l 1 0 0 1 -1 0 Z M 13 7 l 1 0 0 1 -1 0 Z                M 0 8 l 1 0 0 1 -1 0 Z M 1 8 l 1 0 0 1 -1 0 Z    M 5 8 l 1 0 0 1 -1 0 Z M 6 8 l 1 0 0 1 -1 0 Z M 7 8 l 1 0 0 1 -1 0 Z  M 9 8 l 1 0 0 1 -1 0 Z M 10 8 l 1 0 0 1 -1 0 Z  M 12 8 l 1 0 0 1 -1 0 Z  M 14 8 l 1 0 0 1 -1 0 Z M 15 8 l 1 0 0 1 -1 0 Z  M 17 8 l 1 0 0 1 -1 0 Z       M 24 8 l 1 0 0 1 -1 0 Z M 25 8 l 1 0 0 1 -1 0 Z      M 2 9 l 1 0 0 1 -1 0 Z M 3 9 l 1 0 0 1 -1 0 Z M 4 9 l 1 0 0 1 -1 0 Z M 5 9 l 1 0 0 1 -1 0 Z   M 8 9 l 1 0 0 1 -1 0 Z  M 10 9 l 1 0 0 1 -1 0 Z    M 14 9 l 1 0 0 1 -1 0 Z     M 19 9 l 1 0 0 1 -1 0 Z     M 24 9 l 1 0 0 1 -1 0 Z  M 26 9 l 1 0 0 1 -1 0 Z M 27 9 l 1 0 0 1 -1 0 Z  M 0 10 l 1 0 0 1 -1 0 Z   M 3 10 l 1 0 0 1 -1 0 Z M 4 10 l 1 0 0 1 -1 0 Z M 5 10 l 1 0 0 1 -1 0 Z M 6 10 l 1 0 0 1 -1 0 Z M 7 10 l 1 0 0 1 -1 0 Z  M 9 10 l 1 0 0 1 -1 0 Z  M 11 10 l 1 0 0 1 -1 0 Z M 12 10 l 1 0 0 1 -1 0 Z     M 17 10 l 1 0 0 1 -1 0 Z M 18 10 l 1 0 0 1 -1 0 Z  M 20 10 l 1 0 0 1 -1 0 Z  M 22 10 l 1 0 0 1 -1 0 Z M 23 10 l 1 0 0 1 -1 0 Z M 24 10 l 1 0 0 1 -1 0 Z       M 2 11 l 1 0 0 1 -1 0 Z   M 5 11 l 1 0 0 1 -1 0 Z   M 8 11 l 1 0 0 1 -1 0 Z  M 10 11 l 1 0 0 1 -1 0 Z M 11 11 l 1 0 0 1 -1 0 Z   M 14 11 l 1 0 0 1 -1 0 Z M 15 11 l 1 0 0 1 -1 0 Z M 16 11 l 1 0 0 1 -1 0 Z  M 18 11 l 1 0 0 1 -1 0 Z  M 20 11 l 1 0 0 1 -1 0 Z M 21 11 l 1 0 0 1 -1 0 Z M 22 11 l 1 0 0 1 -1 0 Z M 23 11 l 1 0 0 1 -1 0 Z M 24 11 l 1 0 0 1 -1 0 Z M 25 11 l 1 0 0 1 -1 0 Z    M 0 12 l 1 0 0 1 -1 0 Z  M 2 12 l 1 0 0 1 -1 0 Z  M 4 12 l 1 0 0 1 -1 0 Z  M 6 12 l 1 0 0 1 -1 0 Z M 7 12 l 1 0 0 1 -1 0 Z  M 9 12 l 1 0 0 1 -1 0 Z M 10 12 l 1 0 0 1 -1 0 Z   M 13 12 l 1 0 0 1 -1 0 Z M 14 12 l 1 0 0 1 -1 0 Z  M 16 12 l 1 0 0 1 -1 0 Z    M 20 12 l 1 0 0 1 -1 0 Z  M 22 12 l 1 0 0 1 -1 0 Z M 23 12 l 1 0 0 1 -1 0 Z     M 28 12 l 1 0 0 1 -1 0 Z M 0 13 l 1 0 0 1 -1 0 Z M 1 13 l 1 0 0 1 -1 0 Z  M 3 13 l 1 0 0 1 -1 0 Z M 4 13 l 1 0 0 1 -1 0 Z   M 7 13 l 1 0 0 1 -1 0 Z M 8 13 l 1 0 0 1 -1 0 Z M 9 13 l 1 0 0 1 -1 0 Z M 10 13 l 1 0 0 1 -1 0 Z  M 12 13 l 1 0 0 1 -1 0 Z M 13 13 l 1 0 0 1 -1 0 Z M 14 13 l 1 0 0 1 -1 0 Z    M 18 13 l 1 0 0 1 -1 0 Z M 19 13 l 1 0 0 1 -1 0 Z M 20 13 l 1 0 0 1 -1 0 Z  M 22 13 l 1 0 0 1 -1 0 Z M 23 13 l 1 0 0 1 -1 0 Z M 24 13 l 1 0 0 1 -1 0 Z   M 27 13 l 1 0 0 1 -1 0 Z M 28 13 l 1 0 0 1 -1 0 Z M 0 14 l 1 0 0 1 -1 0 Z  M 2 14 l 1 0 0 1 -1 0 Z M 3 14 l 1 0 0 1 -1 0 Z   M 6 14 l 1 0 0 1 -1 0 Z  M 8 14 l 1 0 0 1 -1 0 Z     M 13 14 l 1 0 0 1 -1 0 Z M 14 14 l 1 0 0 1 -1 0 Z M 15 14 l 1 0 0 1 -1 0 Z  M 17 14 l 1 0 0 1 -1 0 Z   M 20 14 l 1 0 0 1 -1 0 Z  M 22 14 l 1 0 0 1 -1 0 Z M 23 14 l 1 0 0 1 -1 0 Z M 24 14 l 1 0 0 1 -1 0 Z M 25 14 l 1 0 0 1 -1 0 Z M 26 14 l 1 0 0 1 -1 0 Z   M 0 15 l 1 0 0 1 -1 0 Z M 1 15 l 1 0 0 1 -1 0 Z M 2 15 l 1 0 0 1 -1 0 Z M 3 15 l 1 0 0 1 -1 0 Z M 4 15 l 1 0 0 1 -1 0 Z    M 8 15 l 1 0 0 1 -1 0 Z M 9 15 l 1 0 0 1 -1 0 Z   M 12 15 l 1 0 0 1 -1 0 Z M 13 15 l 1 0 0 1 -1 0 Z M 14 15 l 1 0 0 1 -1 0 Z    M 18 15 l 1 0 0 1 -1 0 Z  M 20 15 l 1 0 0 1 -1 0 Z M 21 15 l 1 0 0 1 -1 0 Z M 22 15 l 1 0 0 1 -1 0 Z M 23 15 l 1 0 0 1 -1 0 Z   M 26 15 l 1 0 0 1 -1 0 Z  M 28 15 l 1 0 0 1 -1 0 Z M 0 16 l 1 0 0 1 -1 0 Z  M 2 16 l 1 0 0 1 -1 0 Z M 3 16 l 1 0 0 1 -1 0 Z M 4 16 l 1 0 0 1 -1 0 Z M 5 16 l 1 0 0 1 -1 0 Z M 6 16 l 1 0 0 1 -1 0 Z  M 8 16 l 1 0 0 1 -1 0 Z M 9 16 l 1 0 0 1 -1 0 Z   M 12 16 l 1 0 0 1 -1 0 Z  M 14 16 l 1 0 0 1 -1 0 Z M 15 16 l 1 0 0 1 -1 0 Z M 16 16 l 1 0 0 1 -1 0 Z M 17 16 l 1 0 0 1 -1 0 Z  M 19 16 l 1 0 0 1 -1 0 Z M 20 16 l 1 0 0 1 -1 0 Z     M 25 16 l 1 0 0 1 -1 0 Z M 26 16 l 1 0 0 1 -1 0 Z   M 0 17 l 1 0 0 1 -1 0 Z     M 5 17 l 1 0 0 1 -1 0 Z    M 9 17 l 1 0 0 1 -1 0 Z M 10 17 l 1 0 0 1 -1 0 Z     M 15 17 l 1 0 0 1 -1 0 Z M 16 17 l 1 0 0 1 -1 0 Z M 17 17 l 1 0 0 1 -1 0 Z M 18 17 l 1 0 0 1 -1 0 Z M 19 17 l 1 0 0 1 -1 0 Z M 20 17 l 1 0 0 1 -1 0 Z  M 22 17 l 1 0 0 1 -1 0 Z M 23 17 l 1 0 0 1 -1 0 Z M 24 17 l 1 0 0 1 -1 0 Z  M 26 17 l 1 0 0 1 -1 0 Z M 27 17 l 1 0 0 1 -1 0 Z M 28 17 l 1 0 0 1 -1 0 Z M 0 18 l 1 0 0 1 -1 0 Z M 1 18 l 1 0 0 1 -1 0 Z     M 6 18 l 1 0 0 1 -1 0 Z M 7 18 l 1 0 0 1 -1 0 Z M 8 18 l 1 0 0 1 -1 0 Z M 9 18 l 1 0 0 1 -1 0 Z M 10 18 l 1 0 0 1 -1 0 Z  M 12 18 l 1 0 0 1 -1 0 Z M 13 18 l 1 0 0 1 -1 0 Z M 14 18 l 1 0 0 1 -1 0 Z M 15 18 l 1 0 0 1 -1 0 Z    M 19 18 l 1 0 0 1 -1 0 Z  M 21 18 l 1 0 0 1 -1 0 Z M 22 18 l 1 0 0 1 -1 0 Z M 23 18 l 1 0 0 1 -1 0 Z  M 25 18 l 1 0 0 1 -1 0 Z   M 28 18 l 1 0 0 1 -1 0 Z M 0 19 l 1 0 0 1 -1 0 Z  M 2 19 l 1 0 0 1 -1 0 Z M 3 19 l 1 0 0 1 -1 0 Z  M 5 19 l 1 0 0 1 -1 0 Z   M 8 19 l 1 0 0 1 -1 0 Z  M 10 19 l 1 0 0 1 -1 0 Z M 11 19 l 1 0 0 1 -1 0 Z   M 14 19 l 1 0 0 1 -1 0 Z M 15 19 l 1 0 0 1 -1 0 Z M 16 19 l 1 0 0 1 -1 0 Z     M 21 19 l 1 0 0 1 -1 0 Z  M 23 19 l 1 0 0 1 -1 0 Z      M 0 20 l 1 0 0 1 -1 0 Z  M 2 20 l 1 0 0 1 -1 0 Z M 3 20 l 1 0 0 1 -1 0 Z   M 6 20 l 1 0 0 1 -1 0 Z    M 10 20 l 1 0 0 1 -1 0 Z M 11 20 l 1 0 0 1 -1 0 Z      M 17 20 l 1 0 0 1 -1 0 Z   M 20 20 l 1 0 0 1 -1 0 Z M 21 20 l 1 0 0 1 -1 0 Z M 22 20 l 1 0 0 1 -1 0 Z M 23 20 l 1 0 0 1 -1 0 Z M 24 20 l 1 0 0 1 -1 0 Z  M 26 20 l 1 0 0 1 -1 0 Z M 27 20 l 1 0 0 1 -1 0 Z M 28 20 l 1 0 0 1 -1 0 Z         M 8 21 l 1 0 0 1 -1 0 Z M 9 21 l 1 0 0 1 -1 0 Z   M 12 21 l 1 0 0 1 -1 0 Z M 13 21 l 1 0 0 1 -1 0 Z  M 15 21 l 1 0 0 1 -1 0 Z  M 17 21 l 1 0 0 1 -1 0 Z M 18 21 l 1 0 0 1 -1 0 Z  M 20 21 l 1 0 0 1 -1 0 Z    M 24 21 l 1 0 0 1 -1 0 Z M 25 21 l 1 0 0 1 -1 0 Z    M 0 22 l 1 0 0 1 -1 0 Z M 1 22 l 1 0 0 1 -1 0 Z M 2 22 l 1 0 0 1 -1 0 Z M 3 22 l 1 0 0 1 -1 0 Z M 4 22 l 1 0 0 1 -1 0 Z M 5 22 l 1 0 0 1 -1 0 Z M 6 22 l 1 0 0 1 -1 0 Z  M 8 22 l 1 0 0 1 -1 0 Z  M 10 22 l 1 0 0 1 -1 0 Z   M 13 22 l 1 0 0 1 -1 0 Z M 14 22 l 1 0 0 1 -1 0 Z M 15 22 l 1 0 0 1 -1 0 Z  M 17 22 l 1 0 0 1 -1 0 Z  M 19 22 l 1 0 0 1 -1 0 Z M 20 22 l 1 0 0 1 -1 0 Z  M 22 22 l 1 0 0 1 -1 0 Z  M 24 22 l 1 0 0 1 -1 0 Z M 25 22 l 1 0 0 1 -1 0 Z M 26 22 l 1 0 0 1 -1 0 Z   M 0 23 l 1 0 0 1 -1 0 Z      M 6 23 l 1 0 0 1 -1 0 Z  M 8 23 l 1 0 0 1 -1 0 Z M 9 23 l 1 0 0 1 -1 0 Z   M 12 23 l 1 0 0 1 -1 0 Z M 13 23 l 1 0 0 1 -1 0 Z  M 15 23 l 1 0 0 1 -1 0 Z    M 19 23 l 1 0 0 1 -1 0 Z M 20 23 l 1 0 0 1 -1 0 Z    M 24 23 l 1 0 0 1 -1 0 Z   M 27 23 l 1 0 0 1 -1 0 Z  M 0 24 l 1 0 0 1 -1 0 Z  M 2 24 l 1 0 0 1 -1 0 Z M 3 24 l 1 0 0 1 -1 0 Z M 4 24 l 1 0 0 1 -1 0 Z  M 6 24 l 1 0 0 1 -1 0 Z   M 9 24 l 1 0 0 1 -1 0 Z  M 11 24 l 1 0 0 1 -1 0 Z M 12 24 l 1 0 0 1 -1 0 Z M 13 24 l 1 0 0 1 -1 0 Z  M 15 24 l 1 0 0 1 -1 0 Z M 16 24 l 1 0 0 1 -1 0 Z   M 19 24 l 1 0 0 1 -1 0 Z M 20 24 l 1 0 0 1 -1 0 Z M 21 24 l 1 0 0 1 -1 0 Z M 22 24 l 1 0 0 1 -1 0 Z M 23 24 l 1 0 0 1 -1 0 Z M 24 24 l 1 0 0 1 -1 0 Z M 25 24 l 1 0 0 1 -1 0 Z  M 27 24 l 1 0 0 1 -1 0 Z M 28 24 l 1 0 0 1 -1 0 Z M 0 25 l 1 0 0 1 -1 0 Z  M 2 25 l 1 0 0 1 -1 0 Z M 3 25 l 1 0 0 1 -1 0 Z M 4 25 l 1 0 0 1 -1 0 Z  M 6 25 l 1 0 0 1 -1 0 Z         M 15 25 l 1 0 0 1 -1 0 Z M 16 25 l 1 0 0 1 -1 0 Z  M 18 25 l 1 0 0 1 -1 0 Z M 19 25 l 1 0 0 1 -1 0 Z M 20 25 l 1 0 0 1 -1 0 Z M 21 25 l 1 0 0 1 -1 0 Z    M 25 25 l 1 0 0 1 -1 0 Z M 26 25 l 1 0 0 1 -1 0 Z  M 28 25 l 1 0 0 1 -1 0 Z M 0 26 l 1 0 0 1 -1 0 Z  M 2 26 l 1 0 0 1 -1 0 Z M 3 26 l 1 0 0 1 -1 0 Z M 4 26 l 1 0 0 1 -1 0 Z  M 6 26 l 1 0 0 1 -1 0 Z    M 10 26 l 1 0 0 1 -1 0 Z M 11 26 l 1 0 0 1 -1 0 Z M 12 26 l 1 0 0 1 -1 0 Z   M 15 26 l 1 0 0 1 -1 0 Z M 16 26 l 1 0 0 1 -1 0 Z   M 19 26 l 1 0 0 1 -1 0 Z   M 22 26 l 1 0 0 1 -1 0 Z  M 24 26 l 1 0 0 1 -1 0 Z M 25 26 l 1 0 0 1 -1 0 Z M 26 26 l 1 0 0 1 -1 0 Z M 27 26 l 1 0 0 1 -1 0 Z  M 0 27 l 1 0 0 1 -1 0 Z      M 6 27 l 1 0 0 1 -1 0 Z  M 8 27 l 1 0 0 1 -1 0 Z   M 11 27 l 1 0 0 1 -1 0 Z    M 15 27 l 1 0 0 1 -1 0 Z   M 18 27 l 1 0 0 1 -1 0 Z M 19 27 l 1 0 0 1 -1 0 Z     M 24 27 l 1 0 0 1 -1 0 Z M 25 27 l 1 0 0 1 -1 0 Z M 26 27 l 1 0 0 1 -1 0 Z  M 28 27 l 1 0 0 1 -1 0 Z M 0 28 l 1 0 0 1 -1 0 Z M 1 28 l 1 0 0 1 -1 0 Z M 2 28 l 1 0 0 1 -1 0 Z M 3 28 l 1 0 0 1 -1 0 Z M 4 28 l 1 0 0 1 -1 0 Z M 5 28 l 1 0 0 1 -1 0 Z M 6 28 l 1 0 0 1 -1 0 Z  M 8 28 l 1 0 0 1 -1 0 Z M 9 28 l 1 0 0 1 -1 0 Z  M 11 28 l 1 0 0 1 -1 0 Z     M 16 28 l 1 0 0 1 -1 0 Z   M 19 28 l 1 0 0 1 -1 0 Z  M 21 28 l 1 0 0 1 -1 0 Z  M 23 28 l 1 0 0 1 -1 0 Z M 24 28 l 1 0 0 1 -1 0 Z M 25 28 l 1 0 0 1 -1 0 Z M 26 28 l 1 0 0 1 -1 0 Z  "
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p className="mb-4 mt-[18px] text-[17px] font-bold text-white sm:mt-[10px] md:mt-[10px]">
              Telegramda sharh <br />
              qoldiring yoki savol bering
            </p>
            <Link to="https://t.me/maxwaymasterfood_bot">
              <div className="flex items-center gap-1">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  data-testid="TelegramIcon"
                >
                  <path
                    d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                    fill="#ffffff"
                  ></path>
                </svg>
                <p className="text-[16px] leading-6 text-white hover:underline">
                  @maxwaymasterfood_bot
                </p>
              </div>
            </Link>
          </div>
        </div>
        <h4 className="mb-2 mt-[18px] text-[20px] font-bold leading-6">
          Yagona aloqa markazi
        </h4>
        <Link
          to="tel:998712005400"
          className="text-[16px] hover:underline sm:text-[14px] md:text-[14px]"
        >
          +998712005400
        </Link>
      </section>
    </div>
  );
};

export default Contacts;
