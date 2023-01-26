import React, {useState, useEffect} from 'react';

function SaleForm() {
    const [formData, setFormData] = useState({
        vehicle: '',
        employee: '',
        customer: '',
        sale_price: ''
    })

    const [hasPurchased, setHasPurchased] = useState(false)
    // const [vehicles, setVehicles] = useState([])


    //     const getData = async () => {
    //     const url = 'http://localhost:8090/api/vehicles'
    //     const response = await fetch(url)

    //         if (response.ok) {
    //             const data = await response.json()
    //             setVehicles(data.vehicles)
    //         }
    //     }

    // useEffect(() => {
    //     getData();
    // }, []);


        const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const SaleUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(SaleUrl, fetchConfig);

        if (response.ok) {
        setFormData({
            vehicle: '',
            employee: '',
            customer: '',
            sale_price: ''
        })
        setHasPurchased(true);
        // alert("Welcome to your first day!")
        }
    }

    // useEffect(() => {
    //     getData();
    // }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputType = e.target.name;
        setFormData({
          ...formData,
          [inputType]: value,
        });
    };

    const messageClasses = (!hasPurchased) ? 'alert alert-success d-none mb-0' : 'alert alert-success mb-0';

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={ handleSubmit } id="create-sale-form">
            <div className="mb-3">
              {/* <select onChange={handleChange} value={formData.vehicle} required name="vehicle" id="vehicle" className="form-select">
                <option value="">Choose a vehicle</option>
                {vehicles.map(vehicle => {
                  return (
                    <option key={vehicle.id} value={vehicle.id}>{vehicle.model}</option>
                  )
                })}
              </select> */}
            </div>
              <div className="form-floating mb-3">
                <input onChange={ handleChange } value={formData.customer_address} placeholder=" Customer Address" required type="text" name="address" id="customer_address" className="form-control"/>
                <label htmlFor="customer_address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={ handleChange } value={formData.customer_phone_number} placeholder=" Customer Phone Number" required type="text" name="phone_number" id="customer_phone_number" className="form-control"/>
                <label htmlFor="customer_phone_number">Phone Number</label>
              </div>
              <button className="btn btn-primary">Join Now!</button>
            </form>
            <div className={messageClasses} id="success-message">
            Congratulations! You're now bound by all terms and conditions!
            </div>
          </div>
        </div>
      </div>
    );
}

export default SaleForm;
