import { useForm } from "react-hook-form";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        window.location.href = '/ngo';
        // Handle form submission logic here (e.g., send data to backend)
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '500px' }}>
                <h3 className="card-title text-center mb-4">NGO Login Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">NGO name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            {...register("username", { required: true })}
                        />
                        {errors.username && <span className="text-danger">This field is required</span>}
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

export default LoginForm;