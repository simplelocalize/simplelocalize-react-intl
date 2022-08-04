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
              <FormattedMessage id="USE_BUTTONS_BELOW"
                                defaultMessage="Use buttons below"
                                description="Here you can describe the translation key. This will be treated as 'code description'." />
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

          <div className="App-links">
            <a
              className="App-link"
              href="https://github.com/simplelocalize/simplelocalize-react-intl"
            >
              Github Repository
            </a>
            <div className="separator">|
            </div>
            <a
              className="App-link"
              href="https://simplelocalize.io/blog/posts/formatjs-reactjs-internationalization/"
            >Read integration post</a>
            <div className="separator">|
            </div>
            <a
              className="App-link"
              href="https://simplelocalize.io/docs/integrations/format-js/"
            >
              Read integration docs
            </a></div>

        </header>
      </div>)}
    </LanguageContext.Consumer>
  );
}

export default App;
