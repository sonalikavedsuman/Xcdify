function parseCSV(csv) {
    const lines = csv.split('\n');
    const userCollection = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split(',');
        if (data.length === 3) {
            const user = {};
            for (let j = 0; j < headers.length; j++) {
                user[headers[j]] = data[j];
            }
            userCollection.push(user);
        }
    }
    
    return userCollection;
}

// Function to display user collection in HTML
function displayUserCollection(userCollection) {
    const userList = document.getElementById('userList');
    
    userCollection.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.Name}, Address: ${user.Address}, Phone: ${user.Phone}`;
        userList.appendChild(listItem);
    });
}
// Fetch and parse the CSV file
fetch('file.csv')
    .then(response => response.text())
    .then(data => {
        const userCollection = parseCSV(data);
        displayUserCollection(userCollection);
    })
    .catch(error => {
        console.error('Error fetching CSV data:', error);
    });
