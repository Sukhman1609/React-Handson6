import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewStudent = ({ addStudent }) => {
  const [student, setStudent] = useState({ Name: '', Age: '', Course: '', Batch: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent((prevStudents) => [
      ...prevStudents,
      { ...student, id: prevStudents.length }, 
    ]);
    navigate('/student'); 
  };

  return (
    <>
      {/* <h1>Add new Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name='Name' value={student.Name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type='text' name='Age' value={student.Age} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Course:</label>
          <input type='text' name='Course' value={student.Course} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Batch:</label>
          <input type='text' name='Batch' value={student.Batch} onChange={handleInputChange} required />
        </div>
        <button type='submit'>Add Student</button>
        <button onClick={()=>navigate('/student')}>Go Back</button>
      </form> */}

<h1>Add New Data</h1>
<form onSubmit={handleSubmit}>
    <div className='edit'>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Name</legend>
    <input className="input-field" id='feild' type='text' name='Name' placeholder='Name' value={student.Name} onChange={handleInputChange} required />
    </fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Age</legend>
    <input className="input-field" id='feild' type='text' name='Age' placeholder='Age' value={student.Age} onChange={handleInputChange} required/> </fieldset><br></br>
    </div>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Course</legend>
    <input className="input-field" id='feild' type='text' name='Course' value={student.Course} placeholder='Course' onChange={handleInputChange} required/></fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Batch</legend>
    <input className="input-field" id='feild' type='text' name='Batch' value={student.Batch} placeholder='Batch' onChange={handleInputChange} required /></fieldset><br></br>
    </div></div>
    
    <button id='edit1' className='editbutton' type='submit'>Submit</button>
        <button id='edit2' className='editbutton' onClick={()=>navigate('/student')}>Cancel</button>
        </form>
    </>
  );
};

export default AddNewStudent;

