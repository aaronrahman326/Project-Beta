import React, { useState, useEffect } from 'react'

function AutomobileForm() {
    const [manufacturers, setManufacturers] = useState([])
    const [models, setModels] = useState([])

    const [formData, setFormData] = useState({
        year: '',
        color: '',
        vin: '',  
    })
    // const fetchManufacturerData = async () => {
    //     const manufacturerUrl = "http://localhost:8100/api/manufacturers/"
    //     const response = await fetch(manufacturerUrl)
        
    //     if (response.ok) {
    //         const manufacturerData = await response.json()
    //         setManufacturers(manufacturerData.manufacturers)
    //     }
    // }
    // useEffect(() => {
    //     fetchManufacturerData()
    // }, [])    

    const fetchModelData = async () => {
        const modelUrl = "http://localhost:8100/api/models/"
        const response = await fetch(modelUrl)
        
        if (response.ok) {
            const modelData = await response.json()
            // console.log(modelData)
            // const filteredData = modelData.models.filter(model => setManufacturers)
            setModels(modelData.models)
        }
    }
    useEffect(() => {
        fetchModelData()
    }, []) 
    
    const [hasSignedUp, setHasSignedUp] = useState(false)
        const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)

        const AutomobileUrl = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(AutomobileUrl, fetchConfig)

        if (response.ok) {
            setFormData({
                year: '',
                color: '',
                vin: '', 
                
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
        <h1>Create a new Automobile</h1>
        <form onSubmit={ handleSubmit } id="create-auto-form">
            {/* <div className="mb-3">
              <select onChange={handleFormChange} value={formData.manufacturers} required name='manufacturer' id='manufacturer' className='form-select' >
                <option value=''>Choose a manufacturer</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.href} value={manufacturer.id} >{manufacturer.name} </option>
                  )
                })}
              </select>
            </div> */}
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.models} required name='model_id' id='model_id' className='form-select' >
                <option value=''>Choose a model</option>
                {models.map(model => {
                  return (
                    <option key={model.href} value={model.id} >{model.name} </option>
                  )
                })}
              </select>
            </div>
          <div className="form-floating mb-3">
            <input onChange={ handleFormChange } value={formData.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
            <label htmlFor="technician_name">Automobile VIN</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={ handleFormChange } value={formData.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
            <label htmlFor="technician_name">Automobile color</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={ handleFormChange } value={formData.year} placeholder="Year" required type="text" name="year" id="year" className="form-control"/>
            <label htmlFor="technician_name">Automobile year</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
        <div className = { messageClasses } id="success-message"> Congratulations! You're now bound by ALL terms and conditions!</div>
      </div>
    </div>
  </div>
);
}
export default AutomobileForm;

