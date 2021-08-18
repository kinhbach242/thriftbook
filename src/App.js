import "./scss/main.scss";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import CatbooksDetail from "./pages/CatbooksDetail";
import Cart from "./components/Cart";
import BookDetail from "./pages/BookDetail";
import Unsplash from "./pages/Unsplash";
import Task from "./pages/Task";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Cart />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sanpham/" exact component={Products} />
          <Route path="/login/" component={Login} />
          <Route path="/theloai/:id" component={CatbooksDetail} />
          <Route path="/sanpham/:id" component={BookDetail} />
          <Route path="/unsplash" component={Unsplash} />
          <Route path="/task" component={Task} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
