import React from "react";

// components
import Header from "../components/dashboard/Header";
import FAQSection from "../components/dashboard/FAQSection";
import MainSection from "../components/dashboard/MainSection";

const Home: React.FC = () =>{
  return (
    <>
      <Header />
      <MainSection />
      <FAQSection />
    </>
  );
}

export default Home;
