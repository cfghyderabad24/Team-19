import { useForm } from "react-hook-form";
import VolunteerDetails from './Volunteer';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Formi() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        window.location.href = '/volunteers';
        

        // Handle form submission logic here (e.g., send data to backend)
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '500px' }}>
                <h3 className="card-title text-center mb-4">Volunteer Login Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="volunteerName" className="form-label">Volunteer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="volunteerName"
                            {...register("volunteerName", { required: true })}
                        />
                        {errors.volunteerName && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="volunteerNGO" className="form-label">Volunteer NGO</label>
                        <input
                            type="text"
                            className="form-control"
                            id="volunteerNGO"
                            {...register("volunteerNGO", { required: true })}
                        />
                        {errors.volunteerNGO && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-danger">This field is required</span>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Formi;