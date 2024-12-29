import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      productsQuantity: 0,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart({ products = {} }) {
    let productsQuantity = 0;
    const updateState = {};
    for (let key in products) {
      const product = products[key];
      const existingProduct = this.state.products[key];
      productsQuantity += product.quantity;
      updateState[key] = {
        price: existingProduct ? existingProduct.price : product.price,
        quantity:
          (existingProduct ? existingProduct.quantity : 0) + product.quantity,
      };
    }

    this.setState((prevState) => ({
      products: {
        ...prevState.products,
        ...updateState,
      },
      productsQuantity: prevState.productsQuantity + productsQuantity,
    }));
  }

  render() {
    return (
      <div className="App">
        <Header productsQuantity={this.state.productsQuantity} />
        <Main handleAddToCart={this.handleAddToCart} />
        <Footer />
      </div>
    );
  }
}

export default App;
