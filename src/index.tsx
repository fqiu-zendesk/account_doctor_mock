import * as React from 'react';
import { render } from 'react-dom';
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import Overview from './Overview';
import AccountDetails from './AccountDetails';
import RuleSummary from './RuleSummary';

/* Optional CSS normalization with selected element resets */
import '@zendeskgarden/css-bedrock';

const rootElement = document.getElementById('root');

render(
  <div style={{ padding: DEFAULT_THEME.space.md }}>
    <ThemeProvider>
      <Overview />
      <AccountDetails />
      <RuleSummary />
    </ThemeProvider>
  </div>,
  rootElement
);
