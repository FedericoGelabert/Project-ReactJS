
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {

        fetch('../data.json')
            .then((res) => {
                const product = res.json()
                return product
            }).then((product) => {
                if (params.id) {
                    const filterProducts = product.find((product) => product.id == params.id)
                    setProduct(filterProducts)
                } else if (!params.id) {
                    toast.error('Not founded.', {
                        position: "bottom-right",
                        autoClose: 2000,
                        closeOnClick: true,
                        draggable: false,
                        theme: "dark",
                    })
                }
            }).catch((err) => {
                toast.error(err, {
                    position: "bottom-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: false,
                    theme: "dark",
                })
            })

    }, [params.id])


    return (
        <div>
            <p className="itemdetails">Product Details</p>
            <ItemDetail product={product} key={product.id} />
        </div>
    )
}


export default ItemDetailContainer;