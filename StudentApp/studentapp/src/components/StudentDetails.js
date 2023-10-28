/*
import React, { useState, useEffect } from 'react';

export const StudentDetails = () =>{
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5087/api/StudentData/1') // Replace with your C# API URL
            .then((response) => response.json())
            .then((data) => {
                setStudent(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!student) {
        return null;
    }

    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
           
        </div>
    );
}
*/

