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

export const LoginContext = createContext(false);

export default function App() {
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

  if (!isLogged) {
    return (
      <Router>
      <div className="App">
          <LoginContext.Provider value={isLogged}>
            <Header />
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
            <Header />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/menu"
                  element={
                    <Menu
                      children={
                        <DishGrid />
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
