import QRCode from "react-qr-code";

const AdrCertificateFront = ({ document, type }) => {
  const { name, surname, to, birthDate, id, signature } = document;
  return (
    <div
      className={`w-[2480px] ${type !== "search" && "h-[3508px]"} flex justify-center`}
    >
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-wave bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[70px] mt-[30px]">ADR-DRIVER TRAINING CERTIFICATE</p>
        <p className="text-[50px] mt-[20px]">
          СВИДЕТЕЛЬСТВО О ПОДГОТОВКЕ ВОДИТЕЛЯ ПО ДОПОГ
        </p>
        <div className="flex justify-between items-center mt-[30px] px-[60px]">
          <div className="text-[60px] py-[15px] px-[40px] border-[6px] border-black rounded-[100%]">
            UZ
          </div>
          <p className="text-[50px] font-bold ml-[-200px]">1.Nr. {id}</p>
          <div className="bg-blue-500 text-white text-[50px] py-[25px] px-[40px] flex items-center justify-center rounded-ee-[30px] rounded-ss-[30px]">
            NT2022
          </div>
        </div>
        <div className="h-[600px] flex justify-between items-center mt-[30px] gap-[30px]">
          <div className="h-full aspect-[3/4] bg-white border-[2px] border-black"></div>
          <div className="h-full bg-blue  font-bold text-left text-[50px] flex flex-col gap-[20px] flex-1">
            <p>2.{name}</p>
            <p>3.{surname}</p>
            <p>4.{birthDate}</p>
            <p>5.REPUBLIC OF UZBEKISTAN</p>
            <p>6.NAMANGANTRANS 2022</p>
            <p>Until (date) {to}</p>
            <div className="w-[400px] h-[130px] bg-white border-[2px] border-black">
              <img
                width={"100%"}
                height={"80%"}
                src={signature}
                alt=""
                className="scale-75"
              />
            </div>
          </div>
          <div className="h-full flex items-end justify-start">
            <QRCode
              className="mb-[30px]"
              value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdrCertificateFront;
