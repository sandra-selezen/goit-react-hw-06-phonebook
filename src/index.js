import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    whiteColor: "hsl(0, 0%, 100%)",
    blackColor: "hsl(0, 0%, 0%)",
  },
  borderRadius: "5px",
  duration: "250ms",
  timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
