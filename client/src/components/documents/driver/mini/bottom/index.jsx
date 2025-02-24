import React from "react";
import summarizeName from "@helpers/summarizeName";
import QRCode from "react-qr-code";

const MiniCertificateBottom = ({ document, type, certType }) => {
  const { name, surname, middlename, from, to, id } = document;
  return (
    <div className="w-[2480px] h-[3508px]">
      <div className="w-[100%] h-[100%]">
        <div className="h-[1504px] w-full flex bg-[#fff8eb]">
          <div className="w-[50%] h-[1504px] text-center flex flex-col items-center px-[50px]">
            <p className="text-[60px] mt-[60px] font-bold">Сертификат</p>
            {certType === "adr" ? (
              <div className="w-full h-[150px] bg-sign bg-cover bg-no-repeat"></div>
            ) : (
              <p className="text-[45px] mt-[50px] font-bold">
                на осуществление международных автомобильных перевозов
              </p>
            )}
            <p className="text-[45px] mt-[50px] font-bold">MO №{id}</p>
            <p className="text-[45px] border-b-[1px] border-black mt-[40px] uppercase w-full">
              {summarizeName(name, surname)}
            </p>
            <p className="text-[45px] border-b-[1px] border-black mt-[60px] uppercase w-full">
              {certType === "adr" ? "АДР" : "36 часов"}
            </p>
            <p className="text-[40px] mt-[10px]">
              О том что он прошел курс обучения по специальной программе
            </p>
            <p className="text-[40px] mt-[30px] italic">
              {certType === "adr"
                ? '"Сертификат профессиональной компетентности в области Перевозка опасных грузов автомобильным транспортом (ADR) "'
                : '" Организация по осуществлению международных перевозок автомобильным транспортом "'}
            </p>
            <div className="flex w-full my-[30px] gap-[50px]">
              <div className="w-[40%]">
                <div className="w-[400px] aspect-square bg-white shadow-2xl border-2 p-[20px]">
                  <QRCode
                    value={`https://www.xalqarologistika.uz/check-certificates/${
                      id
                    }`}
                    size={200}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className="w-[60%]">
                <p className="text-[45px] mt-[70px]">
                  OOO "NAMANGANTRANS 2022"
                </p>
                <p className="text-[35px] border-b-[1px] border-black mt-[50px] font-bold w-full">
                  выдан: {from}
                </p>
                <p className="text-[35px] border-b-[1px] border-black mt-[50px] font-bold w-full">
                  до: {to}
                </p>
              </div>
            </div>
            <p className="text-[50px] mt-[60px]">
              Директор: OOO "NAMANGANTRANS 2022" B.Muhidinov
            </p>
          </div>
          <div className="w-[50%] h-[1504px] text-center flex flex-col items-center px-[50px]">
            <p className="text-[60px] mt-[60px] font-bold">Certificate</p>
            <p className="text-[45px] mt-[50px] font-bold">
              The implementation of international automobile transportation
            </p>
            <p className="text-[45px] mt-[50px] font-bold">MO №{id}</p>
            <p className="text-[45px] border-b-[1px] border-black mt-[40px] uppercase w-full">
              {summarizeName(name, surname)}
            </p>
            <p className="text-[45px] border-b-[1px] border-black mt-[60px] uppercase w-full">
              {certType === "adr" ? "ADR" : "36 hours"}
            </p>
            <p className="text-[40px] mt-[10px]">
              This certificate that he completed training course on special
              program
            </p>
            <p className="text-[40px] mt-[30px] italic">
              {certType === "adr"
                ? "Certificate of Professional Competence in the Transport of Dangerous Goods by Road (ADR)"
                : " Organization and implementation of international automobile transportation"}
            </p>
            <div className="w-full my-[125px]">
              <p className="text-[45px] mt-[30px]">OOO "NAMANGANTRANS 2022"</p>
              <p className="text-[35px] border-b-[1px] border-black mt-[50px] font-bold w-full">
                issued: {from}
              </p>
              <p className="text-[35px] border-b-[1px] border-black mt-[50px] font-bold w-full">
                valid: {to}
              </p>
            </div>
            <p className="text-[50px] mt-[30px]">
              Director: OOO "NAMANGANTRANS 2022" B.Muhidinov
            </p>
          </div>
        </div>
        {type === "search" && (
          <div className="text-[50px] text-center mt-[50px]">
            <p className="my-[50px]">
              Сертификат Профессиональной компетентности (СПК) международного
              автомобильного перевозчика Выдано:{" "}
              <span className="font-bold">
                {" "}
                {summarizeName(name, surname, middlename)}{" "}
              </span>
              квалификационный экзамен ({from}) на профессиональную
              компетентность и признан(а) квалифицированным(ой) для
              профессиональной работы в качестве Водителя По программе:
              Повышение квалификации водителей, занимающихся международными
              автомобильными перевозкамиВыдано: {from} Действителен до: {to} по
              повышения квалификации и переподготовки кадров автомобильного
              транспорта{" "}
            </p>
            <p>
              Certificate Professional Competence (SPK) international road
              carrier Issued: {from} qualifying exam({from}) for professional
              competence and recognized as qualified for professional work as
              Driver According to the program: Advanced training drivers
              involved in international road transport Issued: {from} Valid
              until: {to} for advanced training and retraining of automotive
              personnel transport
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCertificateBottom;
