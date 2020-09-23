// @ts-nocheck
import React from "react";
import {IntlProvider} from 'react-intl'
import LanguageContext from "./LanguageContext";

class SimpleLocalize extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: undefined,
      language: "en"
    };
  }

  componentDidMount() {
    this.setupLanguageMessages(this.state.language);
  }

  setupLanguageMessages = (language) => {
    const projectToken = "5e13e3019cff4dc6abe36009445f0883";
    const messages = `https://cdn.simplelocalize.io/${projectToken}/_latest/${language}`;
    return fetch(messages)
      .then((data) => data.json())
      .then((messages) => this.setState({language, messages}));
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          changeLanguage: (language) => this.setupLanguageMessages(language)
        }}>
        <IntlProvider
          locale={this.state.language}
          messages={this.state.messages}>
          {this.state.messages ? this.props.children : null}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export default SimpleLocalize;
