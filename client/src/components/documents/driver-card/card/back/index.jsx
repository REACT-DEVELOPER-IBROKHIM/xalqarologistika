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
          <div className="text-[45px]">
            <table className="border-2 border-black">
              <tr>
                <th className="px-[30px] border-2 border-black">
                  8. Category <br /> Категории
                </th>
                <th className="px-[30px] border-2 border-black">
                  9. Until <br /> До
                </th>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">C1</td>
                <td className="px-[30px] border-2 border-black"></td>
              </tr>
              <tr>
                <td className="px-[30px] border-2 border-black">C</td>
                <td className="px-[30px] border-2 border-black">95.{to}</td>
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
                <td className="px-[30px] border-2 border-black">95.{to}</td>
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
