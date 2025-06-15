import React from "react";
import QRCode from "react-qr-code";

const DriverCardBack = ({ document, type }) => {
  const { to, id } = document;

  return (
    <div
      className={`w-[2480px] ${type !== "search" && "h-[3508px]"} flex justify-center mt-[10px]`}
    >
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-silkBack bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[45px] mt-[70px] font-semibold">
          DRIVER QUALIFICATION CARD
        </p>
        <div className="flex py-[30px] pr-[30px]">
          <div>
            <div className="text-[30px] font-semibold text-left mt-[30px] flex flex-col gap-[10px]">
              <p>1.Фамилия</p>
              <p>2.Имя</p>
              <p>3.Дата рождения</p>
              <p>4a.Дата выдачи</p>
              <p>4b.Срок действия</p>
              <p>4c.Наименование органа,выдавшего сертификат</p>
              <p>5a.Номер водительского удостоверения</p>
              <p>5b.Идентификационный номер</p>
              <p>6.Подпись</p>
              <p>7.Фото</p>
              <p>8.Категории транспортных средств</p>
              <p>9.Срок действия соответствующей категории</p>
              <p>10.Вносится отметка сертификатя СРС</p>
            </div>
          </div>
          <div className="text-[45px] ml-[230px]">
            <table className="border-2 border-black">
              <tr>
                <th className="px-[30px] border-2 border-black">8.</th>
                <th className="px-[30px] border-2 border-black">9.</th>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  C1
                </td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">C</td>
                <td className="px-[30px] border-2 border-black">95.{to}</td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  D1
                </td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">D</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  C1E
                </td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  CE
                </td>
                <td className="px-[30px] border-2 border-black">95.{to}</td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  D1E
                </td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black font-bold">
                  DE
                </td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
            </table>
            <div className="flex justify-end text-[40px] gap-[10px] mb-[20px] mt-[30px]">
              10.
              <QRCode
                value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCardBack;
