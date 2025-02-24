import gerb from "@assets/images/gerb.png";
import summarizeName from "@helpers/summarizeName";
import QRCode from "react-qr-code";

const DriverCertificateBottom = ({ document, type }) => {
  const { id, name, surname, middlename, from, to } = document;

  return (
    type !== "search" && (
      <div className="w-[2480px] h-[3508px] bg-[#fff8eb] p-[30px]">
        <div className="w-full h-full border-[12px] border-indigo-500">
          <div className="w-[100%] h-[100%] px-[60px] flex">
            <div className="w-[20%] h-full relative">
              <img
                src={gerb}
                className="absolute top-[200px] left-[-5%] aspect-square min-w-[110%]"
                alt=""
              />
              <div className="flex h-full">
                <div className="w-[30%] h-full bg-blue-500"></div>
                <div className="w-[2%] h-full bg-red-500"></div>
                <div className="w-[30%] h-full bg-white"></div>
                <div className="w-[2%] h-full bg-red-500"></div>
                <div className="w-[30%] h-full bg-green-500"></div>
              </div>
              <div className="w-[110%] aspect-square bg-white absolute bottom-[200px] left-[-5%] shadow-2xl border-2 border-indigo-500 p-[40px]">
                <QRCode
                  value={`https://www.xalqarologistika.uz/check-certificates/${
                    id
                  }`}
                  size={200}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
            </div>
            <div className="w-[80%] h-full">
              <div className="p-[40px] text-center h-full">
                <p className="font-bold mt-[360px] mb-[60px] text-[120px]">
                  Республика Узбекистан
                </p>
                <p className="text-[#6969fd] font-bold uppercase text-[180px] mt-[110px] mb-[100px]">
                  СЕРТИФИКАТ
                </p>
                <p className="text-[55px] mb-[100px]">
                  О ПРОФЕССИОНАЛЬНОЙ КОМПЕТЕНТНОСТИ ПО НАЦИОНАЛЬНЫМ И
                  МЕЖДУНАРОДНЫМ АВТОМОБИЛЬНЫМ ПЕРЕВОЗКАМ ГРУЗОВ
                </p>
                <p className="text-[60px] font-bold mb-[100px]">
                  {"MO №" + id}
                </p>
                <p className="text-[60px] border-b-[1px] border-black font-bold">
                  {summarizeName(name, surname, middlename)}
                </p>
                <p className="text-[35px] mt-[20px]">
                  (Фамилия, Имя, Отчество)
                </p>
                <div className="flex justify-between text-[50px] font-bold mt-[100px] px-[60px]">
                  <p>выдан: {from}</p>
                  <p>до:{to}</p>
                </div>
                <p className="text-[65px] border-b-[1px] font-medium border-black mt-[120px]">
                  НАМАНГАНТРАНС 2022 МЧЖ
                </p>
                <p className="text-[35px] mt-[20px]">
                  (Название учебного заведения)
                </p>
                <p className="text-[65px] border-b-[1px] font-medium border-black mt-[120px]">
                  36 часов
                </p>
                <p className="text-[35px] mt-[20px]">
                  (Продолжительность курса обучения)
                </p>
                <p className="text-[50px] text-left mt-[60px]">
                  улучшил свои навыки
                </p>

                <p className="text-[50px] text-left mt-[180px]">
                  Директор: Б.Мухиддинов
                </p>
                <div className="flex justify-between">
                  <p className="text-[50px] text-left mt-[40px]">
                    число: {from}
                  </p>
                  <p className="text-[50px] text-right mt-[40px]">
                    Регистрационный номер:{"№" + id}
                  </p>
                </div>
                <div className="text-[50px] mt-[530px]">
                  <span className="font-bold">
                    {summarizeName(name, surname, middlename)}
                  </span>{" "}
                  прошел обучение по данному курсу, основанному национальным
                  требованиям, и успешно сдал экзамены.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DriverCertificateBottom;
