import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseAllContext } from "../App";
import { useContext } from "react";

const Address = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { t } = useContext(UseAllContext);

  const apiKey = "9a5d4e94-707e-4a89-aa42-c7613a82f237";

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    axios
      .get(
        `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&text=${searchQuery}&type=geo&lang=ru_RU`,
      )
      .then((response) => {
        setSearchResults(response.data.features);
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="">
        <input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-[#e5e9eb] px-4 py-[14px] outline-none focus:border-[#51267d]"
          placeholder={t("Delivery_placeholder1")}
        />
        <ul className="mb-3 mt-2 h-[260px] overflow-auto rounded-xl bg-white p-3 shadow-[0_4px_10px_#5982e729]">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <li
                key={result.properties.name}
                className="h-[60px] rounded-xl border-b-[#c4c4c429] p-3 hover:bg-[#80808028] "
              >
                <h5 className="text-[16px]">{result.properties.name}</h5>
                <p className="text-[12px] text-[#808080]">
                  {result.properties.description}
                </p>
              </li>
            ))
          ) : (
            <li className="h-[60px] rounded-xl border-b-[#c4c4c429] p-3 hover:bg-[#80808028] ">
              <h5 className="text-[16px]"></h5>
              <p className="text-[12px] text-[#808080]"></p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Address;
