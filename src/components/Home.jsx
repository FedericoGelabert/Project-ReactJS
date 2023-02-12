import ItemListContainer from "./ItemListContainer"

const Welcome = () => {
    return (
        <>
            <div className="main-container">
                <img src="https://res.cloudinary.com/federicog/image/upload/v1673982917/react-project/laptop-b_tqtjqq.jpg" alt="Home Image" />
                <h2>Welcome to <span className="brand-name">BuyIt!</span></h2>
                <p>More than 100 products with 50% OFF</p>
            </div>
            <ItemListContainer greeting="Hi, we invite you to select one of our products!" />
        </>
    )
}

export default Welcome