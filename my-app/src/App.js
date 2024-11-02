import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = document.location.href.replace(3000,3002)+'metrics';
    fetch(apiUrl)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <div className="table">
          <div className="table__heading">
              <div className="table__row">
                  <div>First name</div>
                  <div>Last name</div>
              </div>
          </div>
          <div>
            {users.map((user, index) => (
              <div className="table__row" key={index}>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
