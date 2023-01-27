import React, {useState} from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    employee_number: '',
  })

  const [hasSignedUp, setHasSignedUp] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const EmployeeUrl = "http://localhost:8090/api/employees/";
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(EmployeeUrl, fetchConfig);

      if (response.ok) {
        setFormData({
          name: '',
          employee_number: '',
        })
        setHasSignedUp(true);
      }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const inputType = e.target.name;
      setFormData({
        ...formData,
        [inputType]: value,
      });
  };

  const messageClasses = (!hasSignedUp) ? 'alert alert-success d-none mb-0' : 'alert alert-success mb-0';

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create A New Employee</h1>
          <form onSubmit={ handleSubmit } id="create-employee-form">
            <div className="form-floating mb-3">
              <input onChange={ handleChange } value={formData.name} placeholder="Employee Name" required type="text" name="name" id="employee_name" className="form-control"/>
              <label htmlFor="employee_name">Employee Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={ handleChange } value={formData.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Sell your soul to the machine</button>
          </form>
          <div className={messageClasses} id="success-message">
          Congratulations! You're now bound by all terms and conditions!
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
