import React from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";
import { CoreConsept } from "./CoreConsept.jsx";

const CoreConsepts = () => {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConsept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConsepts;
