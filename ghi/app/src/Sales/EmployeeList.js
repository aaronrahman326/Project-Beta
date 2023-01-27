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
    const deleteEmployeeUrl = `http://localhost:8090/api/employees/${id}`;
    const config = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(deleteEmployeeUrl, config);

    if (response.ok) {
      getData()
    }
  }

  const handleDelete = id => {
    deleteEmployee(id)
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
              <td><button className="btn btn-primary" onClick={() => handleDelete(employee.name)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;
