[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### Introduction

Welcome to this boilerplate to quickly start [React](https://react.dev/) applications with [Splunk](https://www.splunk.com/).

This boilerplate is not using the [Splunk UI framework](https://splunkui.splunk.com/home), but instead uses [Material-UI (MUI)](https://mui.com/).
Nevertheless, this example contains a [simple Splunk dashboard](src/main/webapp/pages/app/src/dashboards/def1.json) that has been generated with the Splunk Dashboard Studio to show how to integrate dashboards into a MUI application.

The reasons for using MUI over Splunk UI are:

1.  Material-UI (MUI) is an incredibly popular set of React components that follow Google's Material Design guidelines. It is used by many companies and has a large community.
2.  MUI provides excellent customization capabilities. You can customize the design of your app by creating a theme and applying it to your components. In fact a lot of companies already have an existing MUI theme that they might want to use in their Splunk apps.

> Note: We're using [@splunk/dashboard](https://splunkui.splunk.com/Packages/dashboard-docs/) version 24, as 25 doesn't work with React 18. 

### Quick Start

1.  Clone the repo

        $ git clone https://github.com/schiesser-it/splunk-react-mui-boilerplate
        $ cd splunk-react-mui-boilerplate

Optionally, start the repository in a [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers). The one provided includes the necessary Node version 18.

2.  Install dependencies

        $ yarn install

3.  Start dev server

        $ yarn start

4.  Start Splunk

        $ docker-compose up

5.  Open Splunk in your browser

        http://localhost:8000/en-US/app/React-MUI-App/startPage

### Other Useful Scripts

- `yarn format` — Runs Prettier for all files.
- `yarn lint` — Runs ESLint check for all files.
- `yarn lint:fix` — Runs ESLint check for all files and fixes all fixable errors.
- `yarn test` — Runs Jest tests.
- `yarn test:watch` — Runs Jest tests in watch mode.