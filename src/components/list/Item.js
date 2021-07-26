import React from "react";
import styled from "styled-components";

export const Item = ({ data, ...props }) => (
  <ITEM>
    {data.name} (type: {data.type})
  </ITEM>
);

const ITEM = styled.div`
  background: #eebeff;
`;
