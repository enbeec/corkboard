import React, { useEffect, useState } from "react";
import { useGithub } from "../hooks/useGithub";
import { DragBoard } from "./drag-n-drop/DragBoard";
import { DragList } from "./drag-n-drop/DragList";
import styled, { css } from "styled-components";
import { Board } from "./board/Board";
import { List } from "./list/List";

// a list of repos to open by default
const highlightedRepos = [];

export const Corkboard = props => {
  //const {
  //  userObj,
  //  getUserObj,
  //  setUserObj,
  //  reposArray,
  //  getReposArray,
  //  setReposArray,
  //} = useGithub("enbeec");

  //useEffect(() => {
  //  getUserObj()
  //    .then(setUserObj)
  //    .then(() => {
  //      getReposArray().then(setReposArray);
  //    });
  //}, [setUserObj, getUserObj, setReposArray, getReposArray]);

  const types = ["repo", "info"];

  // start out with some test things
  const [things, setThings] = useState([
    {
      name: "hello",
      type: "info",
      location: "board",
      x: 10,
      y: 0,
    },
    {
      name: "there",
      type: "info",
      location: "board",
      x: 10,
      y: 20,
    },
    {
      name: "friend",
      type: "info",
      location: "list",
      x: 10,
      y: 40,
    },
  ]);

  return (
    <CORKBOARD>
      <DragBoard
        WrappedComponent={Board}
        dataArray={things.filter(thing => thing.location === "board")}
      />
      <DragList
        WrappedComponent={List}
        dataArray={things.filter(thing => thing.location === "list")}
      />
    </CORKBOARD>
  );
};

const CORKBOARD = styled.div`
  background: #b58a5f;
  border: 2px solid black;
  height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
