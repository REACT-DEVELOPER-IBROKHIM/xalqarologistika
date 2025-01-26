import gerb from "@assets/images/gerb.png";
import { Link } from "react-router-dom";
import signs from "@assets/images/signs.png";
import QRCode from "react-qr-code";
import av from "@assets/images/images.jpeg";
import summarizeName from "@helpers/summarizeName";
import { Typography, Watermark } from "antd";
import logo from "@assets/logo/logo.svg";
import "./Draft.scss";

const { Title, Text } = Typography;

const Draft = ({ document }) => {
  const { id, name, surname, from, to, birthDate, middlename } = document;
  const number = +id?.replace(/[A-Z]/g, "");
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const year = +to.split(".")[2];
  const month = +to.split(".")[1];
  const day = +to.split(".")[0];

  const isCurrentDateValid = () => {
    if (currentYear > year) return true;
    if (currentYear === year && currentMonth > month) return true;
    if (currentYear === year && currentMonth === month && currentDay >= day)
      return true;
    return false;
  };

  const certificateStatus = isCurrentDateValid() ? "EXPIRED" : "EXIST";

  return (
    <Watermark
      height={60}
      width={250}
      gap={[20, 20]}
      font={{
        fontSize: 60,
        fontWeight: "bold",
        color: certificateStatus === "EXIST" ? "#00800046" : "#ff000065",
      }}
      content={certificateStatus}
    >
      <div className="darft_container drafted">
        {id.startsWith("D") || id.startsWith("M") ? (
          <div className="pdf_container ">
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
                    value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                  />
                </div>
              </div>
              <div className="pdf_content">
                <Title variant="h3" className="font-bold mt-[100px] mb-[60px]">
                  O'zbekiston Respublikasi
                </Title>
                <Text className="font-bold text-[24px]">
                  Malaka oshirish haqida
                </Text>
                <Title className="!text-[#6969fd] uppercase !text-[60px] !mt-[40px] !mb-[20px]">
                  Sertifikat
                </Title>
                <Title variant="h2" className="!text-[20px]">
                  {"MO №" + id}
                </Title>
                <h2 className="pdf_userName">
                  {summarizeName(name, surname, middlename)}
                </h2>
                <p className="pdf_userNameDesc">
                  (Familyasi, ismi, otasinig ismi)
                </p>
                <p className="pdf_date">
                  <span>berilgan sana: {from}</span>
                  <span>amal qilish muddati: {to}</span>
                </p>
                {id.startsWith("M") ? (
                  <p className="additional">
                    Avtomobil transportida yuk va yo'lovchilar tashish bilan
                    shug'ullanayotgan yuridik shaxslarning rahbarlari va mas'ul
                    xodimlarining malakasini oshirish
                  </p>
                ) : (
                  <></>
                )}
                <h2 className="pdf_mchj">NAMANGANTRANS 2022 MCHJ</h2>
                <p className="pdf_mchjDesc">
                  (Malaka oshirish ta'lim muassasasining nomi)
                </p>
                <h2 className="pdf_course">
                  {" "}
                  {id.startsWith("M")
                    ? "72 soat"
                    : number >= 566
                      ? "36 soat"
                      : "40 soat"}{" "}
                </h2>
                <p className="pdf_mchjDesc">(Malaka oshirish kusrning nomi)</p>
                <p className="additional_text">bo'yicha malakasini oshirdi</p>
                <p className="additional_director">
                  Bosh direktor: Bahromjon Muhiddinov{" "}
                </p>
                <div className="additonal_wrapper">
                  <p className="additional_date">Sana: {from} </p>
                  <p className="additional_registId">Qayd raqami: № {id}</p>
                </div>
                <div className="additional_partner">
                  <p>
                    <strong>{summarizeName(name, surname, middlename)}</strong>
                    ga haqiqatdan ham milliy va xalqaro avtomobilda yuk tashish
                    bo`yicha №1071/2009 sonli EC derektivasi va milliy me'yoriy
                    xujjatlarga asoslangan maxsus kursda o`qidi va malakaviy
                    imtixon topshirdi.
                  </p>
                  <strong>NAMANGAN - MQI qoshida</strong>
                </div>
              </div>
            </div>
            {id.startsWith("D") ? (
              <>
                <div className="pdf_lang">
                  <div className="pdf_langContainer">
                    <div className="pdf_langRu">
                      <Title variant="h2" className="font-bold !text-[20px]">
                        Сертификат
                      </Title>
                      <Title variant="h2" className="font-bold !text-[14px]">
                        на осуществление международных автомобильных перевозов
                      </Title>
                      <Text className="pdf_langName">
                        {summarizeName(name, surname, middlename)}
                      </Text>
                      <h4 className="pdf_langName">
                        {number >= 566 ? "36 часов" : "40 часов"}
                      </h4>
                      <p className="pdf_langNameDesc">
                        О том что он прошел курс обучения по специальной
                        программе{" "}
                      </p>
                      <p className="pdf_langOrganization">
                        " Организация по осуществлению международных перевозок
                        автомобильным транспортом "
                      </p>
                      <div className="pdf_langCon">
                        <div className="pdf_langQrContainer">
                          <QRCode
                            className="pdf_langQrcode"
                            value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                          />
                        </div>
                        <div className="">
                          <h3 className="pdf_langOOO">
                            OOO "NAMANGANTRANS 2022"
                          </h3>
                          <p className="pdf_langData">выдан {from}</p>
                          <p className="pdf_langData">до {to}</p>
                        </div>
                      </div>
                      <h4 className="pdf_langDirector">
                        {" "}
                        Директор: OOO "NAMANGANTRANS 2022" Bahrom Muhiddinov
                      </h4>
                    </div>
                    <div className="pdf_langEng">
                      <Title variant="h2" className="font-bold !text-[20px]">
                        Certificate
                      </Title>
                      <Title variant="h2" className="font-bold !text-[14px]">
                        The implementation of international automobile
                        transportation
                      </Title>
                      <Text className="pdf_langName">
                        {summarizeName(name, surname, middlename)}
                      </Text>
                      <h4 className="pdf_langName">
                        {number >= 566 ? "36 hours" : "40 hours"}
                      </h4>
                      <p className="pdf_langNameDesc">
                        This certificate that he completed training course on
                        special program
                      </p>
                      <p className="pdf_langOrganization">
                        "Organization and implementation of international
                        automobile transportation"
                      </p>

                      <div className="pdf_langDateEn">
                        <p className="pdf_langData">Issued {from}</p>
                        <p className="pdf_langData">Valid {to}</p>
                      </div>
                      <h4 className="pdf_langDirector">
                        {" "}
                        Director: OOO "NAMANGANTRANS 2022" Bahrom Muhiddinov
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="certficate-text__container">
                  <h2>Сертификат</h2>
                  <h4>
                    Профессиональной компетентности
                    <br></br>
                    (СПК) международного автомобильного перевозчика
                  </h4>
                  <br />
                  <br />
                  <p>
                    Выдано:{" "}
                    <strong>{summarizeName(name, surname, middlename)}</strong>{" "}
                  </p>
                  <p>
                    квалификационный экзамен({from}) на профессиональную
                    компетентность и признан(а) квалифицированным(ой) для
                    профессиональной работы в качестве Водителя
                    <br />
                    <br />
                    <i>
                      По программе: Повышение квалификации водителей,
                      занимающихся международными автомобильными перевозками
                    </i>
                    Выдано: {from}
                    Действителен до: {to}
                    по повышения квалификации и переподготовки кадров
                    автомобильного транспорта
                  </p>

                  <h2>Certificate</h2>
                  <h4>
                    Professional Competence
                    <br></br>
                    (SPK) international road carrier
                  </h4>
                  <br />
                  <br />
                  <p>
                    Issued: <strong>{from}</strong>{" "}
                  </p>
                  <p>
                    qualifying exam({from}) for professional competence and
                    recognized as qualified for professional work as Driver
                    <br />
                    <br />
                    <i>
                      According to the program: Advanced training drivers
                      involved in international road transport
                    </i>
                    Issued: {from}
                    Valid until: {to}
                    for advanced training and retraining of automotive personnel
                    transport
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="adr__container">
            <div className="adr_card">
              <h2 className="adr_englishtitle">
                ADR-DRIVER TRAINING CERTIFICATE
              </h2>
              <h3 className="adr_rustitle">
                СВИДЕТЕЛЬСТВО О ПОДГОТОВКЕ ВОДИТЕЛЯ ПО ДОПОГ
              </h3>
              <div className="adr_maintop">
                <div className="uz_wrapper">UZ</div>
                <p className="main__bold">1.Nr. {id}</p>
                <h2 className="adr_logo">NT2022</h2>
              </div>
              <div className="adr_maincenter">
                <div className="center__image">
                  {" "}
                  <img className="image__avatar" src={av} alt="" />{" "}
                </div>
                <div className="center__info">
                  <p className="main__bold">2. {name}</p>
                  <p className="main__bold">3. {surname}</p>
                  <p className="main__bold">
                    4. <span className="smaller_text"> {birthDate} </span>
                  </p>
                  <p className="main__bold">
                    5.{" "}
                    <span className="smaller_text">
                      {" "}
                      REPUBLIC OF UZBEKISTAN
                    </span>
                  </p>
                  <p className="main__bold">
                    6. <span className="smaller_text">NAMANGANTRANS 2022</span>
                  </p>
                  <p className="main__bold">
                    7. <span className="smaller_text">Until (date) {to}</span>
                  </p>
                  <div className="adr_sign"></div>
                </div>
                <div className="adr_qrcode">
                  <QRCode
                    className="adr_qrcodemain"
                    value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                  />
                </div>
              </div>
            </div>
            <div className="adr_cardback">
              <h2 className="back__title">VALID FOR CLASS(ES) OR UN NOS.:</h2>
              <h3 className="back__smalltitle">
                ДЕЙСТВИТЕЛЬНО В ОТНОШЕНИИ ВЕЩЕСТВ КЛАССА(ОВ) ИЛИ № ООН
              </h3>
              <table>
                <tr>
                  <th>9. In tank</th>
                  <th>10. Other than in tank</th>
                </tr>
                <tr>
                  <td>
                    2
                    <br />
                    3
                    <br />
                    4.1, 4.2, 4.3
                    <br />
                    5.1, 5.2
                    <br />
                    6.1, 6.2
                    <br />
                    8
                    <br />9
                  </td>
                  <td>
                    2
                    <br />
                    3
                    <br />
                    4.1, 4.2, 4.3
                    <br />
                    5.1, 5.2
                    <br />
                    6.1, 6.2
                    <br />
                    8
                    <br />9
                  </td>
                </tr>
              </table>
            </div>
            {parseInt(id) > 200 && (
              <div className="cartifificate__adr-danger">
                <div className="pdf_lang">
                  <div className="pdf_langContainer">
                    <div className="pdf_langRu">
                      <h2 className="pdf_langTitle">АДР Сертификат</h2>
                      <img src={signs} alt="" className="signs" />
                      <p>
                        <b>MO № {id}</b>
                      </p>
                      <h4 className="pdf_langName">
                        {summarizeName(name, surname)}
                      </h4>
                      <h4 className="pdf_langName">АДР</h4>
                      <p className="pdf_langNameDesc">
                        О том что он прошел курс обучения по специальной
                        программе{" "}
                      </p>
                      <p className="pdf_langOrganization">
                        "Сертификат профессиональной компетентности в области
                        Перевозка опасных грузов автомобильным транспортом (ADR)
                        "
                      </p>
                      {/* <p><b>Директиве 1071/2009 ЕС</b></p> */}
                      <div className="pdf_langCon">
                        <div className="pdf_langQrContainer">
                          <QRCode
                            className="pdf_langQrcode"
                            value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                          />
                        </div>
                        <div>
                          <h3 className="pdf_langOOO">
                            OOO "NAMANGANTRANS 2022"
                          </h3>
                          <p className="pdf_langData">выдан: {from}</p>
                          <p className="pdf_langData">до: {to}</p>
                        </div>
                      </div>
                      <h4 className="pdf_langDirector">
                        Директор: OOO "NAMANGANTRANS 2022" B.Muhidinov
                      </h4>
                    </div>
                    <div className="pdf_langEng ">
                      <h2 className="pdf_langTitle">ADR Certificate</h2>
                      <p className="adr_title-eng">
                        <b>MO № {id}</b>
                      </p>

                      {/* <h2 className="pdf_id"></h2> */}
                      <h4 className="pdf_langName">
                        {summarizeName(name, surname)}
                      </h4>
                      <h4 className="pdf_langName">ADR</h4>
                      <p className="pdf_langNameDesc">
                        This certificate that he completed training course on
                        special program
                      </p>
                      <p className="pdf_langOrganization">
                        Certificate of Professional Competence in the Transport
                        of Dangerous Goods by Road (ADR)
                      </p>

                      <div className="pdf_langDateEn adr_lang-eng-date">
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
            )}
          </div>
        )}
      </div>
    </Watermark>
  );
};

export default Draft;
