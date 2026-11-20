import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props){
    const [qty, setQty] = useState (1);

    function calculateTotal(){
        let total = props.data.price * qty;
        // CHANGED (Class 1): .toFixed(2) always shows 2 decimals (20 -> "20.00")
        return total.toFixed(2);
    }

    function handleQtyChange(quantity){
        console.log(quantity);
        setQty(quantity);
    }

    function handleAdd(){
        props.onAdd({ ...props.data, quantity: qty})
    }

    // Calculate the Total Price using the data that we get from the QP
    return(
        // CHANGED (Class 1): Bootstrap classes added
        //   card        = Bootstrap card: white box, light border, rounded corners
        //   text-center = center everything inside
        //   product     = our own class (Product.css)
        <div className="product card text-center">
            {/* CHANGED (Class 1): alt = text shown if the image can't load (also read by screen readers) */}
            <img src={"/images/" + props.data.image} alt={props.data.title}></img>
            <h5>{props.data.title}</h5>
            {/* CHANGED (Class 1): labels added so the user knows which number is which.
                text-secondary = gray text | fw-bold = bold */}
            <label className="text-secondary">Price: ${props.data.price.toFixed(2)} </label>
            <label className="fw-bold">Total: ${calculateTotal()} </label>
            <QuantityPicker onChange={handleQtyChange}/>
            {/* CHANGED (Class 1): btn = Bootstrap button | btn-dark = dark/black button */}
            <button className="btn btn-dark" onClick={handleAdd}>Add</button>
        </div>
    );
}
export default Product;
