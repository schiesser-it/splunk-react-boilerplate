[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Splunk React Boilerplate

Welcome to this boilerplate to quickly start [React](https://react.dev/) applications with [Splunk](https://www.splunk.com/). Use [Splunk UI](https://splunkui.splunk.com/) for the UI and
add no-code Splunk Dashboards to your app.

<img width="1305" alt="Screen Shot 2023-06-23" src="./static/screenshot.png"/>

## Overview

- 🚀 [Quickstart](#quickstart)
- 🧐 [Advantages to @splunk/create](#advantages-to-splunkcreate)
- 💻 [Contribute to this repo](#how-to-contribute-to-this-repo)

## Quickstart

The simplest way to try out this boilerplate is to test it out locally. Here are the steps to get started.

### 1. Fork and clone repo

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com:[YOUR_GITHUB_ACCOUNT_NAME]/splunk-react-boilerplate.git
```

Optionally, start the repository in a [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers). The one provided includes the necessary Node version 18, otherwise, [make sure that Node 18 is installed](https://nodejs.org/en/download).

### 2. Install dependencies

```
cd splunk-react-boilerplate
yarn install
```

### 3. Run app locally

a. **Start dev server**

```
yarn start
```

b. **Start Splunk**

```
docker-compose up
```

c. **Open Splunk in your browser**

http://localhost:8000/en-US/app/React-App/startPage

### 4. Build the Splunk app

You can use `yarn package` to build the app in a folder of your choice:

```
yarn package /tmp/React-App.tgz
```

If you push a tag, [a Github action](.github/workflows/release.yaml) will automatically build the app and upload it to [Github Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases).

## Advantages to @splunk/create

This starter kit provides an alternative to the [`@splunk/create`](https://www.npmjs.com/package/@splunk/create) package. It has the following advantages:

- 📦 Simplified Package Structure

  - The root folder contains the Splunk app. Simply `git clone` into your `$SPLUNK_HOME/etc/apps` folder, run the [build](#4-build-the-splunk-app), and you're ready to go.
  - This is a single package repo without the overhead of [lerna](https://lerna.js.org/).

- 🛠️ Easier Development

  - The package comes with a [`docker-compose.yml`](./docker-compose.yml) to start Splunk locally.
  - It also contains a [`devcontainer.json`](./.devcontainer/devcontainer.json) to start the app in a [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers).

- 🚀 Streamlined Deployment

  - The package includes a [Github action](./.github/workflows/release.yaml) to build and upload the app to Github Releases.

- 🖥️ Practical Code Templates

  - The package contains a [Splunk dashboard](./src/pages/startPage/dashboards/def1.json) (generated with the Splunk Dashboard Studio) to demonstrate the integration into a SplunkUI application.
  - You can modify [`index.jsx`](./src/pages/startPage/index.jsx), for example, to render the app without the Splunk toolbar.

- 🔧 Latest Dependencies
  - Webpack 5
  - Eslint 8
  - Prettier 2
  - Jest 25
  - Babel 7

## How to contribute to this repo

### Code contribution workflow

You can fork this repo, make changes, and create a pull request. Add **@marcusschiesser** as a reviewer.

If you are new to contributing on Github, here is a step-by-step guide:

1. Click on `Fork` on the top right of this page
2. Work on your change and push it to your forked repo. Now when you navigate to the forked repo's UI, you should see a "Contribute" button.
3. Click on "Contribute" -> "Open Pull Request".
4. Once you have a pull request, you can add reviewers.

### Other contributions

Feel free to open feature requests, bug reports, etc under Issues.
