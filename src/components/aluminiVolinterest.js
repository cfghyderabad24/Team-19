import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function YesNoForm() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Simple Yes/No Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Do you agree?</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="option"
                                            id="yesOption"
                                            value="yes"
                                            checked={selectedOption === 'yes'}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="yesOption">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="option"
                                            id="noOption"
                                            value="no"
                                            checked={selectedOption === 'no'}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="noOption">No</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YesNoForm;