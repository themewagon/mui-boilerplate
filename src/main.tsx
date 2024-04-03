import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme.ts';
import SettingsProvider from 'providers/SettingsProvider';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/router';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import 'index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <SettingsProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </SettingsProvider>
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
