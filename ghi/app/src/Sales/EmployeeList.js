import { useEffect, useState } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/employees/');

    if (response.ok) {
      const data = await response.json();
      setEmployees(data.employees)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const deleteEmployee = async (id) => {
    fetch(`http://localhost:8080/api/employees/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        window.location.reload();
    })
}

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee Number</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr key={ employee.id }>
              <td>{ employee.name }</td>
              <td>{ employee.employee_number }</td>
              <td><button className="btn btn-primary" onClick={() => deleteEmployee(employee.name)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;
