import React from 'react';
import AbsentStudentList from './AbsentStudentList';
import AllStudentList from './AllStudentList';
import PresentStudentList from './PresentStudentList';

function StudentSection(props) {
    // const [students, setStudents] = useState([]);
    const toggleHandler = (id) => {
        const student = props.students.find(item => item.id === id);
        props.setStudents(props.students.map((item) => {
          if(item.id === student.id){
            item.isPresent = !item.isPresent;
          }
          return item;
    
      }))
    
      }

  return (
    <div className="students-section">
        <AllStudentList 
        editMode={props.editMode} 
        setEditMode={props.setEditMode} 
        editableStudent={props.editableStudent} 
        setEditableStudent={props.setEditableStudent} 
        students ={props.students} 
        setStudents={props.setStudents} 
        setStudentName={props.setStudentName}/>
        <PresentStudentList students ={props.students} toggleHandler= {toggleHandler}/>
        <AbsentStudentList students ={props.students} toggleHandler= {toggleHandler}/>
        
    </div>
  )
}

export default StudentSection;