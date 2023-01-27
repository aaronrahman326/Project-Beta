import { useEffect, useState } from 'react';

function ModelList() {
    const [models, setModels] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');

        if (response.ok) {
        const data = await response.json();
        setModels(data.models)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const deleteVehicle = async (id) => {
        const deleteVehicleUrl = `http://localhost:8100/api/models/${id}`
        const config = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(deleteVehicleUrl, config);
        
        if (response.ok) {
            getData()
        }
    }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Vehicle Models</th>

        </tr>
      </thead>
      <tbody>
        {models.map(model => {
          return (
            <tr key={ model.href }>
              <td>{ model.manufacturer.name }</td>
              <td>{ model.name }</td>
              <td> <img src={ model.picture_url } height="100" width="150" /></td>
              <td><button className="btn btn-primary" onClick={() => deleteVehicle(model.name)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ModelList;;
