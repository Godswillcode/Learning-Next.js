import Image from "next/image";
import React from "react";
// import place from "../public/placeholder.png";
function Pets() {
  return (
    <div>
      {["1", "2", "3", "4", "5"].map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="pet" height={280} width={420} />
        </div>
      ))}
    </div>
  );
}

export default Pets;
