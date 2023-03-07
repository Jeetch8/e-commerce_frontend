import React from "react";
import FilterParts from "./FilterParts";

const FilterSection = () => {
  const AllFilterList = [
    {
      title: "Size",
      options: [
        { name: "Small", checked: false },
        { name: "Medium", checked: false },
        { name: "large" },
        { name: "Extra large", checked: false },
      ],
    },
    {
      title: "Color",
      options: [
        { name: "Red", checked: false },
        { name: "Black", checked: false },
        { name: "Blue", checked: false },
        { name: "Green", checked: false },
      ],
    },
    {
      title: "Brand",
      options: [
        { name: "All", checked: false },
        { name: "Grande", checked: false },
        { name: "Boujee", checked: false },
        { name: "Chanel", checked: false },
      ],
    },
    {
      title: "Discount",
      options: [
        { name: "60%", checked: false },
        { name: "50%", checked: false },
        { name: "30%", checked: false },
        { name: "20%", checked: false },
        { name: "10%", checked: false },
      ],
    },
  ];
  return (
    <div className="inline-block w-full max-w-[210px] align-top ml-4">
      {AllFilterList.map((item, index) => {
        return <FilterParts item={item} key={index} />;
      })}
    </div>
  );
};

export default FilterSection;
