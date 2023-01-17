import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";
const itemsInCart = 0;


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
export { itemsInCart }