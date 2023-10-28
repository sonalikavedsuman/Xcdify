import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';


const CsvFile =() =>{
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Replace with the correct path to your CSV file
    const csvFilePath = '/file.csv';
    

    // Use fetch to read the CSV file
    fetch(csvFilePath)
      .then((response) => response.text())
      .then((data) => {
        // Parse the CSV data
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setCsvData(results.data);
          },
        });
      })
      .catch((error) => console.error('Error reading CSV file:', error));
  }, []);

  return (
    <div>
      <h1>CSV Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.Address}</td>
              <td>{row.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CsvFile;

