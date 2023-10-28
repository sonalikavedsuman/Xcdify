import React from "react";
import userData from '../Data/userData';
import './UserInfo.css'

const UserInfo = () => { 

  return (
    <div>
      <h1>User Collection</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0 ? (
            userData.map((user) => (
              <tr key={user.id}> {/* Use 'user.id' as the key */}
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No user data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
