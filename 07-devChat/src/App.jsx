import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
import Join from "./pages/Join";
import Chat from "./pages/Chat";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState(""); // <-- adicionado

  return (
    <div
      id="App"
      className="m-0 p-0 min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light"
    >
      {chatVisibility ? (
        <Chat socket={socket} username={username} />
      ) : (
        <Join
          setSocket={setSocket}
          setUsername={setUsername}       // <-- adicionando
          visibility={setChatVisibility}
        />
      )}
    </div>
  );
}

export default App;
