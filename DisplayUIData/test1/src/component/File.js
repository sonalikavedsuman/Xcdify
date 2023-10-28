import React, {useState} from "react";

export const File = () => {
  const[name,setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform actions with the collected data here.
  };

  const handleButtonClick = () => {
    // Log the values to the console when the button is clicked
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Phone:", phone);
  };
  
 
  return (
    <div>
      <h1>User's Information</h1>
      <form action="" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Enter your name: </td>
              <td>
                <input type="text" value={name} onChange={handleNameChange} />
              </td>
            </tr>
            <tr>
              <td>Enter your address: </td>
              <td>
                <input type="text" value={address} onChange={handleAddressChange}/>
              </td>
            </tr>
            <tr>
              <td>Enter your phone: </td>
              <td>
                <input type="number" placeholder={phone} onChange={handlePhoneChange}/>
              </td>
            </tr>
            <tr>
              <td><button type="submit" onClick={handleButtonClick}>Submit</button></td>
             
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
