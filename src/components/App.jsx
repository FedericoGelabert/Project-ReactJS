import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";
import CartContext from "./CartContext";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <CartContext>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;