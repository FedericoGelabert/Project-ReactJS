
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {

        fetch('../data.json')
            .then((res) => {
                const product = res.json()
                return product
            }).then((product) => {
                if(params.id) {
                    const filterProducts = product.find((product) => product.id == params.id)
                    setProduct(filterProducts)
            } else if (!params.id) {
                    console.log("Not Founded")
            }
            }).catch((err) => {
                console.log(err)
            })
    
    }, [params.id])


    return (
        <>
            <p className="itemdetails">Product Details</p>
            <ItemDetail product={product} key={product.id}/>
        </>
    )
}


export default ItemDetailContainer;