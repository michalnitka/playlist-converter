import React, { useEffect, useState } from "react";
import SpotifyID from "./SpotifyID";
import SpotifyLogin from "./SpotifyLogin";

import queryString from "query-string";

const SpotifyData = () => {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState("");

  //Taking access token from spotify Web Api
  useEffect(() => {
    let { access_token } = queryString.parse(window.location.search);
    if (access_token !== undefined) {
      setSpotifyAccessToken(access_token);
    }
  }, []);

  return (
    <>
      {spotifyAccessToken ? "" : <SpotifyLogin />}
      {spotifyAccessToken && <SpotifyID access_token={spotifyAccessToken} />}
    </>
  );
};

export default SpotifyData;
