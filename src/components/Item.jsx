import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div key={product.id} className="item-container">
            <img src={product.img} alt={product.name} className="item-img" />
            <p className="item-name"> <strong>{product.name}</strong> </p>
            <div className="item-price-button">
                <Link to={"/item/" + product.id}>
                    <button className="item-button">View More</button>
                </Link>
                <p className="item-price"><s>{product.price_discount}</s> <strong>${product.price}</strong> </p>
            </div>
        </div>
    )
}

export default Item;