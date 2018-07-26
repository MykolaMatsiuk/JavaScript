import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import "./assets/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store, history } from "./redux/store";

import { getUser } from "./redux/actions/actions";

if (localStorage.Auth) {
  //update localStorage
  store.dispatch({
    type: "SET_USER",
    user: JSON.parse(localStorage.Auth)
  });

  var _id = JSON.parse(localStorage.Auth)._id;
  getUser(_id).then(res => {
    store.dispatch({ type: "SET_USER", user: res });
  });
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
