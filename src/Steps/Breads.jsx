import React, { useState } from "react";
import Box from "../components/Box";
import data from "../../Data.json";

const Breads = () => {
  const [showAll, setShowAll] = useState(data.map(() => false));
  
  return (
    <div className="flex flex-col gap-y-6 my-1.5 mx-9">
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="flex items-center justify-between px-4 py-2">
            <h2 className="text-2xl font-bold text-black mb-2">
              {section.title}
            </h2>
            <button onClick={() => setShowAll((prev) => {
                                    const updated = [...prev];
                                    updated[sectionIndex] = !updated[sectionIndex];
                                    return updated;
                                  })} className="text-green-600 font-medium text-2xl mt-2 ml-4">
              {showAll[sectionIndex] ? "Show Less" : "See All"}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-2000 ease- ${showAll[sectionIndex] ? "max-h-[2000px]" : "max-h-[400px]"} flex flex-wrap px-3`}>
            {(showAll[sectionIndex] ? section.category : section.category.slice(0, 7)
            ).map((item, idx) => (
              <Box
                key={idx}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                img={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breads;
