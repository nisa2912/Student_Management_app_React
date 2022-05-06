import {useState} from 'react';
import StudentSection from './components/StudentSection';
import Forms from './components/Forms';

function App() {
  const [studentName, setStudentName] = useState(""); 
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);  
  
  // const createStudentHandler = () => {
  //   if(studentName){
  //     const newStudent = {
  //       id: Date.now(),
  //       name: studentName
  //     }
  //     setStudents([...students, newStudent]);
  //     setStudentName("");

  //   }else{
  //     alert("please enter valid name")
  //   }

  // }
  // const editStudentHandler = (id) => {
  //   const tobeEditedStudent = students.find(item => item.id ===id );
  //   setEditMode(true);
  //   setStudentName(tobeEditedStudent.name);
  //   setEditableStudent(tobeEditedStudent);

  // }
  // const deleteStudentHandler = (id) =>{

  //   const newList = students.filter(item => item.id !== id);
  //   setStudents(newList);

  // }
  // const updateStudentHandler = (id) =>{
  //   setStudents(students.map((student) => {
  //     if(student.id === editableStudent.id){
  //       student.name = studentName;
  //     }
  //     return student;
  //   }))
  //   setEditMode(false);
  //   setStudentName("");
  //   setEditableStudent(null);

    
  // }
  // const presentHandler = (id) => {
  //   const student = students.find(item => item.id === id);
  //   if(student.isPresent === true){
  //     alert("Student present already!");

  //   }else if(student.isPresent === false){
  //     alert("student is absent");

  //   }else if( student.isPresent === undefined){
  //     setStudents(students.map((item) => {
  //       if(item.id === student.id){
  //         item.isPresent = true;
  //       }
  //       return item;
  //     }))
  //   }

  // }
  // const absentHandler = (id) => {
  //   const student = students.find(item => item.id === id);
  //   if(student.isPresent === true){
  //     alert("Student in present list already!");

  //   }else if(student.isPresent === false){
  //     alert("student is absent");

  //   }else if( student.isPresent === undefined){
  //     setStudents(students.map((item) => {
  //       if(item.id === student.id){
  //         item.isPresent = false;
  //       }
  //       return item;
  //     }))
  //   }

  // }
  // const toggleHandler = (id) => {
  //   const student = students.find(item => item.id === id);
  //   setStudents(students.map((item) => {
  //     if(item.id === student.id){
  //       item.isPresent = !item.isPresent;
  //     }
  //     return item;

  // }))

  // }
  return (
    <div className="App">
      {/* Forms and StudentSection are sibling components, in react states can only be shared from parents to children. 
      In case the siblings need to share states, it can be achieved if we declare the state in a common parent  */}
      <Forms 
      editMode={editMode} 
      setEditMode={setEditMode} 
      editableStudent={editableStudent} 
      setEditableStudent={setEditableStudent} 
      studentName={studentName} 
      setStudentName={setStudentName} 
      students={students} 
      setStudents={setStudents}/>

      <StudentSection 
      editMode={editMode} 
      setEditMode={setEditMode} 
      editableStudent={editableStudent} 
      setEditableStudent={setEditableStudent} 
      setStudentName={setStudentName} 
      students={students} 
      setStudents={setStudents}/>
      
    </div>
  );
}

export default App;
