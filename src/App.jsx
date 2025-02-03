import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DishGrid from "./pages/Menu/DishGrid/DishGrid";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [dishes, setDishes] = useState({});
  const [quantity, setQuantity] = useState(0);

  function handleAuth() {
    setIsAuth(true);
  }

  function handleAddToCart({ newDishes = {} }) {
    const id = Object.keys(newDishes)[0];
    const updateQuantity = newDishes[id].quantity;
    const updateDishes = {};

    updateDishes[id] = {
      quantity:
        (dishes[id] ? dishes[id].quantity : 0) + newDishes[id].quantity,
    };

    setDishes((prev) => {
      return {
        ...prev,
        ...updateDishes,
      };
    });

    setQuantity((prev) => prev + updateQuantity);
  }

  return (
    <Router>
      <div className="App">
        <Header dishesQuantity={quantity} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <Menu>
                  <DishGrid handleAddToCart={handleAddToCart} />
                </Menu>
              }
            />
            <Route path="/login" element={<Login handleAuth={handleAuth} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
