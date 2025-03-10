import React from "react";
import QRCode from "react-qr-code";

const DriverCardBack = ({ document }) => {
  const { to, id } = document;

  return (
    <div className={`w-[2480px] h-[3498px] flex justify-center mt-[10px]`}>
      <div className="w-[1600px] h-[1000px] border-[6px] border-gray-400 mt-[10px] rounded-[50px] bg-silkBack bg-cover bg-no-repeat text-center px-[30px]">
        <p className="text-[45px] mt-[20px]">DRIVER QUALIFICATION CARD</p>
        <div className="flex justify-between p-[30px]">
          <div>
            <div className="text-[45px] text-left mt-[30px] flex flex-col gap-[15px]">
              <p>1.Номер сертификата</p>
              <p>2.Имя</p>
              <p>3.Фамилия</p>
              <p>4.Дата рождения</p>
              <p>5.Oтчество</p>
              <p>7.Категории транспортных средств</p>
              <p>8.Страна выдачи</p>
              <p>9.Организация-эмитент</p>
            </div>
            <QRCode
              className="mb-[20px] mt-[30px]"
              value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
            />
          </div>
          <div className="text-[45px]">
            <table className="border-2 border-black">
              <tr>
                <th className="px-[30px] border-2 border-black">Category <br /> Категории</th>
                <th className="px-[30px] border-2 border-black">Until <br /> До</th>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">C1</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">C</td>
                <td className="px-[30px] border-2 border-black">{to}</td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">D1</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">D</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">C1E</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">CE</td>
                <td className="px-[30px] border-2 border-black">{to}</td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">D1E</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">DE</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCardBack;
