import React from "react";
import burgerMenu from "../../public/images/icon-hamburger.svg";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-[16px] px-[24px] lg:pt-[22px] lg:pr-[41px] lg:pb-[27px] lg:pl-[32px] border-b border-solid border-[#ffffff71]">
      <h1
        className="text-2xl text-[#FFF] uppercase lg:cursor-pointer"
        onClick={() => navigate("/")}
      >
        Planets
      </h1>
      <img
        src={burgerMenu}
        onClick={() => navigate("/menu")}
        className="block lg:hidden"
      />
      <div className=" hidden lg:block lg:flex lg:gap-[33px] lg:text-[#FFF] lg:uppercase lg:cursor-pointer">
        {data.map((item) => {
          return (
            <div
              onClick={() => navigate(`/${item.name.toLowerCase()}`)}
              key={uuidv4()}
              className="lg:font-serif lg:text-[13px] lg:tracking-[1px]"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
