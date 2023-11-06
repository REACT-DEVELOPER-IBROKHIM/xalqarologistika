import "./ManageCertificate.scss"
import certificateTypeList from "../../../static/CertificateTypeList";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";

const ManageCertificates = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useLayoutEffect(() => {
    navigate(`/admin/manage-certificate/manage-driver-certificate`);
  }, []);

  useEffect(() => {
    const urlParameters = new URLSearchParams();
    urlParameters.set("limit", 10);
    urlParameters.set("page", 1);
    const searchQueries = urlParameters.toString();
    navigate(`${pathname}?${searchQueries}`);
    // TODO shorten navigate logic
  }, [pathname])

  return (
    <div admincontent="content" className="manage-certificate">
      <h2 className='admin-content__heading'>{t("manage.title")}</h2>
      <nav className="manage-certificate__nav">
        <ul className="manage-certificate__list">
          {
            certificateTypeList("manage", "/admin/manage-certificate").map(manageCertificateItem => 
              <li className="manage-certificate__item" key={uuidv4()}>
                <NavLink replace className={({isActive}) => (isActive ? "manage-certificate__link manage-certificate__link--active" : "manage-certificate__link")} to={manageCertificateItem.route}>{manageCertificateItem.name}</NavLink>
              </li>
            )
          }
        </ul>
      </nav>
      <section className="manage-certificate__content">
        <Outlet/>
      </section>
    </div>
  )
}

export default ManageCertificates