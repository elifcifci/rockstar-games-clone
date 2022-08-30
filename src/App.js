import Header from "./Components/Header";
import Main from "./Pages/Main";
import Newswire from "./Pages/Newswire";
import Games from "./Pages/Games";
import Videos from "./Pages/Videos";
import Downloads from "./Pages/Downloads";
import Support from "./Pages/Support";
import SocialClub from "./Pages/SocialClub";
import Launcher from "./Pages/Launcher";
import Store from "./Pages/Store";

import Footer from "./Components/Footer/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/newswire" exact element={<Newswire />} />
          <Route path="/games" exact element={<Games />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/downloads" exact element={<Downloads />} />
          <Route path="/support" exact element={<Support />} />
          <Route path="/socialClub" exact element={<SocialClub />} />
          <Route path="/launcher" exact element={<Launcher />} />
          <Route path="/store" exact element={<Store />} />
          <Route path="/:id" exact element={<Newswire />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
