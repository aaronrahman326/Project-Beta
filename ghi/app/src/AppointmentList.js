import { useEffect, useState } from 'react';

// function AppointmentList() {
//     const [appointments, setAppointments] = useState([])

//     const getData = async () => {
//         const response = await fetch( "http://localhost:8080/api/appointments/" )

//         // const data = await response.json();
//         // const filteredData = data.appointments.filter(
//         //     appointment => appointment.finished === false
//         // )
//         // setAppointments(filteredData)
//         if(response.ok){
//             const data = await response.json();
//             setAppointments(data.appointments)
//         }
//     }
//     useEffect(() => {
//         getData()
//     }, [])
function AppointmentList() {
    const [appointments, setAppointments] = useState([])
  
    const getData = async () => {
      const response = await fetch('http://localhost:8080/api/appointments/');
  
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments)
      }
    }
  
    useEffect(()=>{
      getData()
    }, [])
    
    const deleteAppointment =  (id) => {
        fetch(`http://localhost:8080/api/appointments/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => { 
          window.location.reload();
        })
    }

    const updateStatus = (id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}`
        const fetchConfig = {
            method: 'put',
            body: JSON.stringify({ finished: true }),
            headers: {
                'Content-Type': 'application/json'
            }   
        }
    }    
    console.log(appointments)
    return (
        <>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Vip</th>
            <th>VIN</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            return (
              <tr key={ appointment.id }>
                <td>{ appointment.customer_name }</td>
                { appointment.vip && <td>VIP</td> }
                { !appointment.vip && <td></td>}
                <td>{ appointment.vin }</td>
                <td>{ appointment.start_date }</td>
                <td>{ appointment.start_time }</td>
                <td>{ appointment.technician.name }</td>
                <td>{ appointment.reason }</td>
                <td><button onClick={() => deleteAppointment(appointment.id)} className="btn btn-primary" type="button" >Delete this!</button></td>
                <td><button onClick={() => updateStatus(appointment.id)} className="btn btn-primary" type="button" >Finished</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }
  
  export default AppointmentList;
        