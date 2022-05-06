import React from 'react';

function AllStudentList(props) {
    const presentHandler = (id) => {
        const student = props.students.find(item => item.id === id);
        if(student.isPresent === true){
          alert("Student present already!");
    
        }else if(student.isPresent === false){
          alert("student is absent");
    
        }else if( student.isPresent === undefined){
          props.setStudents(props.students.map((item) => {
            if(item.id === student.id){
              item.isPresent = true;
            }
            return item;
          }))
        }
    
      }
      const absentHandler = (id) => {
        const student = props.students.find(item => item.id === id);
        if(student.isPresent === true){
          alert("Student in present list already!");
    
        }else if(student.isPresent === false){
          alert("student is absent");
    
        }else if( student.isPresent === undefined){
          props.setStudents(props.students.map((item) => {
            if(item.id === student.id){
              item.isPresent = false;
            }
            return item;
          }))
        }
    
      }
      const editStudentHandler = (id) => {
        const tobeEditedStudent = props.students.find(item => item.id ===id );
        props.setEditMode(true);
        props.setStudentName(tobeEditedStudent.name);
        props.setEditableStudent(tobeEditedStudent);
    
      }
      const deleteStudentHandler = (id) =>{

          const newList = props.students.filter(item => item.id !== id);
          props.setStudents(newList);
      
        }
      
  return (
    <div className="all-students">
          <ul className="list">
            {
              props.students.map( student=> (
                <li>
                <span>{student.name}</span>
                <button onClick={() => editStudentHandler(student.id)} >Edit</button>
                <button onClick={() => deleteStudentHandler(student.id)} >Delete</button>
                <button onClick={() => presentHandler(student.id)} >Present</button>
                <button onClick={() => absentHandler(student.id)}>Absent</button>
                </li>)
              )
            }
          </ul>
        </div>
  )
}

export default AllStudentList;