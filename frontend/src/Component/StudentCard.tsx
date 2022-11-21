import {Student} from "../model/Student";
import "./StudentCard.css"

type StudentCardProps = {
    studentToDisplay: Student
    handleFinishStudent(studentID: string):void
}

export default function StudentCard(props: StudentCardProps){

    function handleFinishStudent(){
        if(props.studentToDisplay.id){
            props.handleFinishStudent(props.studentToDisplay.id)
        }else{
            console.error("Die ID die du löschen möchtest, gibt es nicht!")
        }
    }
    return(
        <div className={"StudentBox"}>
            <p>Name: {props.studentToDisplay.name}</p>
            <p>ID: {props.studentToDisplay.id}</p>
            <button onClick={handleFinishStudent}>Delete</button>
        </div>
    )
}