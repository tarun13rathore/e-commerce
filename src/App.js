import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Regis from "./components/Regis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetsils from "./components/ProductDetsils";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/product">
            <Products />
          </Route>
          <Route exact path="/register">
            <Regis />
          </Route>
          <Route exact path="/proDetail">
            <ProductDetsils />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
