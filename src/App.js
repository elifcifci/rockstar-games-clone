import Header from "./Components/Header";
import Main from "./Pages/Main";
import Newswire from "./Pages/Newswire";
import Games from "./Pages/Games";
import Videos from "./Pages/Videos";
import Downloads from "./Pages/Downloads";
import { useCycle } from "framer-motion";
import Footer from "./Components/Footer/index";
import BackDrop from "./Components/BackDrop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/globalStyles";

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
          <Route path="/:id" exact element={<Newswire />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
