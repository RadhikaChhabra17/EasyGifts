import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React, { useState } from "react";

const MedsForm = ({ addDetails }) => {
  const [quantity, incrementMedicine] = useState(0);
  const [MedName, setMedName] = useState("");

  const handleIncrement = () => {
    incrementMedicine(quantity + 1);
  };
  const handleDecrement = () => {
    incrementMedicine(quantity - 1 >= 0 ? quantity - 1 : 0);
  };
  const addMedDetail = (e) => {
    e.preventDefault();
    const Medicine = {
      medicineName: MedName,
      Quantity: quantity,

    };
    console.log(Medicine);
    addDetails(Medicine);
    setMedName("");
    incrementMedicine(0);

  };
  return (
    <div className="addMedicine">
      <form
        className="medicine-form"
        id="appointment-form"
        onSubmit={addMedDetail}
      >
        <div className="medicineform-header">
          <h2> Details</h2>
        </div>
        <input
          type="text"
          placeholder="Gifts Name"
          className="medicine-input"
          value={MedName}
          onChange={(e) => setMedName(e.target.value)}
          required
        />
        <div className="quantity-section">
          <label className="qty-label">Quantity</label>
          <div className="med-quantity">
            <button
              type="button"
              className="decrement-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="qty-input"
              readOnly
            />
            <button
              type="button"
              className="increment-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        
        <button className="submit-medicine-btn">Save</button>
      </form>
    </div>
  );
};

export default MedsForm;
