import React from 'react';
import { render } from 'react-dom';

import { createStaticURL } from '@splunk/splunk-utils/url';
import $script from 'scriptjs';

import App from './App';

function getLayoutApi(callback) {
  const url = createStaticURL('build/api/layout.js');

  if (window.requirejs) {
    window.requirejs([url], callback);
  } else {
    $script(url, () => {
      // eslint-disable-next-line no-underscore-dangle
      callback(window.__splunk_layout__);
    });
  }
}

// render below Splunk toolbar
getLayoutApi((layoutApi) => {
  let containerEl;

  if (layoutApi) {
    containerEl = layoutApi.create().getContainerElement();
  } else {
    containerEl = document.createElement('div');
    document.body.appendChild(containerEl);
  }

  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    containerEl,
  );
});
