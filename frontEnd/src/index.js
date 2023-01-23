import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import  {store, persistor}  from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={'loading..'} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>

);


/* <PersistGate loading={'loading'} persistor={persistor}></PersistGate>
  </PersistGate> */


  