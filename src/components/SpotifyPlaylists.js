import React, { useState, useEffect } from "react";
import axios from "axios";

const SpotifyPlaylists = ({ spotifyId, access_token }) => {
  const [playlists, setPlaylists] = useState([]);
  const [userPlaylistChoice, setUserPlaylistChoice] = useState("");

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`,
    },
  };

  async function getUserPlaylists() {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/users/${spotifyId}/playlists`,
        options
      );
      setPlaylists(response.data.items);
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    getUserPlaylists();
  }, []);

  const handleUserChoice = (e) => {
    setUserPlaylistChoice(e.target.value);
  };

  const handleUserPlaylistChoice = () => {
    axios({
      method: "post",
      url: "http://localhost:8888/playlist",
      headers: {
        "Content-Type": "application/json",
      },
      data: { spotifyPlaylist: userPlaylistChoice, access_token },
    });
  };

  return (
    <div>
      {playlists.map((item) => (
        <div key={item.id}>
          <label htmlFor={item.name}>{item.name}</label>
          <input
            type="radio"
            id={item.name}
            name="spotifyPlaylist"
            value={item.id}
            onClick={handleUserChoice}
          />{" "}
        </div>
      ))}

      <button onClick={handleUserPlaylistChoice}>Prześlij</button>
    </div>
  );
};

export default SpotifyPlaylists;
