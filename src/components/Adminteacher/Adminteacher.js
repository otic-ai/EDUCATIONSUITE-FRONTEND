import React from 'react'
import './Adminteacher.css'

function Adminteacher() {
  return (
    <div className='payments'>
      Adminteacher
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Department</th>
        </tr>
      
          <tr>
            <td>1</td>
            <td>Lubwama Eric</td>
            <td>English</td>
            <td>English Dept</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rusoke Marvin</td>
            <td>Math</td>
            <td>Math Dept</td>
          </tr>
          <tr>
            <td>3</td>
            <td>SSentamu joseph</td>
            <td>Physics</td>
            <td>Physics dept</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mercy Johnson</td>
            <td>Literature</td>
            <td>English dept</td>
          </tr>
      </table>
    </div>
  )
}

export default Adminteacher