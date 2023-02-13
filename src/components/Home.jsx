import ItemListContainer from "./ItemListContainer"

const Welcome = () => {
    return (
        <>
            <div className="main-container">
                <img src="https://res.cloudinary.com/federicog/image/upload/v1676228710/react-project/laptop-b_l2ljnn.jpg" alt="Laptop background" />
                <h2>Welcome to <span className="brand-name">BuyIt!</span></h2>
                <p>More than 100 products with 50% OFF</p>
            </div>
            <ItemListContainer />
        </>
    )
}

export default Welcome