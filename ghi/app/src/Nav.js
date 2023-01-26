import { NavLink } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
<<<<<<< HEAD
=======
//import Dropdown from 'react-bootstrap/Dropdown';

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//             <NavLink className="nav-link" aria-current="page" to="/sales">Sales</NavLink>
//             </li>
//             {/* <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/sales/new">New Sale</NavLink>
//             </li> */}
//             <li className="nav-item">
//             <NavLink className="nav-link" aria-current="page" to="/employees">Employees</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/employees/new">New Employee</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/customers">Customers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/customers/new">New Customers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/appointments">Appointments</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/appointments/new">New Appointment</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav;

>>>>>>> b3554156f475fa9606c8eea00e30d8ed33c26933

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
            </div>
        </div>
    </div>
    </div>
    </nav>
        
        
        
        
        
        
    </>
  );
}

export default Nav;