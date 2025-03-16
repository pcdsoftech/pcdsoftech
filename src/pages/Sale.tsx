import React, { useState } from "react";

// components
import InfoSection from "../components/sale/InfoSection";
import TabSection from "../components/sale/TabSection";


const Sale: React.FC = () =>{
const [amount, setAmount] = useState("0");
  const [days, setDays] = useState("0");

  const handleRequestStake = () => {
    alert(`Requesting stake with amount: ${amount} and days: ${days}`);
  };
  return (
    <>
      <InfoSection />
      <TabSection />
    </>
  );
}

export default Sale;
