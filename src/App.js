// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage} from "react-intl";
import LanguageContext from "./LanguageContext";


function App() {

  return (
    <LanguageContext.Consumer>
      {context => (<div className="App">
        <header className="App-header">
          <div>
            <h1>SimpleLocalize.io ⚡️ FormatJS</h1>
            <p>
              <FormattedMessage id="USE_BUTTONS_BELOW"/>
            </p>
            <button onClick={() => context.changeLanguage("en")}>English</button>
            <button onClick={() => context.changeLanguage("es")}>Spanish</button>
            <button onClick={() => context.changeLanguage("pl")}>Polish</button>
            <hr/>
          </div>

          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            <FormattedMessage id="DESCRIPTION"/>
          </p>

          <a
            className="App-link"
            href="https://github.com/simplelocalize/simplelocalize-react-intl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="OPEN_GITHUB_REPOSITORY"/>
          </a>
        </header>
      </div>)}
    </LanguageContext.Consumer>
  );
}

export default App;
