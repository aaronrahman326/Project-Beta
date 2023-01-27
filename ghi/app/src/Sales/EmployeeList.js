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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;
