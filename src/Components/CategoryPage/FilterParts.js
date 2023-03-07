import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FilterParts = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-[1px] select-none" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center py-2">
        <h3 className="font-semibold">{item.title}</h3>
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {open && (
        <ul className=" leading-7 py-2">
          {item.options.map((el, index) => {
            return (
              <li className="flex gap-2" key={index}>
                <input type="checkbox" defaultChecked={el.checked} />
                <h3>{el.name}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FilterParts;
