import "./Login.scss";
import logo from "../../assets/logo/logo.svg";
import axios from "../../api";
import validateToken from "../../helpers/validate-token";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createStatusInstance } from "../../helpers/createStatusInstance";
import { login } from "../../redux/actions/login-actions";
import { Button } from "../../utils/Utils";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.login);
  const [loginResult, setLoginResult] = useState(
    createStatusInstance("backlog")
  );
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoginResult(createStatusInstance("pending", t("status.pending")));
      const response = await axios.post("/auth/login", {
        username: admin.username,
        password: admin.password,
      });
      if (response.status === 200 && response.data.user) {
        setLoginResult(
          createStatusInstance("success", t("status.success"), response.data)
        );
        dispatch(login(response.data.user, response.data.token));
        navigate("/admin/create-certificate");
      } else {
        throw new Error("Please enter a valid username and password");
      }
    } catch (error) {
      setLoginResult(createStatusInstance("error", t("status.error")));
    }
  };

  useLayoutEffect(() => {
    if (user && token && validateToken(token)) {
      navigate("/admin/create-certificate");
    }
  }, [user, token]);
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>{t("login.title")}</h1>
        {loginResult.error && loginResult.message && (
          <p className="message message--error">{loginResult.message}</p>
        )}
        {loginResult.success && loginResult.message && (
          <p className="message message--success">{loginResult.message}</p>
        )}
        {loginResult.loading && loginResult.message && (
          <p className="message message--loading">{loginResult.message}</p>
        )}
        <div className="login-form__wrapper">
          <input
            type="text"
            placeholder={t("login.name")}
            required
            onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
          />
          <input
            type="password"
            placeholder={t("login.password")}
            required
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          />
          <Button
            text={t("login.title")}
            loading={loginResult.loading}
            appearance="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
