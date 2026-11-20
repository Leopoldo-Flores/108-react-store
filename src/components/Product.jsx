import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props) {
    // qty = how many of this product the user picked (starts at 1)
    const [qty, setQty] = useState(1);

    // Calculate the Total Price using the quantity we get from the QuantityPicker
    function calculateTotal() {
        let total = props.data.price * qty;
        // .toFixed(2) always shows 2 decimals (20 -> "20.00")
        return total.toFixed(2);
    }

    // QuantityPicker calls this every time + or - is clicked
    function handleQtyChange(quantity) {
        setQty(quantity);
    }

    // Send a COPY of the product, plus the chosen quantity, up to Catalog
    function handleAdd() {
        props.onAdd({ ...props.data, quantity: qty });
    }

    // Bootstrap classes on the outer <div>:
    //   card    = Bootstrap card: white box with a light border and rounded corners
    //   product = our own class (Product.css) that sets the card's width
    return (
        <div className="card product">
            {/* card-img-top = image that fits the top of the card */}
            <img src={"/images/" + props.data.image} className="card-img-top" alt={props.data.title} />

            {/* card-body   = the padded area inside the card
                text-center = center the text */}
            <div className="card-body text-center">
                {/* card-title = card heading spacing */}
                <h5 className="card-title">{props.data.title}</h5>

                {/* text-secondary = gray text | mb-1 = margin-bottom size 1 (0.25rem = 4px) */}
                <p className="text-secondary mb-1">{props.data.category}</p>
                <p className="mb-1">Price: ${props.data.price.toFixed(2)}</p>

                {/* fw-bold = font-weight bold */}
                <p className="fw-bold">Total: ${calculateTotal()}</p>

                <QuantityPicker onChange={handleQtyChange} />

                {/* btn      = Bootstrap button base style
                    btn-dark = dark/black button
                    w-100    = width 100% (fills the card)
                    mt-3     = margin-top size 3 (1rem = 16px) */}
                <button className="btn btn-dark w-100 mt-3" onClick={handleAdd}>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;
