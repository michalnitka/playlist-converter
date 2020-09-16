import React from "react";
import { AccessTokenProvider } from "./AccessTokenContext";
import SpotifyData from "./SpotifyData";

function App() {
  // const [state, setState] = useState("");

  // useEffect(() => {
  //   setState(value);
  // }, [value]);

  return (
    <AccessTokenProvider>
      <a href="http://localhost:8888/login">Wejdz we mnie</a>
      <SpotifyData />
    </AccessTokenProvider>
  );
}

export default App;
