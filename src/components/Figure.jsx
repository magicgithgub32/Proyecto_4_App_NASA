import React from "react";
import styled from "styled-components";

export const DataBox = styled.div`
  color: grey;
  font-size: 12px;
  font-style: italic;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border-color: grey;
  border-style: double;
  border-radius: 24px;
  width: 30%;
`;

export const CopyDate = styled.span`
  margin: 10px;
`;

const Figure = ({ data, martianData }) => {
  return (
    <figure>
      <h2>{data.title}</h2>
      <img src={data.url} alt={data.title} />
      <DataBox>
        <CopyDate>Copyright: {data.copyright}</CopyDate>
        <CopyDate>{data.date}</CopyDate>
      </DataBox>
      <br />
      <span>{data.explanation}</span>
    </figure>
  );
};
export default Figure;
