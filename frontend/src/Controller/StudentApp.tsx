import {Student} from "../model/Student";
import axios from "axios";
import StudentCard from "../Component/StudentCard";
import StudentComponent from "../Component/StudentComponent";
import {useEffect, useState} from "react";
import AddStudent from "../Component/AddStudent";

export default function StudentApp(){
    const baseURL = "/student"

    const [allStduents, setAllStudents] = useState<Student[]>([])

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
                const updatedStudentList = allStduents.filter((students)=>students.name !== studentToDelete)
                setAllStudents(updatedStudentList)
            })
    }

    return (
        <div>
            <StudentComponent studentsToMap={allStduents} handleFinishStudent={deleteStudent}/>
            <AddStudent handleAddStudent={addStudent} />
        </div>
    )
}