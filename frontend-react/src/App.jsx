import React from "react";

import { RaffleContractProvider } from "./providers/RaffleContractProvider";
import Navbar from "./components/blocks/Navbar/Navbar";
import Home from "./pages/Home/Home";
import * as S from "./styles/shared/Styles";

const HomePage = () => (
  <div>
    <Navbar />
    <Home />
  </div>
);

const App = () => (
  <RaffleContractProvider>
    <HomePage />
  </RaffleContractProvider>
);

export default App;
