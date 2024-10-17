// DataTable.js
import React from 'react';
import '../../style/Table.css';

const Table = () => {
  const data = [
    { name: 'John', age: 28, email: 'john@example.com' },
    { name: 'Jane', age: 22, email: 'jane@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' },
  ];

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
