import { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: "Sourav Kumar",
    },
    {
      socketId: 2,
      username: "Gaurav",
    },
    {
      socketId: 3,
      username: "Shubham Dubey",
    },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logoWrap">
            <img className="logoImage" src="/logo.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">COPY ROOM ID</button>
        <button className="btn leaveBtn">LEAVE ROOM</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
