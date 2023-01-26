import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="row top-buffer">
        <div className="col">
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false">
                    Services
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">Appointments</NavLink>
                    <NavLink className="dropdown-item" to="/appointments/new">Create Appointment</NavLink>
                </div>
                <button
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false">
                    Sales
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/technicians">Sales List</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">New Sale</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">Customer</NavLink>
                    <NavLink className="dropdown-item" to="/appointments/new">Create Customer</NavLink>
                </div>
                <button
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false">
                    Inventory
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/technicians">Automobiles</NavLink>
                    <NavLink className="dropdown-item" to="/appointments">Appointments</NavLink>
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