import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const Board = ({ dataArray, ...props }) => (
  <BOARD>
    {dataArray.map(thing => (
      <Card data={thing} />
    ))}
  </BOARD>
);

const BOARD = styled.div`
  flex-basis: 80%;
  border: 1px dashed white;
`;
