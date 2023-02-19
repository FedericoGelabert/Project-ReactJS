import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    const params = useParams()

    if(load === true) {
        toast.success("Products loaded :)", {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            draggable: false,
            theme: "dark",
        })
    }

    useEffect(() => {

        toast.info("Loading products...", {
            position: "bottom-right",
            closeOnClick: true,
            draggable: false,
            theme: "dark",
        })

        const productsCollection = collection(db, "products")
        const firestoreOrder = getDocs(productsCollection)

        firestoreOrder
            .then((res) => {
                setLoad(true)
                toast.dismiss()

                if (params.categoryId) {
                    const products = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    const filterProducts = products.filter((product) => product.category.includes(params.categoryId))
                    setProducts(filterProducts)
                } else if (!params.categoryId) {
                    const products = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setProducts(products)
                }

            })
            .catch((err) => {
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
                <ItemList products={products} />
            </div>
        )
    } else if (params.categoryId === "laptop" || "tablet") {
        return (
            <div className="itemlist-container">
                <h2 className="itemlist-category">Category {params.categoryId}</h2>
                <ItemList products={products} />
            </div>
        )
    }
}

export default ItemListContainer;