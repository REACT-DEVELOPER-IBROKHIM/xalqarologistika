import React from "react";
import flag from "@assets/images/flag.png";

const DriverCardFront = ({ document, type }) => {
  const {
    name,
    surname,
    to,
    birthDate,
    from,
    id,
    signature,
    driverLicenceNumber,
  } = document;
  console.log(document);
  return (
    <div
      className={`w-[2480px] ${type !== "search" && "h-[3508px]"} flex justify-center mt-[10px]`}
    >
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-silk bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[48px] font-bold mt-[30px]">
          CERTIFICATE OF PROFESSIONAL COMPETENCE OF THE DRIVER
        </p>
        <p className="text-[45px] mt-[20px] font-semibold">
          DRIVER QUALIFICATION CARD
        </p>
        <div className="flex justify-between items-center mt-[50px] px-[60px]">
          <div className="text-[60px] w-[155px] h-[110px] bg-ornate bg-cover bg-no-repeat flex items-center justify-center">
            <p className="mt-[5px] text-blue-800 font-bold">UZ</p>
          </div>
          <img src={flag} alt="NT2022" className="w-[200px]" />
        </div>
        <div className="h-[560px] flex items-center mt-[60px] mx-[50px] gap-[40px]">
          <div className="h-full w-[370px] flex flex-col">
            <div className="w-[370px] h-[700px] flex-1 bg-white border-[2px] border-black"></div>
            <p className="text-[50px] mt-[30px]">8.C/CE</p>
          </div>
          <div className="h-full bg-blue  font-bold text-left text-[45px] flex flex-col flex-1 gap-[15px] mt-[-80px]">
            <p>1.{surname}</p>
            <p>2.{name}</p>
            <p>3.{birthDate}</p>
            <div className="flex gap-10">
              <p>4a.{from}</p>
              <p>4b.{to}</p>
            </div>
            <p>4c.LTD "NAMANGANTRANS 2022"</p>
            <div className="flex gap-10">
              <p>5a.{driverLicenceNumber}</p> <p>5b.{id}</p>
            </div>
            <div className="flex items-center gap-5 mt-[10px]">
              7.
              <div className="w-[300px] h-[100px] bg-white border-[2px] border-black">
                <img
                  width={"100%"}
                  height={"80%"}
                  src={signature}
                  alt=""
                  className="scale-[0.7]"
                />
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col items-end justify-end">
            <div className="bg-blue-500 text-white text-[35px] py-[20px] px-[40px] flex items-center justify-center rounded-ee-[30px] rounded-ss-[30px] mb-[500px]">
              NT2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCardFront;
