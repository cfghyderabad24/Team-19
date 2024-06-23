import { useForm } from "react-hook-form";

function Formi() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        window.location.href = '/ngo';
        // Handle form submission logic here (e.g., send data to backend)
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '500px' }}>
                <h3 className="card-title text-center mb-4">Alumini Login Form</h3>
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
                        <label htmlFor="yearOfGraduation" className="form-label">Year of Graduation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="yearOfGraduation"
                            {...register("yearOfGraduation", { required: true })}
                        />
                        {errors.yearOfGraduation && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="courseChosen" className="form-label">Course Chosen</label>
                        <select className="form-select" id="courseChosen" {...register("courseChosen", { required: true })}>
                            <option value="">Select course</option>
                            <option value="science">Science</option>
                            <option value="commerce">Commerce</option>
                            <option value="arts">Arts</option>
                            <option value="engineering">Engineering</option>
                            <option value="medicine">Medicine</option>
                            {/* Add more options as needed */}
                        </select>
                        {errors.courseChosen && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="batchId" className="form-label">Batch ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="batchId"
                            {...register("batchId", { required: true })}
                        />
                        {errors.batchId && <span className="text-danger">This field is required</span>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Formi;