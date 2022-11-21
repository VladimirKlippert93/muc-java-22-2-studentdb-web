import {Student} from "../model/Student";
import React from "react";
import StudentCard from "./StudentCard";
type StudentComponentProps={
    studentsToMap:Student[]
}

export default function StudentComponent(props:  StudentComponentProps){
    const allStudents = props.studentsToMap.map(studentData => {
        return <StudentCard studentToDisplay={studentData}/>
    })
    return (
        <div>
            {allStudents}
        </div>
    )
}