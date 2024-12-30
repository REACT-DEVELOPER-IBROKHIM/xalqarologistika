import "./Preview.scss";
import gerb from "../../assets/images/gerb.png";
import user from "../../assets/images/images.jpeg"
import summarizeName from "../../helpers/summarizeName";
import { forwardRef } from "react";
import QRCode from "react-qr-code";

const Preview = ({ id, firstname, lastname, parentname, from, to, size, birthdate },ref) => {
  return !id.startsWith("0") && !id.startsWith("T") ? (
    <div id="pdf" ref={ref} className="certificate-container">
      <div className="certificate-wrapper">
        <div className="certificate-left">
          <img className="certificate-gerb" src={gerb} alt="" />
          <div className="cartificate-flag__stripes">
            <div className="blue-stripe"></div>
            <div className="white-stripe"></div>
            <div className="green-stripe"></div>
          </div>
        </div>
        <div className="certificate-right" style={{ fontSize: `${size}px` }}>
          <p className="certificate__country">
            <span className="certificate__country-name">
              O'zbekiston Respublikasi
            </span>
            <br />
            <br />
            <span className="certificate__country-type">
              Malaka oshirish haqida
            </span>
          </p>
          <h4 className="certificate__title">SERTIFIKAT</h4>
          <h5 className="certificate__number">MO № {id}</h5>
          <p className="certificate__name">
            {summarizeName(firstname, lastname, parentname)}
          </p>
          <p className="certifcate__date">
            <span> berilgan sana: {from}</span>
            <span> amal qilish muddati: {to}</span>
          </p>
          <p className="certificate__org">NAMANAGANTRANS MCHJ</p>
          <p className="certificate__course">36 soat</p>
          <div className="certificate__rest">
            <p>bo'yicha malakasini oshirdi</p>
            <br />
            <br />
            <p className="certificate__rest-credientials">
              <span>
                Bosh direktor: Bahromjon Muhiddinov
                <br />
                Sana: {from}
              </span>
              <span>Qayd raqami: MO № {id}</span>
            </p>
          </div>
          <div className="certificate__bottom">
            <strong>{summarizeName(firstname, lastname, parentname)}</strong> ga
            haqiqatdan ham milliy va xalqaro avtomobilda yuk tashish bo`yicha
            №1071/2009 sonli EC derektivasi va milliy me'yoriy xujjatlarga
            asoslangan maxsus kursda o`qidi va malakaviy imtixon topshirdi.
            <br />
            <strong> NAMANGAN - MQI</strong> qoshida
          </div>
        </div>
      </div>
    </div>
  ) :
  (
    <div className="certificate-adr">
        <h3>ADR-DRIVER TRAINING CERTIFICATE</h3>
        <h4>СВИДЕТЕЛЬСТВО О ПОДГОТОВКЕ ВОДИТЕЛЯ ПО ДОПОГ</h4>
        <div className="adr__content">
           <div className="content__header">
                <div className="adr__uz">UZ</div>
                <h5>1. Nr {id}</h5>
                <div className="adr__logo">NT2022</div>
           </div>
           <div className="content__info">
                    <img src={user} alt="" />
                    <div>
                        <h5>2.  {firstname}</h5>
                        <h5>3.  {lastname}</h5>
                        <h5>4. {birthdate} </h5>
                        <h5>5. REPUBLIC OF UZBEKISTAN</h5>
                        <h5>6. NAMANGANTRANS 2022</h5>
                        <h5>7. Until (date) {to}</h5>
                        <div className="adr__sign"></div>
                    </div>
                    <QRCode 
                        className="adr_previewqrcode"
                        value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                    />
                </div>
        </div>
    </div>
  )
  
  ;
};

export default forwardRef(Preview);
