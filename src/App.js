//Pages
import Main from "./pages/Main";
import Newswire from "./pages/Newswire";
import Games from "./pages/Games";
import Videos from "./pages/Videos";
import Downloads from "./pages/Downloads";

//Components
import Header from "./components/Header";
import BackDrop from "./components/Backdrop";
import Footer from "./components/Footer/index";

//Context
import { WindowSizeProvider } from "./context/WindowSizeContext";
import { ToggleOpenCloseProvider } from "./context/ToggleOpenCloseContext";

import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <WindowSizeProvider>
          <ToggleOpenCloseProvider>
            <Header />
            <BackDrop />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/newswire" exact element={<Newswire />} />
              <Route path="/games" exact element={<Games />} />
              <Route path="/videos" exact element={<Videos />} />
              <Route path="/downloads" exact element={<Downloads />} />
            </Routes>
            <Footer />
          </ToggleOpenCloseProvider>
        </WindowSizeProvider>
      </Router>
    </div>
  );
}

export default App;
