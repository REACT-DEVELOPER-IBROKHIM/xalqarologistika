import "./DriverCertificate.scss";
import gerb from "@assets/images/gerb.png";
import summarizeName from "@helpers/summarizeName";
import QRCode from "react-qr-code";
import { forwardRef } from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const DriverCertificate = forwardRef(({ document }, ref) => {
  const { id, name, surname, middlename, from, to } = document;

  return (
    <>
      <div className="pdf_driver">
        <div ref={ref}>
          <div className="pdf_container">
            <div className="pdf_mainSection">
              <div className="pdf_flag">
                <div className="pdf_flagBlue"></div>
                <div className="pdf_flagRed"></div>
                <div className="pdf_flagWhite"></div>
                <div className="pdf_flagRed"></div>
                <div className="pdf_flagGreen"></div>
                <img className="pdf_gerb" src={gerb} alt="" />
                <div className="pdf_muhr">
                  <QRCode
                    className="pdf_flagQrcode"
                    value={`https://www.xalqarologistika.uz/check-certificates/${
                      id
                    }`}
                  />
                </div>
              </div>
              <div className="pdf_content">
                <Title variant="h3" className="font-bold mt-[100px] mb-[60px]">
                  O'zbekiston Respublikasi
                </Title>
                <Title className="!text-[#6969fd] uppercase !text-[60px] !mt-[40px] !mb-[20px]">
                  Sertifikat
                </Title>
                <Text className="font-bold text-[24px]">
                  Malaka oshirish haqida
                </Text>
                <Title variant="h2" className="!text-[20px]">
                  {"MO №" + id}
                </Title>
                <Title
                  variant="h2"
                  className="!text-[20px] !border-b-[1px] !border-black"
                >
                  {summarizeName(name, surname, middlename)}
                </Title>
                <p className="pdf_userNameDesc">
                  (Familyasi, ismi, otasinig ismi)
                </p>
                <p className="pdf_date">
                  <span>berilgan sana: {from}</span>
                  <span>amal qilish muddati:{to}</span>
                </p>
                <h2 className="pdf_mchj">NAMANGANTRANS 2022 MCHJ</h2>
                <p className="pdf_mchjDesc">
                  (Malaka oshirish ta'lim muassasasining nomi)
                </p>
                <h2 className="pdf_course">
                  {id?.startsWith("M") ? "72" : "36"} soat
                </h2>
                <p className="pdf_mchjDesc">
                  (Malaka oshirish kusrning muddati)
                </p>
                <p className="additional_text">bo'yicha malakasini oshirdi</p>
                <p className="additional_director">Direktor: B.Muhidinov </p>
                <div className="additonal_wrapper">
                  <p className="additional_date">Sana: {from}</p>
                  <p className="additional_registId">Qayd raqami: № {id}</p>
                </div>

                <div className="additional_partner">
                  <p>
                    <strong>{summarizeName(name, surname, middlename)}</strong>
                    ga haqiqatdan ham milliy va xalqaro avtomobilda yuk tashish
                    bo`yicha milliy me'yoriy xujjatlarga asoslangan maxsus
                    kursda o`qidi va malakaviy imtixon topshirdi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pdf_container">
            <div className="pdf_mainSection">
              <div className="pdf_flag">
                <div className="pdf_flagBlue"></div>
                <div className="pdf_flagRed"></div>
                <div className="pdf_flagWhite"></div>
                <div className="pdf_flagRed"></div>
                <div className="pdf_flagGreen"></div>
                <img className="pdf_gerb" src={gerb} alt="" />
                <div className="pdf_muhr">
                  <QRCode
                    className="pdf_flagQrcode"
                    value={`https://www.xalqarologistika.uz/check-certificates/${
                      id
                    }`}
                  />
                </div>
              </div>
              <div className="pdf_content">
                <Title variant="h3" className="font-bold mt-[100px] mb-[60px]">
                  Республика Узбекистан
                </Title>
                <Title className="!text-[#6969fd] uppercase !text-[60px] !mt-[40px] !mb-[20px]">
                  Сертификат
                </Title>
                <h1 className="pdf_titleDRu">
                  О ПРОФЕССИОНАЛЬНОЙ КОМПЕТЕНТНОСТИ ПО НАЦИОНАЛЬНЫМ И
                  МЕЖДУНАРОДНЫМ АВТОМОБИЛЬНЫМ ПЕРЕВОЗКАМ ГРУЗОВ
                </h1>
                <Title variant="h2" className="!text-[20px]">
                  MO № {id}
                </Title>
                <Title
                  variant="h2"
                  className="!text-[20px] !border-b-[1px] !border-black"
                >
                  {summarizeName(name, surname, middlename)}
                </Title>
                <p className="pdf_userNameDesc">(Фамилия, Имя, Отчество)</p>
                <p className="pdf_date">
                  <span>выдан:{from}</span>
                  <span>до: {to}</span>
                </p>
                <h2 className="pdf_mchj">Намангантранс 2022 МЧЖ</h2>
                <p className="pdf_mchjDesc">(Название учебного заведения)</p>
                <h2 className="pdf_course">
                  {id?.startsWith("M") ? "72" : "36"} часов
                </h2>
                <p className="pdf_mchjDesc">
                  (Продолжительность курса обучения)
                </p>
                <p className="additional_text">улучшил свои навыки</p>
                <p className="additional_director">Директор: Б.Мухиддинов </p>
                <div className="additonal_wrapper">
                  <p className="additional_date">число: {from}</p>
                  <p className="additional_registId">
                    Регистрационный номер: № {id}
                  </p>
                </div>
                <div className="additional_partner">
                  <p>
                    <strong>{summarizeName(name, surname, middlename)}</strong>{" "}
                    прошел обучение по данному курсу, основанному национальным
                    требованиям, и успешно сдал экзамены.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* gerb */}
          <div className="pdf_lang">
            <div className="pdf_langSertificate">
              <div></div>
              <div className="pdf_langSertificateContent">
                <img className="pdf_langSerContImg" src={gerb} alt="" />
                <h3 className="pdf_langSerContRes">O'zbekiston Respublikasi</h3>
                <h3 className="pdf_langSerContMchj">
                  "NAMANGANTRANS 2022" MCHJ
                </h3>
                <h2 className="pdf_langSerContName">Sertifikat</h2>
                <h5 className="pdf_langSerContNam">Namangan</h5>
              </div>
            </div>
          </div>
          {/* miniSer */}
          <div className="pdf_lang">
            <div className="pdf_langContainer">
              <div className="pdf_langRu">
                <Title variant="h2" className="font-bold !text-[20px]">
                  Сертификат
                </Title>
                <Title variant="h2" className="font-bold !text-[14px]">
                  на осуществление международных автомобильных перевозов
                </Title>
                <Title variant="h2" className="font-bold !text-[14px]">
                  {"MO №" + id}
                </Title>
                <Text className="pdf_langName">
                  {summarizeName(name, surname, middlename)}
                </Text>
                <h4 className="pdf_langName">
                  {id?.startsWith("M") ? "72" : "36"} часов
                </h4>
                <p className="pdf_langNameDesc">
                  О том что он прошел курс обучения по специальной программе{" "}
                </p>
                <p className="pdf_langOrganization">
                  " Организация по осуществлению международных перевозок
                  автомобильным транспортом "
                </p>
                {/* <p><b>Директиве 1071/2009 ЕС</b></p> */}
                <div className="pdf_langCon">
                  <div className="pdf_langQrContainer">
                    <QRCode
                      className="pdf_langQrcode"
                      value={`https://www.xalqarologistika.uz/check-certificates/${
                        id
                      }`}
                    />
                  </div>
                  <div className="">
                    <h3 className="pdf_langOOO">OOO "NAMANGANTRANS 2022"</h3>
                    <p className="pdf_langData">выдан: {from}</p>
                    <p className="pdf_langData">до: {to}</p>
                  </div>
                </div>
                <h4 className="pdf_langDirector">
                  Директор: OOO "NAMANGANTRANS 2022" B.Muhidinov
                </h4>
              </div>
              <div className="pdf_langEng">
                <Title variant="h2" className="font-bold !text-[20px]">
                  Certificate
                </Title>
                <Title variant="h2" className="font-bold !text-[14px]">
                  The implementation of international automobile transportation
                </Title>
                <Title variant="h2" className="font-bold !text-[14px]">
                  {"MO №" + id}
                </Title>
                <Text className="pdf_langName">
                  {summarizeName(name, surname, middlename)}
                </Text>
                <h4 className="pdf_langName">
                  {id?.startsWith("M") ? "72" : "36"} hours
                </h4>
                <p className="pdf_langNameDesc">
                  This certificate that he completed training course on special
                  program
                </p>
                <p className="pdf_langOrganization">
                  Organization and implementation of international automobile
                  transportation
                </p>

                <div className="pdf_langDateEn">
                  <p className="pdf_langData">Issued: {from}</p>
                  <p className="pdf_langData">Valid: {to}</p>
                </div>
                <h4 className="pdf_langDirector">
                  {" "}
                  Director: OOO "NAMANGANTRANS 2022" B.Muhidinov
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default DriverCertificate;
