import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
import { ProSidebarProvider } from "react-pro-sidebar";
import reportWebVitals from './reportWebVitals';

import { App } from './components';
import { store, 
  // persistor 
} from './redux/store/store'
import { ContextProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <ContextProvider>
          <ProSidebarProvider>
            <Router>
              <App />
            </Router>
          </ProSidebarProvider>
        </ContextProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
