import React from "react";
import MedCard from "./MedCard";
const MyMedCards = ({ Medicines,onDelete}) => {
  return (
    <div className="Medicine-Cards">
      {Medicines.map((Medicine) => (
        <MedCard
          key={Medicine.key}
          Name={Medicine.medicineName}
          Qty={Medicine.Quantity}
          deleteMed={onDelete}
        />
      ))}
    </div>
  );
};

export default MyMedCards;
