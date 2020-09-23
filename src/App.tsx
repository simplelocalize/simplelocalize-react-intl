import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            {t("USE_BUTTONS_BELOW")}
          </p>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
          <button onClick={() => i18n.changeLanguage("pl")}>Polish</button>
          <hr/>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("DESCRIPTION")}
        </p>

        <a
          className="App-link"
          href="https://simplelocalize.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("LEARN_MORE")}
        </a>
      </header>
    </div>
  );
}

export default App;
