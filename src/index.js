import React from "react";
import ReactDOM from "react-dom";

import PageLayout from "./js/views/PageLayout.jsx";
import FormContainer from "Containers/FormContainer.jsx";

import 'Styles/main.scss'

const App = () => {
  return (
    <PageLayout><FormContainer /></PageLayout>
  );
};

export default App;

const appContainer = document.getElementById("App")
console.log(`App Loaded in: ${appContainer.localName}.${appContainer.id}`)
appContainer ? ReactDOM.render(<App />, appContainer): false
