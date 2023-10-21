import React from "react";
import arrow from "../../public/images/arrow.svg";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <>
      {data.map((item) => {
        return (
          <div className="pl-[24px] pr-[32px] mt-[20px]" key={uuidv4()}>
            <div
              className="flex items-center justify-between pb-[20px] border-b border-solid border-[#ffffff61]"
              onClick={() => navigate(`/${item.name.toLowerCase()}`)}
            >
              <div className="flex items-center gap-[25px]">
                <div
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <p className="text-[#FFF] text-base font-bold uppercase ">
                  {item.name}
                </p>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Menu;
