import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './useState/App.jsx'
// import NewApp from './useReducer/App.jsx'
// import './index.css'
// import Context from './useContext/layout.jsx'
// import DemoContext from './useContext/demo'
// import Stopwatch from './useRef/stopwatch'
// import App from './useEffect/app.jsx'

// //for navigation
import App from './React_router_dom/home.jsx'
import { BrowserRouter } from 'react-router-dom';

// import PromiseData from './promice/promise_comment_list.jsx'
// import PromiseData from './promice/promice_table.jsx'
// import PostData from './promice/promice_post_await'
// import {Signup} from './formik/form1.jsx'

//redux_toolkit
// import { Provider } from 'react-redux';
// import store from './redux/redux_toolkit/store';
// import App  from './redux/redux_toolkit/app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NewApp/> */}
    {/* <Context/> */}
    {/* <DemoContext/> */}
    {/* <Stopwatch /> */}
    <BrowserRouter> <App /></BrowserRouter>
    {/* <PromiseData/> */}
    {/* <PostData/> */}
   {/* <Signup/> */}
   
   {/* <Provider store={store}>
      <App/>
    </Provider> */}
  </React.StrictMode>
)
