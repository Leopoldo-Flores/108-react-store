import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    //    name      function to change it      initial value
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        let prevValue = quantity - 1;
        setQuantity(prevValue);
        props.onChange(prevValue); // Notify the parent (Product)
    }

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal); // Notify the parent (Product)
    }

    return (
        <div className="quantity-picker">
            {/* Bootstrap buttons
                btn btn-dark = dark Bootstrap button
                btn-sm       = small button
                disabled={quantity === 1} = grayed out at 1, so the quantity never reaches 0 */}
            <button className="btn btn-sm btn-dark" onClick={handleDecrease} disabled={quantity === 1}>-</button>

            {/* mx-2 = margin left + right size 2 (0.5rem = 8px): space between the number and the buttons */}
            <label className="mx-2">{quantity}</label>

            <button className="btn btn-sm btn-dark" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
