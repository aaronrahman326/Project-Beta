import React, { useState } from 'react'

function ManufacturerForm() {
    const [formData, setFormData] = useState({
        name: '',
       

    })
    const [hasSignedUp, setHasSignedUp] = useState(false)
        const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)

        const TechnicialUrl = 'http://localhost:8100/api/manufacturers/'
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
                
            })
            setHasSignedUp(true)
            //alert
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
        <h1>Create a new Manufacturer</h1>
        <form onSubmit={ handleSubmit } id="create-technician-form">
          <div className="form-floating mb-3">
            <input onChange={ handleFormChange } value={formData.name} placeholder="Technician Name" required type="text" name="name" id="technician_name" className="form-control"/>
            <label htmlFor="technician_name">Manufacturer Name</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
        <div className = { messageClasses } id="success-message"> Congratulations! You're now bound by ALL terms and conditions!</div>
      </div>
    </div>
  </div>
);
}
export default ManufacturerForm;

