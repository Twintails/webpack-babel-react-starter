import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { styleLog } from "./utils"

import { PageLayout } from "./js/views/PageLayout.jsx";
import { Form } from "Containers/FormContainer.jsx";
import { Items } from "Components/presentational/Items.jsx";

import store from "Store";

import 'Styles/main.scss'

const App = () => {
  return (
    <PageLayout><Form /><Items /></PageLayout>
  );
};

export default App;

const appContainer = document.getElementById("App")
!appContainer && console.log(`%cLoading App failed: ${appContainer}`, styleLog("red"))

appContainer && (
  console.log(`%cLoading App in: ${appContainer.localName}.${appContainer.id}`, styleLog("green")),
  render(<Provider store={store}><App /></Provider>, appContainer)
)
