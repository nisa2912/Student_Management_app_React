import React from 'react';

function AbsentStudentList(props) {
  return (
    <div className='absent-students'>
          <h1>Absent list</h1>
          <ul>
          {
              props.students.filter(student => student.isPresent === false).map(item => (
                <li>
                  <span>{item.name}</span>
                  <button onClick={() => props.toggleHandler(item.id)}>Accidentally added</button>
                </li>
              )) 
            }
            
          </ul>

        </div>
  )
}

export default AbsentStudentList;