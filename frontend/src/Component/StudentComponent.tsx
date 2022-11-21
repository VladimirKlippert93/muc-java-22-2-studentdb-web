import {Student} from "../model/Student";
import React from "react";
import StudentCard from "./StudentCard";
type StudentComponentProps={
    studentsToMap:Student[],
    handleFinishStudent(StudentId:string):void
}

export default function StudentComponent(props:  StudentComponentProps){
    const allStudents = props.studentsToMap.map(studentData => {
        return <StudentCard studentToDisplay={studentData} key={studentData.id} handleFinishStudent={props.handleFinishStudent}/>
    })
    return (
        <div>
            {allStudents}
        </div>
    )
}