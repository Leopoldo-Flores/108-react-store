import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {

    const [quantity, setQuantity] = useState (1);
    //    const quantity = 1;
    //     name       function                 initial value
    // let [varName, funcName] = useState();
    function handleDecrease(){
        let prevValue = quantity - 1;
        // CHANGED (Class 1): was quantity>0, which let the quantity go down to 0.
        // Now it only goes down while it's above 1.
        if(quantity>1){
        setQuantity(prevValue);
        props.onChange(prevValue);//Notify the parent
        }
    }
    function handleIncrease(){
        let nextVal = quantity+1;
        // quantity = 1; 
        setQuantity(nextVal);
        props.onChange(nextVal);//Notify the parent
    }

    return(
        <div className="quantity-picker">
            {/* CHANGED (Class 1): Bootstrap classes added (your own classes are still there)
                btn btn-dark = dark Bootstrap button | btn-sm = small button
                disabled={quantity === 1} = the minus button is grayed out at 1 */}
            <button className="btn-minus btn btn-sm btn-dark" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            {/* CHANGED (Class 1): mx-2 = margin left + right 8px (space around the number) */}
            <label className="label-qty mx-2">{quantity}</label>
            <button className="btn-plus btn btn-sm btn-dark" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
