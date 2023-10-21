import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import chevron from "../../public/images/chevron.svg";

function Planet() {
  const params = useParams();
  const [viewType, setViewType] = useState("overview");
  const planetData = data.find(
    (item) => item.name.toLowerCase() == params.planet
  );
  return (
    <div>
      <div className="flex text-[#ffffff94]  px-[24px] py-[20px] justify-between uppercase font-serif border-b border-solid border-{#ffffff7a} text-[9px] tracking-[2px] lg:hidden">
        <div className="relative">
          <p
            onClick={() => setViewType("overview")}
            style={{ color: viewType === "overview" ? "#FFF" : null }}
          >
            Overview
          </p>
          <div
            className="w-[80px] h-[4px] absolute left-[-10px] bottom-[-20px] hidden"
            style={{
              display: viewType === "overview" ? "block" : null,
              backgroundColor: planetData.color,
            }}
          ></div>
        </div>
        <div className="relative">
          <p
            onClick={() => setViewType("structure")}
            style={{ color: viewType === "structure" ? "#FFF" : null }}
          >
            Structure
          </p>
          <div
            className="w-[80px] h-[4px] absolute left-[-10px] bottom-[-20px] hidden"
            style={{
              display: viewType === "structure" ? "block" : null,
              backgroundColor: planetData.color,
            }}
          ></div>
        </div>
        <div className="relative">
          <p
            onClick={() => setViewType("surface")}
            style={{ color: viewType === "surface" ? "#FFF" : null }}
          >
            Surface
          </p>
          <div
            className="w-[80px] h-[4px] absolute left-[-10px] bottom-[-20px] hidden"
            style={{
              display: viewType === "surface" ? "block" : null,
              backgroundColor: planetData.color,
            }}
          ></div>
        </div>
      </div>
      <div className="px-[24px] pb-[47px]">
        <div className="lg:flex lg:items-center lg:justify-center lg:gap-[300px] lg:mt-[125px]">
          <div className="flex justify-center mt-[95px] mb-[98px]">
            {viewType === "overview" ? (
              <img
                src={planetData.images.planet}
                alt="planet"
                className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]"
              />
            ) : viewType === "structure" ? (
              <img src={planetData.images.internal} alt="planet" />
            ) : (
              <img src={planetData.images.geology} alt="planet" />
            )}
          </div>
          <div className="flex flex-col items-center mb-[28px] lg:w-[350px] lg:items-baseline">
            <h1 className="text-[#FFF] text-[40px] lg:text-[80px] uppercase mb-[16px]">
              {planetData.name}
            </h1>
            <p className="text-[#ffffff94] text-[11px] lg:text-[14px] font-normal text-center lg:text-left font-serif leading-[22px] mb-[32px]">
              {planetData.overview.content}
            </p>
            <p className="text-[12px] text-[#ffffff94] font-serif flex items-center gap-[5px]">
              Source:{" "}
              <span>
                <a
                  href={planetData.overview.source}
                  className="font-bold"
                  style={{ textDecoration: "underline" }}
                >
                  Wikipedia
                </a>
              </span>
              <span>
                <img src={chevron} alt="chevron" />
              </span>
            </p>
            <div className=" hidden lg:flex lg:flex-col lg:gap-[16px] lg:text-[#FFF] lg:font-serif lg:uppercase lg:tracking-[2px] lg:mt-[39px] lg:cursor-pointer">
              <div
                className="border border-solid border-[#ffffff83] py-[12px] px-[28px] w-[350px] hover:bg-[#d8d8d867]"
                onClick={() => setViewType("overview")}
                style={{
                  backgroundColor:
                    viewType === "overview" ? planetData.color : null,
                }}
              >
                <span>01</span> Overview
              </div>
              <div
                className="border border-solid border-[#ffffff83] py-[12px] px-[28px] w-[350px] hover:bg-[#d8d8d867]"
                onClick={() => setViewType("structure")}
                style={{
                  backgroundColor:
                    viewType === "structure" ? planetData.color : null,
                }}
              >
                <span>02</span> Internal Structure
              </div>
              <div
                className="border border-solid border-[#ffffff83] py-[12px] px-[28px] w-[350px] hover:bg-[#d8d8d867]"
                onClick={() => setViewType("surface")}
                style={{
                  backgroundColor:
                    viewType === "surface" ? planetData.color : null,
                }}
              >
                <span>03</span> Surface Geology
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:gap-[30px] lg:mt-[87px] lg:px-[165px] ">
          <div className="flex items-center justify-between pt-[9px] pb-[13px] px-[24px] border border-solid border-[#ffffff52] mb-[8px] lg:flex-col lg:w-[255px] lg:h-[128px] lg:items-baseline lg:pt-[20px] lg:px-[23px] lg:pb-[27px]">
            <span className="font-serif text-[10px] lg:text-[12px] text-[#ffffff] opacity-50  uppercase tracking-[1px]">
              Rotation Time
            </span>
            <span className="text-[20px] lg:text-[40px] text-[#FFF] uppercase">
              {planetData.rotation}
            </span>
          </div>
          <div className="flex items-center justify-between  pt-[9px] pb-[13px] px-[24px] border border-solid border-[#ffffff52] mb-[8px] lg:flex-col lg:w-[255px] lg:h-[128px] lg:items-baseline lg:pt-[20px] lg:px-[23px] lg:pb-[27px]">
            <span className="font-serif text-[10px] lg:text-[12px] text-[#ffffff] opacity-50  uppercase tracking-[1px]">
              Revolution Time
            </span>
            <span className="text-[20px] lg:text-[40px] text-[#FFF] uppercase">
              {planetData.revolution}
            </span>
          </div>
          <div className="flex items-center justify-between  pt-[9px] pb-[13px] px-[24px] border border-solid border-[#ffffff52] mb-[8px] lg:flex-col lg:w-[255px] lg:h-[128px] lg:items-baseline lg:pt-[20px] lg:px-[23px] lg:pb-[27px] ">
            <span className="font-serif text-[10px] lg:text-[12px] text-[#ffffff] opacity-50  uppercase tracking-[1px]">
              Radius
            </span>
            <span className="text-[20px] lg:text-[40px] text-[#FFF] uppercase">
              {planetData.radius}
            </span>
          </div>
          <div className="flex items-center justify-between  pt-[9px] pb-[13px] px-[24px] border border-solid border-[#ffffff52] mb-[8px] lg:flex-col lg:w-[255px] lg:h-[128px] lg:items-baseline lg:pt-[20px] lg:px-[23px] lg:pb-[27px]">
            <span className="font-serif text-[10px] lg:text-[12px] text-[#ffffff] opacity-50  uppercase tracking-[1px]">
              Average Temp.
            </span>
            <span className="text-[20px] lg:text-[40px] text-[#FFF] uppercase">
              {planetData.temperature}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
