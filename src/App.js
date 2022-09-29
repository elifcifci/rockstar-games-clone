//Pages
import Main from "./pages/Main";
import Newswire from "./pages/Newswire";
import Games from "./pages/Games";
import Videos from "./pages/Videos";
import Downloads from "./pages/Downloads";

//Components
import Header from "./components/Header";
import BackDrop from "./components/BackDrop";
import Footer from "./components/Footer/index";

import { useCycle } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const toggleBackDrop = () => toggleOpen();

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header isOpen={isOpen} toggle={toggleBackDrop} />
        <BackDrop isOpen={isOpen} toggle={toggleBackDrop} />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/newswire" exact element={<Newswire />} />
          <Route path="/games" exact element={<Games />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/downloads" exact element={<Downloads />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
