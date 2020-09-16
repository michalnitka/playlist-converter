import React, { useContext, useEffect } from "react";
import { AccessTokenContext } from "./AccessTokenContext";
import axios from "axios";

const SpotifyData = () => {
  const acccessToken = useContext(AccessTokenContext);
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${acccessToken}`,
    },
  };
  useEffect(() => {
    acccessToken &&
      axios
        .get("https://api.spotify.com/v1/me", options)
        .then((response) =>
          sessionStorage.setItem("spotifyId", response.data.id)
        )
        .catch((err) => console.log(err));
  }, [acccessToken]);
  useEffect(() => {
    axios
      .get(
        `https://api.spotify.com/v1/users/${sessionStorage.getItem(
          "spotifyId"
        )}/playlists`,
        options
      )
      .then((response) => console.log(response));
  });
  return <div>Działa</div>;
};

export default SpotifyData;
