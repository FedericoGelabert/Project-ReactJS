import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1)
    const [isActive, setIsActive] = useState(false)

    function handleConfirm() {
        if (counter <= stock) {
            onAdd(counter)
        } else {}
    }

    function handleSure() {
        setIsActive(current => !current)
    }

    function handleAdd() {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    function handleSubtract() {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="counter-container">
            <div className="counter">
                <button className="counter-subtract" onClick={handleSubtract}>-</button>
                <p>{counter}</p>
                <button className="counter-add" onClick={handleAdd}>+</button>
            </div>
            <button className="itemdetail-button" onClick={handleSure}>Buy</button>
            <button className={isActive ? 'confirm-active' : 'confirm-disable'} onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default ItemCount;