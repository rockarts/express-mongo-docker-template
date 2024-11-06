import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({})

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

  useEffect(() => {
    const apiUrl = document.location.href.replace(3000,3002)+'stats';
    fetch(apiUrl)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.log(error);
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const handleSortChange = (event) => {
      if (event.target.matches('[data-sort-option]')) {
        const sortOption = event.target.value;
        
        const sortedUsers = [...users].sort((a, b) => {
          const fullNameA = `${a.firstName} ${a.lastName}`;
          const fullNameB = `${b.firstName} ${b.lastName}`;
          
          if (sortOption === 'nameAsc') {
            return fullNameA.localeCompare(fullNameB);
          } else if (sortOption === 'nameDesc') {
            return fullNameB.localeCompare(fullNameA);
          } else if (sortOption === 'totalHoursWorkedDesc') {
            return a.totalHours < b.totalHours
          } else if (sortOption === 'totalHoursWorkedAsc') {
            return a.totalHours > b.totalHours
          }

          return 0;
        });

        setUsers(sortedUsers);
      }
    };

    // Listen for changes on the entire document since the modal is outside React
    document.addEventListener('change', handleSortChange);

    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener('change', handleSortChange);
    };
  }, [users]);

  return (
    <>
    <div className="App">
      <table className="table">
          <thead className="table__heading">
              <tr className="table__row">
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Hours Worked</th>
              </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="table__row" key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.totalHours}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
    <div>
      <section>
            <div><label>Percentage of Active Testers: {stats.percentageOfActiveTesters}%</label></div>
            <div><label>Percentage of Engaged Testers: {stats.percentageOfEngagedTesters}%</label></div>
      </section>
    </div>
    </>
  );
}

export default App;
