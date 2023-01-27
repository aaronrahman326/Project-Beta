import React, { useState, useEffect } from "react"

function ModelForm() {
  const [manufacturers, setManufacturers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    picture_url: "",
    manufacturer_id: "",        
  })

  const [hasSignedUp, setHasSignedUp] = useState(false)
  
  const fetchManufacturerData = async () => {
    const url="http://localhost:8100/api/manufacturers/"
    const response = await fetch(url)

    if (response.ok) {
      const manufacturerData = await response.json()
      setManufacturers(manufacturerData.manufacturers);
    }
  }
  useEffect(() => {
    fetchManufacturerData();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault()

    const appointmentUrl = "http://localhost:8100/api/models/"
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
      name: "",
      picture_url: "",
      manufacturer_id: "",  
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
          <h1>Create a new vehicle model</h1>
          <form
            onSubmit={handleSubmit}
            id='create-appointment-form'
            className={formClasses}
          >
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.name} placeholder='Model Name' required name='name' id='name' className='form-control' />
              <label htmlFor='customer_name'>Model Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.picture_url} placeholder='Picture url' required name='picture_url' id='picture_url' className='form-control' />
              <label htmlFor='vin'>Picture url</label>
            </div>
            <div className="mb-3">
              <select onChange={handleChange} value={formData.manufacturer_id} required name='manufacturer_id' id='manufacturer_id' className='form-select' >
                <option value=''>Choose a manufacturer</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id} >{manufacturer.name}</option>
                  )
                })}
              </select>
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
              Set Another Appointment?  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelForm