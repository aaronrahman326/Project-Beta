import { useEffect, useState } from 'react';

function SalesHistory() {
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


  // const getSalesmen = async event => {
  //   const response = await fetch('http://localhost:8090/api/employees/');

  //   if (response.ok) {
  //     const employeeData = await response.json();
  //     setSalesmen(employeeData.employees)
  //   }
  // }

  // useEffect(()=>{
  //   getSalesmen()
  // }, [])

  // const handleChange = (event) => {
  //   setSalesmen(event.target.value)
  // }


  const handleKeyChange = (event) => {
    setSalesmen(event.target.value)
  }

  const filterSalesmen = () => {
      return sales.filter((sale) =>
      sale['employee']['name'].toLowerCase().includes(salesmen)
    )
  }

  return (
  <>
    <h1>Filter Sales By Salesmen</h1>
    <input onChange={handleKeyChange} placeholder="Filter by salesmen" />
    {/* <select onChange={handleKeyChange} placeholder="Filter by salesman">
      <option>Customer</option>
      <option>Salesmen</option>
    </select> */}
      {/* <select onChange={handleKeyChange} value={getData.sales} required name='employee' id='employee' className='form-select' >
        <option value=''>Choose a salesmen</option>
          {filterSalesmen().map(sale=> {
          return (
          <option key={person.id} value={person.id} >{person.name}</option>
          )
        })}
      </select> */}

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
        {filterSalesmen().map(sale => {
          return (
            <tr key={ sale.href }>
              <td>{ sale.employee.name }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.vehicle.vin }</td>
              <td>{ sale.sale_price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  );
}

export default SalesHistory;




      {/* <select onChange={handleKeyChange} value={getData.sales} required name='employee' id='employee' className='form-select' >
        <option value=''>Choose a salesmen</option>
          {salesmen.map(person=> {
          return (
          <option key={person.id} value={person.id} >{person.name}</option>
          )
        })} */}
      {/* </select> */}
