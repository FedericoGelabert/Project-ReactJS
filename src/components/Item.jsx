import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div key={product.id} className="item-container">
            <img src={product.img} alt={product.name} className="item-img"/>
            <p className="item-name"><strong>Name:</strong> {product.name} </p>
            <p className="item-price"><strong>Price:</strong> ${product.price} </p>
            <Link to={"/item/" + product.id}>
                <button className="item-button">View More</button>
            </Link>
        </div>
    )
}

export default Item;