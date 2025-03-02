import React from "react";

const AdrCertificateBack = ({ type }) => {
  return (
    <div
      className={`w-[2480px] ${type !== "search" && "h-[3508px]"} flex justify-center`}
    >
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-wave bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[60px] mt-[30px]">VALID FOR CLASS(ES) OR UN NOS.:</p>
        <p className="text-[45px] mt-[20px]">
          ДЕЙСТВИТЕЛЬНОВОТНОШЕНИИ ВЕЩЕСТВКЛАССА(ОВ) ИЛИ№ООН
        </p>
        <div className="font-bold">
          <div className="flex justify-between items-center  mt-[50px]">
            <div className="w-[50%] h-[100px] text-[60px] flex items-end justify-center">
              9. In tank
            </div>
            <div className="w-[50%] h-[100px] text-[60px] flex items-end justify-center">
              10. Other than in tank
            </div>
          </div>
          <div className="border-t-8 border-black w-full h-[700px] flex font-black text-[50px] text-left">
            <div className="w-[50%] h-full border-r-[3px] border-black px-[100px] flex flex-col gap-[10px] pt-[50px]">
              <p>2</p>
              <p>3</p>
              <p>4.1, 4.2, 4.3</p>
              <p>5.1, 5.2</p>
              <p>6.1, 6.2</p>
              <p>8</p>
              <p>9</p>
            </div>
            <div className="w-[50%] h-full border-l-[3px] border-black px-[100px] flex flex-col gap-[10px] pt-[50px]">
              <p>2</p>
              <p>3</p>
              <p>4.1, 4.2, 4.3</p>
              <p>5.1, 5.2</p>
              <p>6.1, 6.2</p>
              <p>8</p>
              <p>9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdrCertificateBack;
