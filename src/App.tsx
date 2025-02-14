import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainLayout from "./pages/MainLayout";
import DishGrid from "./pages/Menu/DishGrid/DishGrid";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order/Order";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { logInUser } from "./features/user/userSlice";
import { logOutUser } from "./features/user/userSlice";

export default function App() {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email) dispatch(logInUser(user.email));
      } else {
        dispatch(logOutUser());
      }
    });
  }, []);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/menu"
              element={ <Menu children={ <DishGrid /> } /> }
              />
            <Route path="/login" element={<Login />} />
            <Route
                path="/order"
                element={isLoggedIn ? <Order /> : <Navigate to="/login" />}
              />
          </Route>
        </Routes>
      <Footer />
    </Router>
  );
}
