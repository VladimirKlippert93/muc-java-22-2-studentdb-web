import {Student} from "../model/Student";
import {ChangeEvent, useState} from "react";

type AddStudentProps={
    handleAddStudent(student:Student):void
}

export default function AddStudent(props: AddStudentProps){

    const [studentName, setStudentName] = useState<string>("")

    function handleAddStudent(){
        const newStudent: Student={
            name: studentName
        }
        props.handleAddStudent(newStudent)
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        setStudentName(event.target.value)
    }
    return(
        <section>
            <input onChange={handleNameChange} />
            <button onClick={handleAddStudent}>Student hinzufügen</button>
        </section>
    )
}