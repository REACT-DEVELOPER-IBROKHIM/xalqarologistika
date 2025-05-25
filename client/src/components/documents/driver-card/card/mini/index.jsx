import React from "react";
import gerb from "@assets/images/gerb.png";
import summarizeName from "@/helpers/summarizeName";
import QRCode from "react-qr-code";

const DriverCardMini = ({ document }) => {
  const { name, surname, middlename, birthDate, from, to, id } = document;
  return (
    <>
      <div className="w-[2480px] h-[3508px]">
        <div className="w-[100%] h-[100%]">
          <div className="h-[1704px] w-full flex bg-pattern bg-cover bg-center bg-no-repeat">
            <div className="w-[50%] h-[1504px] text-center flex flex-col items-center py-[250px] px-[200px]">
              <div className="flex-1 w-full ml-[-27px]">
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  Avtomobilda xalqaro tashuvchining kasbiy mahorat (KMS)
                  <br />
                  <span>SERTIFIKATI</span>
                </p>
                <div className="text-[27px] text-left my-[50px] text-green-900 leading-[70px]">
                  <p>
                    Berildi{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold uppercase">
                      {summarizeName(name, surname, middlename)}
                    </span>{" "}
                    tug'ilgan sana:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {" "}
                      {birthDate.split(".")[2]}{" "}
                    </span>{" "}
                    - yil
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {" "}
                      {birthDate.split(".")[0]}.{birthDate.split(".")[1]}
                    </span>
                    da.
                  </p>
                  <p>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      Avtomobil transporti haydovchilarini xalqaro avtomobil
                      tashishlar bo'yicha malakasini oshirish
                    </span>
                    dasturi bo'yicha malaka imtihonini topshirdi (sana{" "}
                    {from.split(".")[2]}-yil, {from.split(".")[0]}.
                    {from.split(".")[1]}) va{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      haydovchi
                    </span>{" "}
                    sifatida kasbiy faoliyat uchun malakali deb e'tirof etildi.
                  </p>
                </div>
                <div className="text-[25px] text-center my-[50px] text-green-900 leading-[40px] font-bold flex flex-col items-center">
                  <div className="flex gap-5">
                    Berilgan sana:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[2]}
                    </span>
                    - yil
                  </div>
                  <div className="flex gap-5 mt-[30px]">
                    Amal qilish muddati:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[2]}
                    </span>
                    - yil
                  </div>
                  <p className="mt-[50px] font-bold text-[30px] text-green-900">
                    XT №{" "}
                    <span className="text-bold text-black !font-mono text-[35px]">
                      {id}
                    </span>
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-5">
                      <p className="mt-[50px] font-bold text-[30px] text-green-900">
                        Rahbar:{" "}
                      </p>
                      <div className="mt-[40px]">
                        <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[80px] font-bold"></span>
                        <p className="text-[16px] italic text-green-900">
                          (imzo)
                        </p>
                      </div>
                    </div>
                    <div className="mt-[40px]">
                      <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[100px] font-bold">
                        B.Muhidinov
                      </span>
                      <p className="text-[16px] italic text-green-900">
                        ( ismi, familiyasi )
                      </p>
                    </div>
                  </div>
                  <p className="text-[22px] self-start ml-[30px] mt-[30px] text-green-800">
                    M.O'.
                  </p>
                  <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mb-[10px] mt-[50px]">
                    Namangan
                  </div>
                  <p className="text-[16px] italic text-green-900">
                    (berilgan joyi)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[1504px] text-center flex flex-col items-center py-[250px] px-[200px]">
              <div className="flex-1 w-full px-[30px] text-center flex flex-col items-center">
                <img
                  src={gerb}
                  alt=""
                  className="w-[150px] h-[150px] mt-[50px]"
                />
                <div className="text-[30px] mt-[50px] mb-[30px] text-green-800 font-semibold flex flex-col gap-5 uppercase">
                  <p>O'zbekiston respublikasi</p>
                  <p>Республика Узбекистан</p>
                  <p>The republic of uzbekistan</p>
                </div>
                <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mb-[10px] mt-[30px]">
                  ATXMO va QT Instituti
                </div>
                <p className="text-[16px] italic text-green-900">
                  (o'quv muassasasi nomi)
                </p>
                <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mb-[10px] mt-[30px]">
                  Институт ПК и ПКАТ
                </div>
                <p className="text-[16px] italic text-green-900">
                  (образовательное учреждение)
                </p>
                <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mb-[10px] mt-[30px]">
                  The Institute of advanced training
                </div>
                <p className="text-[16px] italic text-green-900">
                  (the name of the educational school)
                </p>
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  Avtomobilda xalqaro tashuvchining kasbiy mahorat (KMS)
                  <br />
                  <span>SERTIFIKATI</span>
                </p>
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  <span>СЕРТИФИКАТ</span>
                  <br /> профессиональной компетентности <br /> (СПК)
                  международного автомобильного перевозчика
                </p>
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  <span>CERTIFICATE</span> <br /> of Professional Competence
                  (CPC) <br /> for international road transport
                </p>
                <p className="text-[20px] mt-[60px] text-green-900">Shahar</p>
                <p className="text-[20] text-green-900">Город</p>
                <p className="text-[20] text-green-900">City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[2480px] h-[3508px]">
        <div className="w-[100%] h-[100%]">
          <div className="h-[1704px] w-full flex bg-pattern bg-cover bg-center bg-no-repeat">
            <div className="w-[50%] h-[1504px] text-center flex flex-col items-center py-[250px] px-[200px]">
              <div className="flex-1 w-full ml-[-27px]">
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  <span>СЕРТИФИКАТ</span>
                  <br /> профессиональной компетентности <br /> (СПК)
                  международного автомобильного перевозчика
                </p>
                <div className="text-[27px] text-left my-[50px] text-green-900 leading-[70px]">
                  <p>
                    Выдано{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold uppercase">
                      {summarizeName(name, surname, middlename)}
                    </span>{" "}
                    дата рождения:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {birthDate}
                    </span>
                    сдал (а) квалификационный экзамен (год:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[2]}
                    </span>{" "}
                    ; дата:{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {" "}
                      {from.split(".")[0]}.{from.split(".")[1]}
                    </span>
                    ) на профессиональную компетентность и признан(а)
                    квалифицированным(ой) для профессиональной работы в качестве
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      водителя
                    </span>
                    По программе{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      Повышение квалификации водителей автомобильного транспорта
                      при межд. авт. перевозка
                    </span>
                  </p>
                </div>
                <div className="text-[27px] text-center my-[20px] text-green-900 leading-[40px] font-bold flex flex-col items-center">
                  <div className="flex gap-5">
                    Выдано:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[2]}
                    </span>
                    - год
                  </div>
                  <div className="flex gap-5 mt-[20px]">
                    Действителен до:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[2]}
                    </span>
                    - год
                  </div>
                  <p className="mt-[20px] font-bold text-[30px] text-green-900">
                    МП №{" "}
                    <span className="text-bold text-black !font-mono text-[35px]">
                      {id}
                    </span>
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-5">
                      <p className="mt-[50px] font-bold text-[30px] text-green-900">
                        Руководитель:{" "}
                      </p>
                      <div className="mt-[40px]">
                        <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[80px] font-bold"></span>
                        <p className="text-[16px] italic text-green-900">
                          (подпись)
                        </p>
                      </div>
                    </div>
                    <div className="mt-[40px]">
                      <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[100px] font-bold">
                        B.Muhidinov
                      </span>
                      <p className="text-[16px] italic text-green-900">
                        ( имя, фамилия )
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[22px] self-start ml-[30px] mt-[30px] text-green-800">
                      М.П.
                    </p>
                    <QRCode
                      className="w-[100px] h-[100px]"
                      value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                    />
                  </div>
                  <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mt-[-30px]">
                    Наманган
                  </div>
                  <p className="text-[16px] italic text-green-900">
                    (место выдачи)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[1504px] text-center flex flex-col items-center py-[250px] px-[200px]">
              <div className="flex-1 w-full">
                <p className="text-[22px] mt-[30px] text-green-800 font-semibold">
                  <span>CERTIFICATE</span> <br /> of Professional Competence
                  (CPC) <br /> for international road transport
                </p>
                <div className="text-[27px] text-left my-[50px] text-green-900 leading-[70px]">
                  <p>
                    Issued to{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold uppercase">
                      {summarizeName(name, surname, middlename)}
                    </span>{" "}
                    date of birth:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {birthDate}
                    </span>{" "}
                    passed the qualification exam (year:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[2]}
                    </span>{" "}
                    ; <br />
                    date:{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {" "}
                      {from.split(".")[0]}.{from.split(".")[1]}
                    </span>
                    ) for professional competence and recognized as qualified
                    for professional work as a{" "}
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      driver
                    </span>
                    on program
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      On training for drivers of international road transport
                    </span>
                  </p>
                </div>
                <div className="text-[25px] text-center my-[50px] text-green-900 leading-[40px] font-bold flex flex-col items-center">
                  <div className="flex gap-5">
                    Issued by:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {from.split(".")[2]}
                    </span>
                    - year
                  </div>
                  <div className="flex gap-5 mt-[30px]">
                    Valid till:
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[0]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[1]}
                    </span>
                    <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[30px] font-bold">
                      {to.split(".")[2]}
                    </span>
                    - year
                  </div>
                  <p className="mt-[50px] font-bold text-[30px] text-green-900">
                    IRT №{" "}
                    <span className="text-bold text-black !font-mono text-[35px]">
                      {id}
                    </span>
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-5">
                      <p className="mt-[50px] font-bold text-[30px] text-green-900">
                        Director:{" "}
                      </p>
                      <div className="mt-[40px]">
                        <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[80px] font-bold"></span>
                        <p className="text-[16px] italic text-green-900">
                          (signature)
                        </p>
                      </div>
                    </div>
                    <div className="mt-[40px]">
                      <span className="border-b-[1px] border-gray-600 text-center pb-[4px] text-black px-[100px] font-bold">
                        B.Muhidinov
                      </span>
                      <p className="text-[16px] italic text-green-900">
                        ( name, surname )
                      </p>
                    </div>
                  </div>
                  <p className="text-[22px] self-start ml-[30px] mt-[30px] text-green-800">
                    P.S.
                  </p>
                  <div className="w-full text-[25px] border-b-[1px] border-gray-600 pb-[4px] mb-[10px] mt-[50px]">
                    Namangan
                  </div>
                  <p className="text-[16px] italic text-green-900">
                    (place of issue)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverCardMini;
