import { useForm } from "react-hook-form";

function Studentsappform() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here (e.g., send data to backend)
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '200vh' }}>
            <div className="card shadow p-4 m-3" style={{ width: '600px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender" {...register("gender", { required: true })}>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">12th Percentage</label>
                        <input
                            type="text"
                            className="form-control"
                            id="percentage"
                            {...register("percentage", { required: true })}
                        />
                        {errors.percentage && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="college" className="form-label">College</label>
                        <input
                            type="text"
                            className="form-control"
                            id="college"
                            {...register("college", { required: true })}
                        />
                        {errors.college && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stream" className="form-label">Stream of Education</label>
                        <input
                            type="text"
                            className="form-control"
                            id="stream"
                            {...register("stream", { required: true })}
                        />
                        {errors.stream && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fatherOccupation" className="form-label">Father's Occupation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fatherOccupation"
                            {...register("fatherOccupation", { required: true })}
                        />
                        {errors.fatherOccupation && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="annualIncome" className="form-label">Annual Income</label>
                        <input
                            type="text"
                            className="form-control"
                            id="annualIncome"
                            {...register("annualIncome", { required: true })}
                        />
                        {errors.annualIncome && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Area of Residence</label>
                        <input
                            type="text"
                            className="form-control"
                            id="area"
                            {...register("area", { required: true })}
                        />
                        {errors.area && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ngoName" className="form-label">NGO's Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ngoName"
                            {...register("ngoName", { required: true })}
                        />
                        {errors.ngoName && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="incomeCertificate" className="form-label">Family Income Certificate</label>
                        <input
                            type="file"
                            className="form-control"
                            id="incomeCertificate"
                            {...register("incomeCertificate", { required: true })}
                        />
                        {errors.incomeCertificate && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="twelveMemo" className="form-label">Copies of marksheets of 10th and 12th</label>
                        <input
                            type="file"
                            className="form-control"
                            id="twelveMemo"
                            {...register("twelveMemo", { required: true })}
                        />
                        {errors.twelveMemo && <span className="text-danger">This field is required</span>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Studentsappform;
