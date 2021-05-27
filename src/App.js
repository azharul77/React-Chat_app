import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("User-Name")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="2a311c14-7f95-4b04-a496-b174b852e0b7"
      userName={localStorage.getItem("User-Name", "username")}
      userSecret={localStorage.getItem("User-Secret", "password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
