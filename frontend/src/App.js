import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch("/users").then(
      response => response.json()
    ).then (
      data => {
           setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
        {(backendData.length === 0) ? (
          <p>Loading...</p>

        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {backendData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
       )}

    </div>
  )}

export default App;
