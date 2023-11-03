import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    setRoomId(newId);
    toast.success("Created a new room id.");
  };
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and Username are required");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };
  const handleEnterKey = (e) => {
    if (e.code == "Enter") joinRoom();
  };
  return (
    <div className="homePageWrapper">
      <Logo />
      <div className="formWrapper">
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox roomId"
            placeholder="ROOM ID"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
            onKeyUp={handleEnterKey}
          />
          <input
            type="text"
            className="inputBox username"
            placeholder="USERNAME"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            onKeyUp={handleEnterKey}
          />
          <button type="submit" className="btn joinBtn" onClick={joinRoom}>
            JOIN
          </button>
          <span className="createInfo">
            Don&apos;t have an invite? &nbsp;
            <a href="" className="createNewBtn" onClick={createNewRoom}>
              Create room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
