import React from "react";
import "./Services.scss";
import whatWeDoIcon from "@assets/icons/what-we-do-Icon.svg";
import whatWeDoIcon2 from "@assets/icons/what-we-do-Icon2.svg";
import whatWeDoIcon3 from "@assets/icons/what-we-do-Icon3.svg";
import whatWeDoIcon4 from "@assets/icons/what-we-do-Icon4.svg";
import bannerImg from "@assets/images/Background.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = t("whatWeDo.services", { returnObjects: true });
  const icons = [whatWeDoIcon, whatWeDoIcon2, whatWeDoIcon3, whatWeDoIcon4];
  return (
    <div>
      <div className="container">
        <div className="services-wrapper">
          <div className="what-we-do">
            <strong className="question">{t("whatWeDo.subtitle")}</strong>
            <h3 className="services-title">{t("whatWeDo.title")}</h3>
          </div>
          <div className="services-cards">
            {services.map((service, index) => {
              return (
                <div key={index} className="services-card">
                  <img src={icons[index]} alt="" />
                  <div className="line"></div>
                  <div className="card-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Services;
