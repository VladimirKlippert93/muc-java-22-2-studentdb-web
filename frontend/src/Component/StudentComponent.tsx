import {Student} from "../model/Student";
import React from "react";
import StudentCard from "./StudentCard";
type StudentComponentProps={
    studentsToMap:Student[],
    handleFinishStudent(StudentName:string):void
}

export default function StudentComponent(props:  StudentComponentProps){
    const allStudents = props.studentsToMap.map(studentData => {
        return <StudentCard studentToDisplay={studentData} key={studentData.id}/>
    })
    return (
        <div>
            {allStudents}
        </div>
    )
}