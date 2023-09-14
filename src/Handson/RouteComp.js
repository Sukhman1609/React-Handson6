import React,{useState} from 'react'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LinkCompo from './LinkCompo'
import Store from './Store'
import EditStudent from './EditStudent'
import AddNewStudent from './AddNewStudent'
function RouteComp() {
    const [count,setCount]=useState([
          {id:0,Name:'Ritik',Age:22,Course:'MERN',Batch:'Dec'},
          {id:1,Name:'Saman',Age:21,Course:'MERN',Batch:'Jan'},
          {id:2,Name:'Anu',Age:24,Course:'MEAN',Batch:'April'},
          {id:3,Name:'Sanket',Age:23,Course:'JAVA',Batch:'Jan'},
          {id:3,Name:'Maya',Age:27,Course:'JAVA',Batch:'Dec'},
    ])
  return (
    <div>
      <BrowserRouter>
      <LinkCompo/>                                                     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Store.Provider value={{data: count, dataFunc:setCount}}>
            <Student/>
        </Store.Provider>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/editstudent' element={<Store.Provider value={{data: count, dataFunc:setCount}}>
            <EditStudent/>
        </Store.Provider>}/>
        <Route path='/addnewstudent' element={<AddNewStudent addStudent={setCount} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComp
