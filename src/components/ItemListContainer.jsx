import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const params = useParams()

    useEffect(()=> {

        fetch('../data.json')
            .then((res) => {
                const products = res.json()
                return products
            }).then((products) => {
                if(params.categoryId) {
                const filterProducts = products.filter((product) => product.category.includes(params.categoryId))               
                setProducts(filterProducts)
            } else if(!params.categoryId) {
                setProducts(products)    
            }
            }).catch((err) => {
                console.log(err)
            })

    }, [params.categoryId]);

    if(!params.categoryId) {
    return (
            <div className="itemlist-container">
                <h2 className="greeting-h2">{props.greeting}</h2>
                <hr></hr>
                <div className="itemlist">
                    <ItemList products={products}/>
                </div>
            </div>
    )          
} else if(params.categoryId === "laptop" || "tablet") {
    return (
        <div className="itemlist-container">
            <h2 className="itemlist-category">Category {params.categoryId}</h2>
            <div className="itemlist">
                <ItemList products={products}/>
            </div>
        </div>
)          
}
}


export default ItemListContainer;