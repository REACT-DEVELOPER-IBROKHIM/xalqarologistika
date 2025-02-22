import "./Hero.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createStatusInstance } from "@helpers/createStatusInstance";
import { Link } from "react-router-dom";
import { Container, Button } from "@utils/Utils";
import heroImage from "@assets/images/hero.jpg";
import Preview from "@components/preview/Preview";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResultThunk } from "@/redux/thunks/search-thunk";
import {
  getSearchResultLoading,
  getSearchResult,
} from "@/redux/selectors/search";

const Hero = () => {
  const document = useSelector(getSearchResult);
  const isDocumentLoadding = useSelector(getSearchResultLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [searchCertificateNumber, setSearchCertificateNumber] = useState("");

  const handleSearchCertificate = async (e) => {
    e.preventDefault();
    dispatch(
      fetchSearchResultThunk({
        id: searchCertificateNumber,
      }),
    );
  };

  return (
    <section className="hero">
      <img className="hero__image" src={heroImage} alt="" />
      <div className="hero__overlay"></div>
      <Container>
        <div className="hero__content">
          <div className="hero__content-wrapper">
            <h2>{t("hero.title")}</h2>
            <p>{t("hero.description")}</p>
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
                  setSearchCertificateNumber(e.target.value);
                }}
                required
              />
              {/* {document.error && searchResult.message && (
                <p className="message message--error">{searchResult.message}</p>
              )}
              {document.success && searchResult.message && (
                <p className="message message--success">
                  {searchResult.message}
                </p>
              )}
              {isDocumentLoadding && document.message && (
                <p className="message message--loading">
                  {searchResult.message}
                </p>
              )} */}
              <div className="hero__content-actions">
                <Button
                  appearance="primary"
                  text={t("hero.check_btn")}
                  loading={isDocumentLoadding}
                />
              </div>
            </form>
          </div>
          {document && (
            <div
              className="hero__content-certificate"
              style={
                document.id?.startsWith("0") || document.id?.startsWith("T")
                  ? { height: "auto" }
                  : { height: "400px" }
              }
            >
              <Preview
                id={document.id}
                firstname={document.name}
                lastname={document.surname}
                parentname={document.middlename}
                coursehours={document.courseName}
                from={document.from}
                to={document.to}
                birthdate={document.birthDate}
                size={12}
              />
              <Link
                className="hero__content-certificate-link"
                to={`/check-certificates/${document.id}`}
              >
                <span>{t("hero.view_btn")}</span>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
