import { Routes,Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Employelist from './components/Employelist';
import EmployeDepartmentHead from './components/EmployeDepartmentHead';
import DepartmentList from './components/DepartmentList';
import DepartmentDetail from './components/DepartmentDetails';

function App() {
  

  return (
   <>
    <Routes>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/employelist' element ={<Employelist/>}/>
      <Route path='/employehead' element ={<EmployeDepartmentHead/>}/>
      <Route path='/departmentlist' element ={<DepartmentList/>}/>
      <Route path='/departmentDetails' element ={<DepartmentDetail/>}/>
    </Routes>
   </>
  )
}

export default App
