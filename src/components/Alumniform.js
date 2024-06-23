import { useForm } from "react-hook-form";

function Formi() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        window.location.href = '/aluminiSubmit';
        // Handle form submission logic here (e.g., send data to backend)
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '500px' }}>
                <h3 className="card-title text-center mb-4">Alumni volunteer registration form</h3>
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
                        <input
                            type="text"
                            className="form-control"
                            id="courseChosen"
                            {...register("courseChosen", { required: true })}
                        />
                        {errors.courseChosen && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="areaOfResidence" className="form-label">Area of Residence</label>
                        <input
                            type="text"
                            className="form-control"
                            id="areaOfResidence"
                            {...register("areaOfResidence", { required: true })}
                        />
                        {errors.areaOfResidence && <span className="text-danger">This field is required</span>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Formi;
