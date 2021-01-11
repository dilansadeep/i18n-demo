import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./Login.css";

class Login extends Component {
  render() {
    const { t } = this.props;
    return (
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder={t("pages/login:username_field_label")} />
            <input type="password" placeholder={t("pages/login:password_field_label")} />
            <button>{t("pages/login:login_cta_label")}</button>
            <p class="message">
            <a href="#">{t("pages/login:forgotten_password_cta_label")}</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withTranslation(["pages/login"])(Login);
