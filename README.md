## Demo
[Live demo](https://react-intl.simplelocalize.io)

## Overview

Sample application with 3 languages. The application is built with React 18, react-intl. It uses React Context to keep translation messages
and FormattedMessage components with **predefined message IDs.** 

```tsx
<FormattedMessage id="USE_BUTTONS_BELOW" />
```
 
To **use auto-generated message IDs**, please [eject the app](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)
 and follow the [Bundling with FormatJS](https://formatjs.io/docs/guides/bundler-plugins/) instructions.

## Built with
- Create React App
- React 18+
- TypeScript 4+
- React Hooks
- React Context
- React Intl - library for internationalization 
- SimpleLocalize - translation management system

## Extracting translations

In the project directory, you can run:
### `npm run i18n:extract`
to extract messages from source code to `lang/en.json` file.


## Uploading translations

Upload translations to SimpleLocalize using [SimpleLocalize CLI](https://simplelocalize.io/docs/cli/get-started/).
Please provide a valid API Key in `simplelocalize.yml` configuration file before you start. [Get API Key](https://simplelocalize.io/)

### `curl -s https://get.simplelocalize.io/2.0/install | bash`
to install SimpleLocalize CLI.

### `npm run i18n:upload`
to upload messages to the SimpleLocalize service.

### `npm run i18n:download`
to download messages locally from the SimpleLocalize service. This is optional and it requires to change SimpleLocalize.tsx 
to load translations from local files.

## Running application locally

In the project directory, you can run:

### `npm install && npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

- [Integration guide](https://simplelocalize.io/docs/integrations/format-js/)
- [My blog post](https://simplelocalize.io/blog/posts/formatjs-reactjs-internationalization/)
- [FormatJS docs](https://formatjs.io/docs)
