import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './core-redux/App.js'
import App from './redux-toolkit/app.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)