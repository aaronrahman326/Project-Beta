import React, { useState } from 'react'

function TechnicianForm() {
  const [formData, setFormData] = useState({
    name: '',
    employee_number: '',

  })
  const [hasSignedUp, setHasSignedUp] = useState(false)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)

    const TechnicialUrl = 'http://localhost:8080/api/technicians/'
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(TechnicialUrl, fetchConfig)

    if (response.ok) {
        setFormData({
          name: '',
          employee_number: ''
        })
        setHasSignedUp(true)
    }
  }

  const handleFormChange = (event) => {
    const value = event.target.value
    const inputName = event.target.name
    setFormData({
      ...formData,
      [inputName]: value
    })
  }

  const messageClasses = (!hasSignedUp) ? 'alert alert-success d-none mb-0' : 'alert alert-success mb-0';
  return (
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Technician</h1>
          <form onSubmit={ handleSubmit } id="create-technician-form">
            <div className="form-floating mb-3">
              <input onChange={ handleFormChange } value={formData.name} placeholder="Technician Name" required type="text" name="name" id="technician_name" className="form-control"/>
              <label htmlFor="technician_name">Technician Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={ handleFormChange } value={formData.employee_number} placeholder="Technician Number" required type="text" name="employee_number" id="technician_number" className="form-control"/>
              <label htmlFor="technician_number">Technician Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          <div className = { messageClasses } id="success-message"> Congratulations! You're now bound by ALL terms and conditions!</div>
        </div>
      </div>
    </div>
  );
}
export default TechnicianForm;

