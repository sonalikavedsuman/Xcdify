import React, { useState } from "react";

export const Welcome = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "phone") {
      setPhone(value);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
