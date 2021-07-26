import React from "react";
import styled from "styled-components";
import { Item } from "./Item";

export const List = ({ dataArray, ...props }) => (
  <LIST>
    {dataArray.map(thing => (
      <Item data={thing} />
    ))}
  </LIST>
);

const LIST = styled.div`
  min-width: 14rem;
  flex-basis: 20%;
  border: 1px dashed black;
`;
