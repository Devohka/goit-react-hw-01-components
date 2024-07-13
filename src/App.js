import user from "./json/user.json";
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";





import './App.css';

console.log(data)



function App() {


  return (
    <>
      <h2 className="text-gh">Завдання 1 - Профіль соціальної мережі</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h2 className="text-gh">Завдання 2 - Секція статистики</h2>


          <Statistics title="UPLOAD STATS" stats={data} />



      <h2 className="text-gh">Завдання 3 - Список друзів</h2>

      <ul className="friend-list">
        <FriendList friends={friends} />,
      </ul>

      <h2 className="text-gh">Завдання 4 - Історія транзакцій</h2>

      <TransactionHistory items={transactions} />
    </>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
