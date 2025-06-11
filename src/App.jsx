import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import "./App.css";
import Profile from "./components/Profile";
import { FriendList } from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
