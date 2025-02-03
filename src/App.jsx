import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import useFetch from "./useFetch";
import HeaderCart from "./components/HeaderCart/HeaderCart";
import MainProductGrid from "./components/MainProductGrid/MainProductGrid";

export default function App() {
  const [data] = useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1");
  const [products, setProducts] = useState({});
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart({ newProducts = {} }) {
    const id = Object.keys(newProducts)[0];
    const updateQuantity = newProducts[id].quantity;
    const updateProducts = {};

    updateProducts[id] = {
      quantity:
        (products[id] ? products[id].quantity : 0) + newProducts[id].quantity,
    };

    setProducts((prev) => {
      return {
        ...prev,
        ...updateProducts,
      };
    });

    setQuantity((prev) => prev + updateQuantity);
  }

  return (
    <div className="App">
      <Header>
        <HeaderCart productsQuantity={quantity} />
      </Header>
      <Main>
        <MainProductGrid data={data} handleAddToCart={handleAddToCart} />
      </Main>
      <Footer />
    </div>
  );
}
