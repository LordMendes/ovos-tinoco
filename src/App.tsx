import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarContextProvider } from "./contexts/NavbarDropdownMenuContext";
import ContactPage from "./pages/contato";
import Home from "./pages/home";
import InstitutionalPage from "./pages/institucional";
import ProductPage from "./pages/produtos";
import RecipePage from "./pages/receitas";
import Fonts from "./styles/fonts";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <NavbarContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/institucional" exact component={InstitutionalPage} />
            <Route path="/contato" exact component={ContactPage} />
            <Route path="/receitas" exact component={RecipePage} />
            <Route path="/produtos" exact component={ProductPage} />
          </Switch>
        </NavbarContextProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;