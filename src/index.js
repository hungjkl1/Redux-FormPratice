import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";
import SimpleForm from "./SimpleForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
  await sleep(500);
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};
function App() {
  return (
    <div className="App mt-2">
      <SimpleForm onSubmit={showResults} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
