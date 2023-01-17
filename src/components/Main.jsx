import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Error404 from "./Error404"
import Home from "./Home"

const Main = () => {
    return (
        <main>
            <Routes>
                {/* Within Home component is located ItemListContainer. */}
                <Route path="/" element={<Home/>}> </Route>  
                <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>       
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/favourites" element={<h2>Favourites</h2>}></Route>
                <Route path="*" element={<Error404/>}></Route>
            </Routes>
        </main>
    )
}

export default Main

