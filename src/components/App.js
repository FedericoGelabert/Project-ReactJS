import Header from "./Header";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer"
const itemsInCart = 0;


function App() {
  
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting="Hi, we invite you to select one of our products!"/>
      <Footer/>
    </> 
  );
}

export default App;
export {  itemsInCart };