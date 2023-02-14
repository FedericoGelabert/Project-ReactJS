
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { toast } from 'react-toastify';
import { db } from "../firebase";
import 'react-toastify/dist/ReactToastify.css';
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, "products")
        const reference = doc(productsCollection, id)
        const firebaseOrder = getDoc(reference)

        firebaseOrder
            .then((res) => {
                const product = res.data()
                setProduct(product)
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

    }, [id])

    return (
        <div>
            <p className="itemdetails">Product Details</p>
            <ItemDetail product={product} key={product.id} />
        </div>
    )
}

export default ItemDetailContainer;