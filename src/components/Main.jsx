import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Contact from "./Contact"
import Error404 from "./Error404"
import Home from "./Home"
import Cart from "./Cart"
import Checkout from "./Checkout"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </main>
    )
}

export default Main

