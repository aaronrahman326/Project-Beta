import { useEffect, useState } from 'react';

function SaleList() {
  const [sales, setSales] = useState([])

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

  const deleteSale = async (id) => {
    fetch(`http://localhost:8080/sales/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        window.location.reload();
    })
}

  return (
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
              <td><button className="btn btn-primary" onClick={() => deleteSale(sale.id)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SaleList;
