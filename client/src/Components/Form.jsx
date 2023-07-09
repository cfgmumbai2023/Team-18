import React, { useState } from 'react';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';



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

    const[a,Sa]=useState('');
    const[b,Sb]=useState('');
    const[c,Sc]=useState('');
    const[d,Sd]=useState('');
    const[e,Se]=useState('');
    const[f,Sf]=useState('');
    const[g,Sg]=useState('');
    const[h,Sh]=useState('');
    const[i,Si]=useState('');
    const[j,Sj]=useState('');
    const[k,Sk]=useState('');
    const id=auth?.currentUser?.email;
    const submitForm=async()=>{
        await addDoc(collection(db,id),{
            a,b,c,d,e,f,g,h,i,j,k
        })
    } 

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
                                        onChange={(e)=>Sa(e.target.value)}
                                        name="childName"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Age:</label>
                                    <input
                                        type="text"
                                        onChange={(e)=>Sb(e.target.value)}
                                        name="age"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">DOB:</label>
                                    <input
                                        type="date"
                                        onChange={(e)=>Sc(e.target.value)}
                                        name="dob"
                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Gender:    </label>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            onChange={(e)=>Sd(e.target.value)}
                                            name="gender"
                                            value="male"

                                        />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            onChange={(e)=>Se(e.target.value)}
                                            name="gender"
                                            value="female"

                                        />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            onChange={(e)=>Sf(e.target.value)}
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
                                        onChange={(e)=>Sg(e.target.value)}
                                        name="disability"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Severity:</label>
                                    <input
                                        type="text"
                                        onChange={(e)=>Sh(e.target.value)}
                                        name="severity"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Contact Number:</label>
                                    <input
                                        type="text"
                                        onChange={(e)=>Si(e.target.value)}
                                        name="contactNumber"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Aadhar Card No:</label>
                                    <input
                                        type="text"
                                        onChange={(e)=>Sj(e.target.value)}
                                        name="aadharCardNo"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">School Name:</label>
                                    <input
                                        type="text"
                                        onChange={(e)=>Sk(e.target.value)}
                                        name="schoolName"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Family Members:</label>
                                    <input
                                        type="text"
                                        // onChange={(e)=>Sl(e.target.value)}
                                        name="familyMembers"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Identification:</label>
                                    <input
                                        type="text"
                                        // onChange={(e)=>Sm(e.target.value)}
                                        name="identification"

                                    />

                                </div>

                                <button type="submit" className="btn btn-primary" onClick={()=>submitForm}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;



