import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { name: 'Anakin Flywalker', lastLogin: 'August 13, 2024' },
    { name: 'Anakin Flywalker', lastLogin: 'August 13, 2024' },
  ]);

  return (
    <div className="App">
      <div className="table">
          <div className="table__heading">
              <div className="table__row">
                  <div>Name</div>
                  <div>Last login</div>
              </div>
          </div>
          <div>
            {users.map((user, index) => (
              <div className="table__row" key={index}>
                <div>{user.name}</div>
                <div>{user.lastLogin}</div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
