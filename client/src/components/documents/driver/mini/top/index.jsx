import React from "react";
import gerb from "@assets/images/gerb.png";

const MiniCertificateTop = ({ type, certType }) => {
  return (
    type !== "search" && (
      <div className="w-[2480px] h-[3508px]">
        <div className="w-[100%] h-[100%] flex">
          <div className="h-[1504px] w-full flex justify-end bg-[#fff8eb]">
            <div className="w-[50%] h-[1504px] text-center flex flex-col items-center">
              <img
                src={gerb}
                alt=""
                className="w-[300px] h-[300px] mt-[50px]"
              />
              <p className="text-[50px] mt-[80px]">O'ZBEKISTON RESPUBLIKASI</p>
              <p className="text-[50px] mt-[60px]">"NAMANGANTRANS 2022" MCHJ</p>
              <p className="text-[50px] mt-[300px]">
                {certType === "adr" && "ADR"} SERTIFIKAT
              </p>
              <p className="text-[50px] mt-[300px]">NAMANGAN</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MiniCertificateTop;
