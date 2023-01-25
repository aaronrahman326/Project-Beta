import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import SalesForm from './SalesForm';




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
          {/* { <Route path="/" element={<MainPage />} /> }
          { <Route path="technicians/new/" element={<TechnicianForm />} /> }
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path="new" element={<EmployeeForm />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} /> 
          </Route > */}
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
