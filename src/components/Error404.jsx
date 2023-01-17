import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error-container">
            <h2 className="error-message">Rute not found.</h2>
            <div className="error-container-info">    
                <h1>Error 404</h1>
                <Link to="/">
                    <p> ⬅ Return to Home</p>
                </Link>
            </div>
        </div>
    )
}

export default Error404;