import i18n from "i18next";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from "i18next-http-backend"; // fallback http load
import { initReactI18next } from "react-i18next";
import Url from "url-parse";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      backends: [
        LocalStorageBackend,  // primary
        HttpApi // fallback
      ],
      backendOptions: [
        {
            expirationTime: 7*24*60*60*1000,
            defaultVersion: 'v1.2'
        },
        {
          crossDomain: true,
          withCredentials: true,
          customHeaders: {},
          queryStringParams: { v: "1.3.5" },
          loadPath(langs, namespaces) {
            const [lang] = langs;
            let [namespace] = namespaces;
            if (namespace === "translation") namespace = "pages/translation";
            const url = new Url(
              `https://dev-noetic1-febe.imperialhotels.co.uk/api/content/${namespace}`,
              true
            );
            const query = {
              ...url.query,
              language: lang,
            };
            url.set("query", query);
            return url.toString();
          },
        },
      ],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
