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
  width: 40%;
  gap: 1rem;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    width: 100%;
    }
`;

export const CopyDate = styled.span`
  margin: 10px;
`;

const Figure = ({ data }) => {
  return (
    <figure>
      <h2>{data.title}</h2>
      <img src={data.url} alt={data.title} />
      <DataBox>
        {data.copyright ? (
          <CopyDate>Copyright: {data.copyright}</CopyDate>
        ) : (
          <CopyDate>Copyright: Unknown</CopyDate>
        )}

        <CopyDate>{data.date}</CopyDate>
      </DataBox>
      <br />
      <span>{data.explanation}</span>
    </figure>
  );
};
export default Figure;

