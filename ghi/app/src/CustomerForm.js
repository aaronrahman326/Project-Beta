import React, {useState} from 'react';

function CustomerForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone_number: ''
    })

    const [hasSignedUp, setHasSignedUp] = useState(false)

        const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const CustomerUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(CustomerUrl, fetchConfig);

        if (response.ok) {
        setFormData({
            name: '',
            address: '',
            phone_number: ''
        })
        setHasSignedUp(true);
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

    const messageClasses = (!hasSignedUp) ? 'alert alert-success d-none mb-0' : 'alert alert-success mb-0';

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create A New Customer</h1>
            <form onSubmit={ handleSubmit } id="create-customer-form">
              <div className="form-floating mb-3">
                <input onChange={ handleChange } value={formData.name} placeholder="Name" required type="text" name="name" id="customer_name" className="form-control"/>
                <label htmlFor="customer_name">Name</label>
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

export default CustomerForm;
