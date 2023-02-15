import ItemCount from "./ItemCount";
import { useCart } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ItemDetail = ({ product }) => {

    const { addProduct } = useCart()
    const [cartLink, setCartLink] = useState(false)

    function onAdd(quantity) {
        addProduct(product, quantity)
        setCartLink(true)
    }

    if (product.category === "laptop") {
        return (
            <div key={product.id} className="itemdetail-container">
                <div className="itemdetail-img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="itemdetail-info">
                    <p className="itemdetail-name">{product.name}</p>
                    <hr style={{ marginBottom: 10 }} />
                    <p><span>Brand:</span> {product.brand}</p>
                    <p><span>Color:</span> {product.color}</p>
                    <p><span>Screen Size:</span> {product.screen_size} Inches</p>
                    <p><span>Hard Disk Size:</span> {product.hard_disk_size} GB</p>
                    <p><span>Cpu Model:</span> {product.cpu_model}</p>
                    <p><span>Ram Memory:</span> {product.ram_memory} GB</p>
                    <p><span>Operating System: </span> {product.operating_system}</p>
                    <p><span>Graphics Coprocessor: </span> {product.graphics_coprocessor}</p>
                    <div className="product-price-container">
                        <p><span className="product-price"> ${product.price}</span><s>{product.price_discount}</s></p>
                    </div>
                    {cartLink ?
                        <div className="go-to-container">
                            <Link to="/cart" className="go-to-cart-button">Go to Cart 🠮</Link>
                            <Link to="/" className="go-to-home">Continue shopping </Link>
                        </div>
                        : <div>
                            <ItemCount stock={product.stock} onAdd={onAdd} />
                            <p className="itemdetail-stock"><span>Stock:</span> {product.stock}</p>
                        </div> 
                        }
                </div>
            </div>
        )                    

    } else if (product.category === "tablet") {
        return (
            <div key={product.id} className="itemdetail-container">
                <div className="itemdetail-img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="itemdetail-info">
                    <p className="itemdetail-name">{product.name}</p>
                    <hr style={{ marginBottom: 10 }} />
                    <p><span>Brand:</span> {product.brand}</p>
                    <p><span>Series:</span> {product.series}</p>
                    <p><span>Screen Size:</span> {product.screen_size} Inches</p>
                    <p><span>Memory Storage:</span> {product.memory_storage} GB</p>
                    <p><span>Resolution:</span> {product.resolution} px</p>

                    <div className="product-price-container">
                        <p><span className="product-price"> ${product.price}</span><s>{product.price_discount}</s></p>
                    </div>
                    {cartLink ?
                        <div className="go-to-container">
                            <Link to="/cart" className="go-to-cart-button">Go to Cart 🠮</Link>
                            <Link to="/" className="go-to-home">Continue shopping </Link>
                        </div>
                        : <div>
                        <ItemCount stock={product.stock} onAdd={onAdd} />
                        <p className="itemdetail-stock"><span>Stock:</span> {product.stock}</p>
                    </div> 
                    }
                </div>
            </div>
        )
    }
}

export default ItemDetail;