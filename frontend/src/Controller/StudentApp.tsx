import {Student} from "../model/Student";
import axios from "axios";
import StudentCard from "../Component/StudentCard";
import StudentComponent from "../Component/StudentComponent";

const testList:Student = {id:"1",name:"vladi"}
const testList2:Student = {id:"2",name:"sam"}
const finList:Student[] = [testList,testList2]

export default function StudentApp(){
    const baseURL = "/student"

    return (
        <div>
            <StudentComponent studentsToMap={finList}/>
        </div>
    )
}