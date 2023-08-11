import React from 'react'
import './Subjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faDownload } from '@fortawesome/free-solid-svg-icons';

const Subjects = () => {
  return (
    <div className='payments'>
      <div className="subjects">
        <p>Subjects</p>
        <p className='subject1'>Dashboard/<span>Subjects</span></p>
      </div>
    <br/>
    <div className='searchbutton'>
      <button className='button1'></button>
      <button className='button2'>Search</button>
    </div>
    <br/>
    <div>
      <div className='download'>
        <button ><FontAwesomeIcon className='menu' icon={faDownload} />Download</button>
        <button><FontAwesomeIcon className='menu' icon={faAdd} /></button>
      </div>
    <table>
        <tr>
          <th><input type='checkbox'/></th>
          <th>ID</th>
          <th>Name</th>
          <th>Class</th>
          <th>Action</th>
        </tr>
          <tr>
            <td><input type='checkbox'/></td>
            <td>1</td>
            <td>Physics</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><input type='checkbox'/></td>
            <td>2</td>
            <td>Mathematics</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><input type='checkbox'/></td>
            <td>3</td>
            <td>Economics</td>
            <td>10</td>
            <td></td>
          </tr>
      </table>
    </div>
    </div>
  )
}

export default Subjects