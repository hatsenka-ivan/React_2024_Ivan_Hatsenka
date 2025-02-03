import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DishGrid from "./pages/Menu/DishGrid/DishGrid";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Cart } from "./types/global.types";

export const LoginContext = createContext(false);

export default function App() {
  const [dishes, setDishes] = useState<Cart>({});
  const [quantity, setQuantity] = useState<number>(0);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  function handleAddToCart(newDishes: Cart): void {
    const dishIds = Object.keys(newDishes);

    const updatedDishes = dishIds.reduce((acc, id) => {
      const existingQuantity = dishes[id]?.quantity || 0;
      const additionalQuantity = newDishes[id].quantity;
      acc[id] = { quantity: existingQuantity + additionalQuantity };
      return acc;
    }, {} as Cart);

    setDishes((prev) => ({ ...prev, ...updatedDishes }));

    const totalNewQuantity = dishIds.reduce(
      (total, id) => total + newDishes[id].quantity,
      0,
    );
    setQuantity((prev) => prev + totalNewQuantity);
  }

  if (!isLogged) {
    return (
      <Router>
      <div className="App">
          <LoginContext.Provider value={isLogged}>
            <Header dishesQuantity={quantity} />
            <main className="main">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </LoginContext.Provider>
      </div>
    </Router>
  )}

  return (
    <Router>
      <div className="App">
          <LoginContext.Provider value={isLogged}>
            <Header dishesQuantity={quantity} />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/menu"
                  element={
                    <Menu
                      children={
                        <DishGrid handleAddToCart={handleAddToCart} />
                      }
                    />
                  }
                />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </LoginContext.Provider>
      </div>
    </Router>
  );
}
