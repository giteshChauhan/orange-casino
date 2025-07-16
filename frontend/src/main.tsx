import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import app from './app';
import './assets/global.css'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        {app()}
      </BrowserRouter>
    </React.StrictMode>
  );
