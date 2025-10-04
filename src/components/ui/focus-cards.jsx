import React, { useState } from "react";
import { cn } from "../../utils/cn";


export const Card = React.memo(({ card, index, hovered, setHovered, setSelectedImg }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => setSelectedImg(card.img)}
    className={cn(
      "md:rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-transform duration-300 ease-out cursor-pointer",
      hovered === index && "scale-105"
    )}
  >
    <img
      src={card.img}   // card.img es la URL
      alt={`Imagen ${card.index}`}
      className="object-contain w-full h-auto"
    />
  </div>
));

Card.displayName = "Card";


export function FocusCards({ cards, texto }) {
  const [hovered, setHovered] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <h2 className="text-center text-4xl pt-32 font-thin tracking-widest">
        {texto}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 max-w-5xl mx-auto md:px-8 w-full mt-10">
        {cards.map((card, index) => (
          <Card
            key={card.index}
            card={card} // Le pasamos el objeto completo
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            setSelectedImg={setSelectedImg}
          />
        ))}
      </div>
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Imagen ampliada"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
}