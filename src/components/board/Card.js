import React from "react";
import styled from "styled-components";

export const Card = ({ data, ...props }) => (
  <CARDWRAPPER>
    <CARD style={{ left: data.x, top: data.y }} {...props}>
      {data.name} (type: {data.type})
    </CARD>
  </CARDWRAPPER>
);

const CARDWRAPPER = styled.div`
  position: relative;
`;

const CARD = styled.div`
  position: absolute;
  background: #f6ffbe;
  border: 1px inset black;
`;
