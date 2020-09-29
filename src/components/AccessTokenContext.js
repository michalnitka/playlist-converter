import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";

export const AccessTokenContext = createContext();

export const AccessTokenProvider = ({ children }) => {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState("");

  useEffect(() => {
    let { access_token } = queryString.parse(window.location.search);
    if (access_token !== undefined) {
      setSpotifyAccessToken(access_token);
    }
  }, [spotifyAccessToken]);

  return (
    <AccessTokenContext.Provider value={spotifyAccessToken}>
      {children}
    </AccessTokenContext.Provider>
  );
};
