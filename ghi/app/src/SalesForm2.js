import React, { useState, useEffect } from "react"

function SalesForm() {
    const [automobiles, setAutomobiles] = useState([]);
    const [sales, setSales] = useState([]);

    const [formData, setFormData] = useState({
        automobiles: '',
        employee: '',
        customer: '',
        sale_price: ''
  })

    const [hasSignedUp, setHasSignedUp] = useState(false)

    const fetchAutomobilesData = async () => {
        const automobilesUrl="http://localhost:8100/api/automobiles/"
        const response = await fetch(automobilesUrl)

        if (response.ok) {
            const automobilesData = await response.json()
            console.log(automobilesData)
            setAutomobiles(automobilesData.autos);
        }
    }
    useEffect(() => {
        fetchAutomobilesData();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault()

        const salesUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        };
        const response = await fetch(salesUrl, fetchConfig)

        if (response.ok) {
        setFormData({
            automobiles: '',
            employee: '',
            customer: '',
            sale_price: ''
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
          <h1>Create a new sale</h1>
          <form
            onSubmit={handleSubmit}
            id='create-sale-form'
            className={formClasses}>
            {/* <div className="form-floating mb-3">
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
            </div> */}
            <div className="mb-3">
              <select onChange={handleChange} value={formData.automobiles} required name='automobiles' id='automobiles' className='form-select' >
                <option value=''>Choose an automobile</option>
                {automobiles.map(automobile => {
                  return (
                    <option key={automobile.vin} value={automobile.vin} >{automobile.model.manufacturer.name} {automobile.model.name}</option>
                  )
                })}
              </select>
            </div>
            {/* <label htmlFor='technician'>Technician</label>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.reason} placeholder='Reason' required name='reason' id='reason' className='form-control'/>
              <label htmlFor='reason'>Reason</label>
            </div>
            <button className='btn btn-primary'>Create</button> */}
          </form>
          {/* <div className={alertContainerClasses}>
            <div className={alertClasses} id='success-message'>
            Congratulations! You're now bound by all terms and conditions!
            </div>
            <button
              onSubmit={() => setHasSignedUp(false)}
              className='btn btn-primary'>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SalesForm
