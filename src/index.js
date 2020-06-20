import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(reducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
