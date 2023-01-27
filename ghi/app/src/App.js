import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './service/AppointmentList';
import AppointmentForm from './service/AppointmentForm';
import AppointmentHistory from  './service/AppointmentHistory';
import TechnicianForm from './service/TechnicianForm';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import SalesForm from './SalesForm';
import SalesList from './SalesList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians/new/" element={<TechnicianForm />} />
          <Route path="sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SalesForm />} />
          </Route>
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path="new" element={<EmployeeForm />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route >
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="search" element={<AppointmentHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
