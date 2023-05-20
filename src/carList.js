import React, { useState } from 'react';

const CarForm = () => {
    // Define car types and their respective parts
    const cars = {
        electrical: {
            name: 'Tesla Model 3',
            battery: 'Lithium-ion',
            transmission: "Single-speed automatic",
            "0-60 mph": "5.1 seconds (base), 3.1 seconds (Performance)",
            "top speed": "130 mph (base), 162 mph (Performance)",
            price: 'RM228,000 - RM300,000'
        },
        twoWheels: {
            name: 'Ariel Atom',
            engine: 'Honda 2.0L i-VTEC',
            transmission: '6-speed manual',
            "0-60 mph": "2.8 seconds",
            "top Speed": '160 mph',
            price: 'RM 197,538.93.'
        },
        sport: {
            name: '2023 Ferrari 296 GTB',
            engine: "3.0L twin-turbocharged V6 + electric motor",
            transmission: " 8-speed dual-clutch automatic",
            "Top speed": "205 mph",
            "0-60 mph": "2.9 seconds",
            price: "RM 1,228,000."
        }
    };

    // Define state variables for car type and car details
    const [carType, setCarType] = useState('');
    const [carDetails, setCarDetails] = useState(null);

    // Handler function for submitting the form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if car type is valid
        if (cars.hasOwnProperty(carType)) {
            setCarDetails(cars[carType]);
        } else {
            setCarDetails(null);
        }
    };

    // Handler function for changing the car type
    const handleCarTypeChange = (event) => {
        setCarType(event.target.value);
        setCarDetails(null);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="carType">Select car type:</label>
                    <select id="carType" value={carType} onChange={handleCarTypeChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="electrical">Electrical</option>
                        <option value="twoWheels">2 Wheels</option>
                        <option value="sport">Sport</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {carDetails && (
                <div>
                    <h2 style={{ textAlign: 'center' }}>Car Details:</h2>
                    <ul>
                        {Object.entries(carDetails).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}: </strong>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CarForm;
