import Item from "./Item";

const ItemList = ({ products }) => {

    return (
        <div className="itemlist">
            {products.map((product) => {
                return (
                    <Item product={product} key={product.id} />
                )
            }
            )}
        </div>
    )
}

export default ItemList;