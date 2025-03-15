import React from "react";

// components
import FAQSection from "../components/dashboard/FAQSection";
import MainSection from "../components/dashboard/MainSection";

const Home: React.FC = () =>{
  return (
    <>
      <MainSection />
      <FAQSection />
    </>
  );
}

export default Home;
