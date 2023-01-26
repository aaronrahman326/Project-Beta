import React, { useState, useEffect } from "react"

function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);

    const [formData, setFormData] = useState({
        customer_name: "",
        vin: "",
        start_date: "",
        start_time: "",
        technician: "",
        reason: "",
  })

    const [hasSignedUp, setHasSignedUp] = useState(false)

    const fetchTechnicianData = async () => {
        const url="http://localhost:8080/api/technicians/"
        const response = await fetch(url)

        if (response.ok) {
            const technicianData = await response.json()
            setTechnicians(technicianData.technicians);
        }
    }
    useEffect(() => {
        fetchTechnicianData();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault()

        const appointmentUrl = "http://localhost:8080/api/appointments/"
        const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        };
        const response = await fetch(appointmentUrl, fetchConfig)

        if (response.ok) {
        setFormData({
            customer_name: "",
            vin: "",
            start_date: "",
            start_time: "",
            technician: "",
            reason: "",
        });
        setHasSignedUp(true)
        }
    };

    const handleChange = event => {
        const value = event.target.value;
        setFormData({
        ...formData,
        [event.target.name]: value,
        });
    };

    let formClasses = "";
    let alertClasses = "alert alert-success d-none mb-3";
    let alertContainerClasses = "d-none";

    if (hasSignedUp) {
        formClasses = "d-none"
        alertClasses = "alert alert-success mb-3"
        alertContainerClasses = ""
    }

  return (
    <div className='row'>
      <div className='offset-3 col-6'>
        <div className='shadow p-4 mt-4'>
          <h1>Create a new appointment</h1>
          <form
            onSubmit={handleSubmit}
            id='create-appointment-form'
            className={formClasses}
          >
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.customer_name} placeholder='Customer Name' required name='customer_name' id='name' className='form-control' />
              <label htmlFor='customer_name'>Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.vin} placeholder='VIN' required name='vin' id='vin' className='form-control' />
              <label htmlFor='vin'>Vin Number</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.start_date} placeholder='Date' required name='start_date' id='start_date' type='date' className='form-control' />
              <label htmlFor='date'>Date</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.start_time} placeholder='Time' required name='start_time' id='start_time' type='time' className='form-control' />
              <label htmlFor='time'>Time</label>
            </div>
            <div className="mb-3">
              <select onChange={handleChange} value={formData.technician} required name='technician' id='technician' className='form-select' >
                <option value=''>Choose a technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.employee_number} value={technician.employee_number} >{technician.name}</option>
                  )
                })}
              </select>
            </div>
            <label htmlFor='technician'>Technician</label>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.reason} placeholder='Reason' required name='reason' id='reason' className='form-control'/>
              <label htmlFor='reason'>Reason</label>
            </div>
            <button className='btn btn-primary'>Create</button>
          </form>
          <div className={alertContainerClasses}>
            <div className={alertClasses} id='success-message'>
            Congratulations! You're now bound by all terms and conditions!
            </div>
            <button
              onClick={() => setHasSignedUp(false)}
              className='btn btn-primary'>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm
