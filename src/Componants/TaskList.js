import React from 'react';
import { Table } from 'reactstrap';

const Tasklist = (props) => {
  return (    
    <Table className="my-5">
      <thead>
        <tr>
          <th>Sl. Number</th>
          <th>Task Title</th>
          <th>Task Description</th>
          <th>Task Category</th>
          <th>Task File</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>React.js install</td>
          <td>How to install react js?</td>
          <td>No</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tasklist;