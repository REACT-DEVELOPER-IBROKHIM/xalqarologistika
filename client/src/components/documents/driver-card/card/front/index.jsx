import React from "react";
import flag from "@assets/images/flag.png";

const DriverCardFront = ({ document }) => {
  const { name, surname, to, birthDate, id, signature, driverLicenceNumber } =
    document;
  console.log(document);
  return (
    <div className={`w-[2480px] h-[3508px] flex justify-center mt-[10px]`}>
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-silk bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[48px] font-bold mt-[30px]">
          CERTIFICATE OF PROFESSIONAL COMPETENCE OF THE DRIVER
        </p>
        <p className="text-[45px] mt-[20px]">DRIVER QUALIFICATION CARD</p>
        <div className="flex justify-between items-center mt-[50px] px-[60px]">
          <div className="text-[60px] py-[15px] px-[40px] border-[6px] border-black rounded-[100%]">
            UZ
          </div>
          <p className="text-[50px] font-bold ml-[-200px]">1.Nr. {id}</p>
          <img src={flag} alt="NT2022" className="w-[200px]" />
        </div>
        <div className="h-[570px] flex items-center mt-[60px] gap-[40px]">
          <div className="h-full aspect-[3/4] bg-white border-[2px] border-black"></div>
          <div className="h-full bg-blue  font-bold text-left text-[43px] flex flex-col flex-1 gap-[10px]">
            <p>2.{name}</p>
            <p>3.{surname}</p>
            <p>4.{birthDate}</p>
            <p>5.{driverLicenceNumber}</p>
            <p>7.C/CE</p>
            <p>8.REPUBLIC OF UZBEKISTAN</p>
            <p>9.NAMANGANTRANS 2022</p>
            <p>Until (date) {to}</p>
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
          <div className="h-full flex flex-col items-end justify-end">
            <div className="bg-blue-500 text-white text-[35px] py-[20px] px-[40px] flex items-center justify-center rounded-ee-[30px] rounded-ss-[30px] mb-[500px] mr-[55px]">
              NT2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCardFront;
