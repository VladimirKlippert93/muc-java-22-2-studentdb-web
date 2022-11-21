import {Student} from "../model/Student";
import "./StudentCard.css"
type StudentCardProps = {
    studentToDisplay: Student
}

export default function StudentCard(props: StudentCardProps){
    return(
        <div className={"StudentBox"}>
            <p>Name: {props.studentToDisplay.name}</p>
            <p>ID: {props.studentToDisplay.id}</p>
        </div>
    )
}