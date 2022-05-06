import React from "react";

function Forms(props) {
    // const [studentName, setStudentName] = useState(""); 
    const createStudentHandler = () => {
        if(props.studentName){
          const newStudent = {
            id: Date.now(),
            name: props.studentName
          }
          props.setStudents([...props.students, newStudent]);
          props.setStudentName("");
    
        }else{
          alert("please enter valid name")
        }
    
      }
      const updateStudentHandler = () =>{
          props.setStudents(props.students.map((student) => {
            if(student.id === props.editableStudent.id){
              student.name = props.studentName;
            }
            return student;
          }))
          props.setEditMode(false);
          props.setStudentName("");
          props.setEditableStudent(null);
      
          
        }
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler()
      }}>
        <input type="text" value={props.studentName} onChange={(e) => props.setStudentName(e.target.value)} />
        <button>
          {props.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
  )
}

export default Forms;