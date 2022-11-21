import {Student} from "../model/Student";
import axios from "axios";
import StudentComponent from "../Component/StudentComponent";
import {useEffect, useState} from "react";
import AddStudent from "../Component/AddStudent";


export default function StudentApp(){
    const baseURL = "/student"

    const [allStudents, setAllStudents] = useState<Student[]>([])

    useEffect(()=>{
        axios.get(baseURL)
            .then(result=>setAllStudents(result.data))
    },[])


    function addStudent(newStudentWithoutId: Student){
        axios.post(baseURL, newStudentWithoutId)
            .then(savedStudent =>{
                setAllStudents((prevStudents)=>{
                    return[...prevStudents, savedStudent.data]
                })
            })
    }

    function deleteStudent(studentToDelete: string){
        axios.delete(baseURL+"/"+studentToDelete)
            .then(()=>{
                const updatedStudentList = allStudents.filter((students)=>students.id !== studentToDelete)
                setAllStudents(updatedStudentList)
            })
    }

    return (
        <div className={"AddStudent"}>
            <AddStudent handleAddStudent={addStudent} />
            <StudentComponent studentsToMap={allStudents} handleFinishStudent={deleteStudent}/>
        </div>
    )
}