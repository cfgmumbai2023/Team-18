import React, { useState } from 'react';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';



const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    // const formik = useFormik({
    //     initialValues: {
    //         childName: '',
    //         age: '',
    //         dob: '',
    //         gender: '',
    //         disability: '',
    //         severity: '',
    //         contactNumber: '',
    //         aadharCardNo: '',
    //         schoolName: '',
    //         familyMembers: '',
    //         identification: '',
    //     },
    //     validationSchema,
    //     onSubmit: (values) => {
    //         // Process the form data or send it to an API endpoint
    //         console.log(values);
    //         setFormSubmitted(true);
    //         formik.resetForm();
    //     },
    // });

    return (
        <div className="container">
            <div className="row justify-content-center" id="form1">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Child's Personal Information</h5>

                            <form >

                                <div className="mb-3">
                                    <label className="form-label">Child Name:</label>
                                    <input
                                        type="text"

                                        name="childName"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Age:</label>
                                    <input
                                        type="text"

                                        name="age"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">DOB:</label>
                                    <input
                                        type="date"

                                        name="dob"
                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Gender:    </label>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"

                                            name="gender"
                                            value="male"

                                        />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"

                                            name="gender"
                                            value="female"

                                        />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"

                                            name="gender"
                                            value="other"

                                        />
                                        <label className="form-check-label">Other</label>
                                    </div>

                                </div>



                                <div className="mb-3">
                                    <label className="form-label">Disability:</label>
                                    <input
                                        type="text"

                                        name="disability"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Severity:</label>
                                    <input
                                        type="text"

                                        name="severity"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Contact Number:</label>
                                    <input
                                        type="text"

                                        name="contactNumber"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Aadhar Card No:</label>
                                    <input
                                        type="text"

                                        name="aadharCardNo"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">School Name:</label>
                                    <input
                                        type="text"

                                        name="schoolName"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Family Members:</label>
                                    <input
                                        type="text"

                                        name="familyMembers"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Identification:</label>
                                    <input
                                        type="text"

                                        name="identification"

                                    />

                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;



