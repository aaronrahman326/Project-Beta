import React, { useEffect, useState } from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        const response = await fetch( "http://localhost:8080/api/appointments/" );

        const data = await response.json();

        setAppointments(data);
    }

}
