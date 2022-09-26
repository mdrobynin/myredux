import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ReduxApp } from './reduxApp';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReduxApp />
  </StrictMode>
);
