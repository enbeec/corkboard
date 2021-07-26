import { useState } from "react";

const apiURL = "https://api.github.com";

export const useGithub = (username) => {
  const getUserObj = () => fetch(`${apiURL}/users/${username}`);
  const [userObj, setUserObj] = useState({});

  // userObj **must** exist before you can get the repos array
  const getReposArray = () => fetch(userObj.repos_url);
  const [reposArray, setReposArray] = useState([]);

  return {
    userObj,
    getUserObj,
    setUserObj,
    reposArray,
    getReposArray,
    setReposArray,
  };
};
