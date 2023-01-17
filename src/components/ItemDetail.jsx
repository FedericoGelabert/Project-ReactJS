import { useState } from "react";
// import { itemsInCart } from "./CartWidget";


const ItemDetail = ({product}) => {

    const [items, setItemsInCart] = useState(0)

    function addToCart() {
        setItemsInCart(items + 1)
    }

    if(product.category === "laptop") {
    return (
        <div key={product.id} className="itemdetail-container">
            <div className="itemdetail-img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="itemdetail-info">
                <p><span>Name:</span> {product.name}</p>
                <p><span>Brand:</span> {product.brand}</p>
                <p><span>Color:</span> {product.color}</p>
                <p><span>Screen Size:</span> {product.screen_size} Inches</p>
                <p><span>Hard Disk Size:</span> {product.hard_disk_size} GB</p>
                <p><span>Cpu Model:</span> {product.cpu_model}</p>
                <p><span>Ram Memory:</span> {product.ram_memory} GB</p>
                <p><span>Operating System: </span> {product.operating_system}</p>
                <p><span>Graphics Coprocessor: </span> {product.graphics_coprocessor}</p>

                <p className="itemdetail-price"><span>Price:</span> <span className="product-price">${product.price}</span></p>
                <button className="itemdetail-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
            
    } else if(product.category === "tablet") {
        return (
            <div key={product.id} className="itemdetail-container">
                <div className="itemdetail-img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="itemdetail-info">
                    <p><span>Name:</span> {product.name}</p>
                    <p><span>Brand:</span> {product.brand}</p>
                    <p><span>Series:</span> {product.series}</p>
                    <p><span>Screen Size:</span> {product.screen_size} Inches</p>
                    <p><span>Memory Storage:</span> {product.memory_storage} GB</p>
                    <p><span>Resolution:</span> {product.resolution} px</p>

                    <p className="itemdetail-price"><span>Price:</span> <span className="product-price">${product.price}</span></p>
                <button className="itemdetail-button" onClick={addToCart}>Add to Cart</button>
                </div>
                <p></p>
            </div>
        )
    }
}

export default ItemDetail;