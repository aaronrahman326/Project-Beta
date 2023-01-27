import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="row top-buffer">
        <div className="col">
            <div className="dropdown d-grid d-md-block">
                <button
                    className="btn btn-primary dropdown-toggle gap-2"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Services
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/technicians/new">New Technicians</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">Current Appointments</NavLink>
                    <NavLink className="dropdown-item" to="/appointments/new">Create Appointment</NavLink>
                    <NavLink className="dropdown-item" to="/appointments/search">Appointment History</NavLink>
                </div>
                <button
                    className="btn btn-secondary dropdown-toggle gap-2"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Sales
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/sales">Sales List</NavLink>
                    <NavLink className="dropdown-item" to="/sales/new">New Sale</NavLink>
                    <NavLink className="dropdown-item" to="/sales/search">Search Sales</NavLink>
                    <NavLink className="dropdown-item" to="/customers">Customer</NavLink>
                    <NavLink className="dropdown-item" to="/cumstomers/new">Create Customer</NavLink>
                    <NavLink className="dropdown-item" to="/employees/new">Create Employee</NavLink>
                    <NavLink className="dropdown-item" to="/employees">Employees</NavLink>
                </div>
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Inventory
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/technicians">Automobiles List</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">Create Automobile</NavLink>
                    <NavLink className="dropdown-item" to="/appointments/new">Create Appointment</NavLink>
                </div>
            </div>
        </div>
    </div>
    </div>
    </nav>






    </>
  );
}

export default Nav;
