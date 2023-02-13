import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const params = useParams()

    useEffect(() => {

        const productsCollection = collection(db, "products")
        const firestoreOrder = getDocs(productsCollection)
        console.log(firestoreOrder)

        firestoreOrder
            .then((res) => {
                if(params.categoryId) {
                    const products = res.docs.map(doc => ( {...doc.data(), id: doc.id}))
                    const filterProducts = products.filter((product) => product.category.includes(params.categoryId))
                    setProducts(filterProducts)
                    console.log(products)
                } else if(!params.categoryId){
                    const products = res.docs.map(doc => ( {...doc.data(), id: doc.id}))
                    setProducts(products)
                }
            })
            .catch((err)=> {
                toast.error(err, {
                    position: "bottom-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: false,
                    theme: "dark",
                })
            })
    }, [params.categoryId]);

    if (!params.categoryId) {
        return (
            <div className="itemlist-container">
                <div className="itemlist">
                    <ItemList products={products} />
                </div>
            </div>
        )
    } else if (params.categoryId === "laptop" || "tablet") {
        return (
            <div className="itemlist-container">
                <h2 className="itemlist-category">Category {params.categoryId}</h2>
                <div className="itemlist">
                    <ItemList products={products} />
                </div>
            </div>
        )
    }
}


export default ItemListContainer;