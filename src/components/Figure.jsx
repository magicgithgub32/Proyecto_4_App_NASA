import React from "react";

const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
    </figure>
  );
};
export default Figure;
