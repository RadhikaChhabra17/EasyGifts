import React, { useState } from "react";
import MyMedsHeader from "./MyMedsHeader";
import MedsForm from "./MedsForm";
import MyMedCards from "./MyMedCards";
import Copyrights from "../Homepage/Copyrights";
const MyMeds = () => {
  const [key, incrementKey] = useState(3);
  const [Medicines, addMedicine] = useState([
    {
      key: 0,
      medicineName: "Cushion",
      Quantity: 1,
    },
    {
      key: 1,
      medicineName: "Mugs",
      Quantity: 2,
    },
    {
      key: 2,
      medicineName: "Book",
      Quantity: 5,
    },
  ]);
  const addMedicneCard = (newMedicine) => {

    var finalDetail = { key, ...newMedicine };
    
    incrementKey(key + 1);
    addMedicine([...Medicines, finalDetail]);
  };
  const deleteMedicine = (Name) => {
  addMedicine(Medicines.filter((medicine) => Name !== medicine.medicineName));
  };
  return (
    <div className="meds-page">
      <MyMedsHeader />
      <MedsForm addDetails={addMedicneCard} />
      <MyMedCards Medicines={Medicines} onDelete={deleteMedicine} />
      <Copyrights />
    </div>
  );
};

export default MyMeds;
