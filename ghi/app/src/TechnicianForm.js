import React, { useState } from 'react'

function TechnicianForm() {
    const [formData, setFormData] = useState({
        name: '',
        employee_number: '',

    })
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
            alert('Technician added successfully')
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
            <input onChange={ handleFormChange } value={formData.employee_number} placeholder="Technician Number" required type="text" name="employee_number" id="technician_number"/>
            <label htmlFor="technician_number">Technician Number</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
);
}
export default TechnicianForm;

