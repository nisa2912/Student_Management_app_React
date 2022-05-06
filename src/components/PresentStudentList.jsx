import React from 'react';

function PresentStudentList(props) {
  return (
    <div className='present-students'>
          <h1>present list</h1>
          <ul>
            {
              props.students.filter(student => student.isPresent === true).map(item => (
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

export default PresentStudentList;