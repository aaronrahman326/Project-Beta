import { useEffect, useState } from 'react';

function SaleList() {
  const [sales, setSales] = useState([])
  const [salesmen, setSalesmen] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/');

    if (response.ok) {
      const data = await response.json();
      setSales(data.sales)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const deleteSale = async (href) => {
    fetch(`http://localhost:8080${href}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        window.location.reload();
    })
}

  const handleChange = (event) => {
    setSalesmen(event.target.value)
  }


  return (
  <>
    <h1>Salesmen</h1>
    <input onChange={handleChange} placeholder="Filter by salesmen" />

    <div>
      {salesmen.filter((person) => person.name.toLowerCase().includes(person.name)).map((person) => (
      <div>
        {person.name} - {person.customer} - {person.vin} - {person.sale_price}
      </div>
      ))}
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Person</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Sale Price</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => {
          return (
            <tr key={ sale.href }>
              <td>{ sale.employee.name }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.vehicle.vin }</td>
              <td>{ sale.sale_price }</td>
              <td><button className="btn btn-primary" onClick={() => deleteSale(sale.href)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  );
}

export default SaleList;
