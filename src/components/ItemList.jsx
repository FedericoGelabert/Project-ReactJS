import Item from "./Item";

const ItemList = ({ products }) => {

    return (
        <>
            {products.map((product) => {
                return (
                    <Item product={product} key={product.id} />
                )
            }
            )}
        </>
    )
}

export default ItemList;