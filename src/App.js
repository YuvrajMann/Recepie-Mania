import React from "react";
import "./App.css";
import Main from "./Components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Main></Main>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
