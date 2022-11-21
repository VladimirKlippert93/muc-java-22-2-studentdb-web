import {Student} from "../model/Student";
import {ChangeEvent, useState} from "react";

type AddStudentProps={
    handleAddStudent(student:Student):void
}

export default function AddStudent(props: AddStudentProps){

    const [studentName, setStudentName] = useState<HTMLInputElement>(event.target.value)

}