import React, { useState, useEffect } from "react";
import SpotifyPlaylists from "./SpotifyPlaylists";
import axios from "axios";

const SpotifyID = ({ access_token }) => {
  const [spotifyId, setSpotifyID] = useState("");

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`,
    },
  };

  async function getSpotifyID() {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/me",
        options
      );
      const data = await response.data.id;
      setSpotifyID(data);
      return;
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    getSpotifyID();
  }, []);

  return (
    <>
      {spotifyId && (
        <SpotifyPlaylists spotifyId={spotifyId} access_token={access_token} />
      )}
    </>
  );
};

export default SpotifyID;
