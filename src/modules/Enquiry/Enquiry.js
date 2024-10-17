
import { useForm } from 'react-hook-form';
import regValidation from './RegValidations/validations';
import axios from 'axios';
import '../../style/Enquiry.css'

function Enquiry() {

    //const [enquiry,setEnquiry]=useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const FormData = (enquiry) => {
        console.log(enquiry);
        axios.post('http://localhost:8084/addEnquiry', enquiry)
            .then(enq => {
                if (enq.status === 201) {
                    alert('Enquiry Submitted...!');
                }
                else {
                    alert("Enter valid info");
                }
            }).catch(() => alert("Something wents wrong..!"))

        reset();
    }

    const onReset = () => reset();


    return <div className="container">
        <div className=" text-center mt-5 ">

            <h1 >Enquiry For Home Loan</h1>

        </div>

        <div className="row ">
            <div className="col-lg-7 mx-auto">
                <div className="card mt-2 mx-auto p-4 bg-light">
                    <div className="card-body bg-light">

                        <div className="container">
                            <form id="contact-form" onSubmit={handleSubmit(FormData)}>


                                <div className="controls">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Firstname *</label>
                                                <input id="form_name" type="text" className="form-control" placeholder="Please enter your firstname *"
                                                    {...register('firstName', regValidation.fnamevalidt)} />
                                                <p>{errors.firstName && errors.firstName.message}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_lastname">Lastname *</label>
                                                <input id="form_lastname" type="text" className="form-control" placeholder="Please enter your lastname *"
                                                    {...register('lastName', regValidation.lnameValidation)} />
                                                <p >{errors.lastName && errors.lastName.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_contact">Conact *</label>
                                                <input id="form_contact" type="text" className="form-control" placeholder="Please enter your contact *"
                                                    {...register('mobileNo', regValidation.contactValidation)} />
                                                <p >{errors.mobileNo && errors.mobileNo.message}</p>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_email">Email *</label>
                                                <input id="form_email" type="text" className="form-control" placeholder="Please enter your email *"
                                                    {...register('email', regValidation.emailValidation)} />
                                                <p >{errors.email && errors.email.message}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_age">Age *</label>
                                                <input id="form_age" type="text" className="form-control" placeholder="Please enter your age *"
                                                    {...register('age', regValidation.agevalidation)} />
                                                <p >{errors.age && errors.age.message}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_Adharcard">Adharcard *</label>
                                                <input id="form_Adharcard" type="text" className="form-control" placeholder="Please enter your Adharcard *"
                                                    {...register('adharcard', regValidation.adharcardvalidation)} />
                                                <p >{errors.adharcard && errors.adharcard.message}</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="Pancard">Pancard *</label>
                                                <input id="Pancard" type="text" className="form-control" placeholder="Please enter your Pancard *"
                                                    {...register('pancard', regValidation.pancardvalidation)} />
                                                <p >{errors.pancard && errors.pancard.message}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender *</label>
                                                <select id="gender" className="form-control" {...register('gender')} >
                                                    {/* <option value="" selected disabled>--Select Your gender--</option> */}
                                                    <option defaultValue='Male'>Male</option>
                                                    <option defaultValue='Female'>Female</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="requestedLoanAmount">Requested Loan Amount *</label>
                                                <input id="requestedLoanAmount" type="text" className="form-control" placeholder="Please enter your LoanAmount *"
                                                    {...register('requestedLoanAmount')} />

                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-6">

                                            <button type="submit" className="btn btn-success btn-send pt-2 btn-block">Send Enquiry</button>

                                        </div>
                                        <div className='col-md-1'>

                                        </div>
                                        <div className='col-md-5'>
                                            <button type="button" className='btn btn-primary btn-send me-5 btn-block' onClick={onReset}>Reset</button>

                                        </div>

                                    </div>

                                    <div className='row mt-4'>
                                        <div className="col text-center">
                                            <button type="button" className='btn btn-warning  btn-block btn-send w-25' >Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    </div>
}

export default Enquiry;