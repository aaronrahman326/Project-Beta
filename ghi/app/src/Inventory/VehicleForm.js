import { useEffect, useState } from 'react';

function ManufacturerList() {
    const [vehicles, setVehicles] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');

        if (response.ok) {
        const data = await response.json();
        setVehicles(data.vehicles)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const deleteManufacturer = async (id) => {
        const deleteManufacturerUrl = `http://localhost:8100/api/models/${id}`
        const config = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(deleteManufacturerUrl, config);
        
        if (response.ok) {
            getData()
        }
    }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {manufacturers.map(manufacturer => {
          return (
            <tr key={ manufacturer.id }>
              <td>{ manufacturer.name }</td>
              <td><button className="btn btn-primary" onClick={() => deleteManufacturer(manufacturer.name)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ManufacturerList;;
