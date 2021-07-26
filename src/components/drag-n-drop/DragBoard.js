import React from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";

export const DragBoard = ({ WrappedComponent, dataArray, ...props }) => {
  return <WrappedComponent dataArray={dataArray} />;
};
