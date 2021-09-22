import React from "react";

import "./TextShowcase.scss";

const TextShowcase = (props) => {
  // Description must be an array of strings!!!
  const { textAlign, title, description } = props;

  return (
    <div className="text-showcase">
      <div
        className="text-showcase-content"
        style={{
          textAlign: `${textAlign}`,
        }}
      >
        <h3>{title}</h3>

        {/* Print each string from description in its own <p> element */}
        {description.map((string, index) => {
          return <p key={index}>{string}</p>;
        })}
      </div>
    </div>
  );
};

export default TextShowcase;
