import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './service/AppointmentList';
import AppointmentForm from './service/AppointmentForm';
import AppointmentHistory from  './service/AppointmentHistory';
import TechnicianForm from './service/TechnicianForm';
import CustomerForm from './Sales/CustomerForm';
import CustomerList from './Sales/CustomerList';
import EmployeeForm from './Sales/EmployeeForm';
import EmployeeList from './Sales/EmployeeList';
import SalesForm from './Sales/SalesForm';
import SalesList from './Sales/SalesList';
import SalesHistory from './Sales/SalesHistory';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ManufacturerList from './Inventory/ManufacturerList';
import ModelList from './Inventory/ModelList';
import ModelForm from './Inventory/ModelForm';
import AutomobileList from './Inventory/AutomobileList';
import AutomobileForm from './Inventory/AutomobileForm';

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
            <Route path="search" element={<SalesHistory />} />
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
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
