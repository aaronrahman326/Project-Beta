import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import CustomerForm from './CustomerForm';
import EmployeeForm from './EmployeeForm';
import SalesForm from './SalesForm';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage />} />  */}
          <Route path="technicians/new/" element={<TechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
