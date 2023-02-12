import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Favourites from "./Favourites"
import Error404 from "./Error404"
import Home from "./Home"
import Cart from "./Cart"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                <Route path="/favourites" element={<Favourites />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </main>
    )
}

export default Main

