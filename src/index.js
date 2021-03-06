import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/es/locale/fa_IR';
import store from './redux/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <App />
    </ConfigProvider>
    </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
