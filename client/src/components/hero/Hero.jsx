import "./Hero.scss";
import axios from "../../api";
import { useState } from "react";
import {useTranslation} from "react-i18next";
import { createStatusInstance } from "../../helpers/createStatusInstance";
import { Link } from "react-router-dom";
import { Anchor, Container, Button } from "../../utils/Utils";
import heroImage from "../../assets/images/hero.jpg";
import Preview from "../preview/Preview";


const Hero = () => {
  const {t} = useTranslation();
  const [searchCertificateNumber, setSearchCertificateNumber] = useState("");
  const [searchResult, setSearchResult] = useState(createStatusInstance("backlog"));

  const handleSearchCertificate = async (e) => {
    e.preventDefault();
    try {
      if (searchCertificateNumber.trim().length > 4) {
        setSearchResult(createStatusInstance("pending", t("status.pending")));
        let response = await axios(`/search?id=${searchCertificateNumber}`);
        let data = response.data;
        if (response.status === 200 && data != null) {
          setSearchResult(createStatusInstance("success", t("status.success"), data));
        } else {
          throw new Error("Please enter a valid certificate number");
        }
      } else {
        throw new Error("Please enter a valid certificate number");
      }
    } catch (error) {
      setSearchResult(createStatusInstance("error", t("status.error")));
    }
  };

  return (
    <section className="hero">
      <img className="hero__image" src={heroImage} alt="" />
      <div className="hero__overlay"></div>
      <Container>
        <div className="hero__content">
          <div className="hero__content-wrapper">
            <h2>{t("hero.title")}</h2>
            <p>
             {
              t("hero.description")
             }
            </p>
            <form
              onSubmit={handleSearchCertificate}
              className="hero__content-form"
            >
              <input
                className="hero__content-form-input"
                type="text"
                placeholder={t("hero.input_placeholder")}
                value={searchCertificateNumber}
                onChange={(e) => {
                  setSearchCertificateNumber(e.target.value)
                }}
                required
              />
              {searchResult.error && searchResult.message && (
                <p className="message message--error">{searchResult.message}</p>
              )}
              {searchResult.success && searchResult.message && (
                <p className="message message--success">
                  {searchResult.message}
                </p>
              )}
              {searchResult.loading && searchResult.message && (
                <p className="message message--loading">
                  {searchResult.message}
                </p>
              )}
              <div className="hero__content-actions">
                <Button
                  appearance="primary"
                  text={t("hero.check_btn")}
                  loading={searchResult.loading}
                />
              </div>
            </form>
          </div>
          {searchResult.data && (
            <div className="hero__content-certificate" style={searchResult.data.id.startsWith("0") || searchResult.data.id.startsWith("T") ? {height: "auto"} : {height: "400px"}}>
              <Preview
                id={searchResult.data.id}
                firstname={searchResult.data.name}
                lastname={searchResult.data.surname}
                parentname={searchResult.data.middlename}
                coursehours={searchResult.data.courseName}
                from={searchResult.data.from || searchResult.data.givenDate}
                to={searchResult.data.to}
                birthdate={searchResult.data.birthDate}
                size={12}
              />
              <Link className="hero__content-certificate-link" to={`/check-certificates/${searchResult.data.id}`}>
                <span>
                  {t("hero.view_btn")}
                </span>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;