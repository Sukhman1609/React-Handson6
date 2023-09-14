import React,{useContext} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Store from './Store';
 const EditStudent = () => {
    const Navigate= useNavigate();
    const indexData=useLocation().state.index;
    const contextData=useContext(Store);
    console.log(indexData)
    
   const updateData={
    Name:contextData.data[indexData].Name,
    Age:contextData.data[indexData].Age,
    Course:contextData.data[indexData].Course,
    Batch:contextData.data[indexData].Batch
   }
    function handleChange(e){
      updateData[e.target.name]=e.target.value;
    }

    function handleUpdate(){
console.log(contextData.data[indexData]);
contextData.data[indexData]=updateData;
Navigate('/student')
    }
  return (
    <div><h1>Update the Data</h1>
    <div className='edit'>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Name</legend>
    <input className="input-field" type='text' name='Name' placeholder={contextData.data[indexData].Name} onChange={handleChange}/>
    </fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Age</legend>
    <input className="input-field" type='text' name='Age' placeholder={contextData.data[indexData].Age} onChange={handleChange}/> </fieldset><br></br>
    </div>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Course</legend>
    <input className="input-field" type='text' name='Course' placeholder={contextData.data[indexData].Course} onChange={handleChange}/></fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Batch</legend>
    <input className="input-field" type='text' name='Batch' placeholder={contextData.data[indexData].Batch} onChange={handleChange}/></fieldset><br></br>
    </div></div>
    
    <button id='edit1' className='editbutton' onClick={handleUpdate}> Update </button>
        <button id='edit2' className='editbutton' onClick={()=>Navigate('/student')}>Cancel</button>
        
    </div>
  )
}
export default EditStudent;
