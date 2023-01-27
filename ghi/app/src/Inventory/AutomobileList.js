import { useEffect, useState } from 'react';

function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/automobiles/');

        if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const deleteAutomobile = async (id) => {
        const deleteAutomobileUrl = `http://localhost:8100/api/automobiles/${id}`
        const config = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(deleteAutomobileUrl, config);

        if (response.ok) {
            getData()
        }
    }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Automobiles</th>

        </tr>
      </thead>
      <tbody>
        {automobiles.map(automobile => {
          return (
            <tr key={ automobile.href }>
              <td>{ automobile.color }</td>
              <td>{ automobile.year }</td>
              <td>{ automobile.vin }</td>
              <td> <img src={ automobile.model.picture_url } height="100" width="150" /></td>
              <td><button className="btn btn-primary" onClick={() => deleteAutomobile(automobile.vin)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AutomobileList;
