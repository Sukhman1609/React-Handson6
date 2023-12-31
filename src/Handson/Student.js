import React,{useContext} from 'react';
import Store from './Store';
import {NavLink,useNavigate} from 'react-router-dom'


const Student = () => {
const displayData=useContext(Store);
const Navi=useNavigate();
console.log(displayData)
return(
    <>
<h1>Student Details</h1>
<button className='studentButton' onClick={()=>Navi('/addnewstudent')}>Add new Student</button>
<table cellPadding={'10px'} cellSpacing={'0px'}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
{displayData.data.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><NavLink to='/editstudent' state={{index}}>Edit</NavLink></td>
            </tr>
         )
      })}
            </table>
           
            </>
       )
}

export default Student
