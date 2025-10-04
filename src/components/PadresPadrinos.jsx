import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PadresPadrinos({
  padres = "",
  textColor = "text-gray-900",
  bgColor = "bg-white",
  containerClasses = "",
}) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className={`w-full py-10 px-4 flex flex-col items-center justify-center ${bgColor} ${containerClasses}`}
      data-aos="fade-up"
    >
      <p className="text-3xl">❤️</p>
      <h2 className={`text-3xl md:text-4xl font-semibold my-6 ${textColor}`}>
        Padres
      </h2>

      <div className="max-w-2xl mx-auto text-center">
        <p className={`text-xl italic font-light mb-2 ${textColor}`}>
  {padres}
        </p>
      </div>
    </section>
  );
}