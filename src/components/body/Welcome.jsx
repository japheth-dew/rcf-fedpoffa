import React from "react";
import bg from "../../images/landingPageBg.jpg";

const Welcome = () => {
  return (
    <section className="p-5 flex flex-col items-center  ">
        <div className="flex flex-col">

      <img className="rounded-2xl h-screen shadow-2xl" src={bg} alt="bg" />
      <span className="font-bold text-shade1 text-[2.5rem] absolute mt-0 p-5 ">Welcome To Church</span>
        </div>
    </section>
  );
};

export default Welcome;
