import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./contactus.css";
import './home.css'


// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

export const Signup = () => {
    const { handleChange, handleBlur, handleSubmit, errors, values, touched } =
        useFormik({
            initialValues: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: Yup.object().shape({
                firstname: Yup.string()
                    .min(4, "name should be more 4 character")
                    .required("Required"),
                lastname: Yup.string()
                    .min(4, "lastname should have more than 4 character")
                    .required("Required"),
                email: Yup.string().email("Invalid email address").required("Required"),
                password: Yup.string()
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        "Minimum eight characters, at least one letter and one number"
                    )
                    .required("Required"),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "password is not match")
                    .required("Required"),
            }),
            onSubmit: async (values, action) => {
                console.log(values)
                try {
                    const response = await axios.post("http://localhost:3000/data", values);
                    console.log(response.data)
                } catch (err) {
                    alert(err.message)
                }

                action.resetForm();
            },
        });

    // console.log(errors);
    return (
        <>
            <section className="contact-address-area">
                <div className="container">
                    <div className="sec-title-style1 text-center max-width">
                        <div className="title">Contact Us</div>
                        <div className="text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
                        <div className="bottom-text">
                            <p>A Contact Us page is essential for your site to engage with visitors and customers. Check out these helpful tips and contact us page examples.</p>
                        </div>
                    </div>
                    <div className="contact-address-box row">

                        <div className="col-sm-4 single-contact-address-box text-center">
                            <div className="icon-holder">
                                <span className="icon-clock-1">
                                    <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span>
                                </span>
                            </div>
                            <h3>Lorem Ipsum</h3>
                            <h2>Lorem Ipsum is simply dummy</h2>
                        </div>

                        <div className="col-sm-4 single-contact-address-box main-branch">
                            <h3>Lorem Ipsum</h3>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <div className="title">
                                            <h4>Address:</h4>
                                        </div>
                                        <div className="text">
                                            <p>Lorem Ipsum, 40C, Lorem Ipsum dummy,<br /> Lorem Ipsum, Ch 98054</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <h4>Ph & Fax:</h4>
                                        </div>
                                        <div className="text">
                                            <p>+123 456 789 <br /> test@info.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <h4>Office Hrs:</h4>
                                        </div>
                                        <div className="text">
                                            <p>Mon-Fri: 9:30am - 6:30pm<br /> Sat-Sun: Closed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 single-contact-address-box text-center">
                            <div className="icon-holder">
                                <span className="icon-question-2">
                                    <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                                </span>
                            </div>
                            <h3>Lorem Ipsum</h3>
                            <h2>Lorem Ipsum is simply dummy</h2>
                        </div>

                    </div>
                </div>
            </section>
            <section className="contact-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="sec-title-style1 float-left">
                                            <div className="title">Send Your Message</div>
                                            <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="formcantainer">
                                    <form className="form" onSubmit={handleSubmit}>

                                        <input
                                            placeholder="FirstName"
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                            className={errors.firstname && touched.firstname ? "input-error input-box" : "input-box"}
                                        />
                                        {touched.firstname && errors.firstname ? (
                                            <div>{errors.firstname}</div>
                                        ) : null}

                                        <input
                                            placeholder="LastName"
                                
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            className={errors.lastname && touched.lastname ? "input-error input-box" : "input-box"}
                                        />
                                        {touched.lastname && errors.lastname ? (
                                            <div>{errors.lastname}</div>
                                        ) : null}

                                        <input
                                            placeholder="Message"
                                           
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            className={errors.lastname && touched.lastname ? "input-error input-box" : "input-box"}
                                        />
                                        {touched.lastname && errors.lastname ? (
                                            <div>{errors.lastname}</div>
                                        ) : null}



                                        {/* <input
                                            placeholder="Email"
                                            className="input-box"
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            classNameName={errors.email && touched.email ? "input-error" : ""}
                                        />
                                        {touched.email && errors.email ? <div>{errors.email}</div> : null}



                                        <input
                                            placeholder="Password"
                                            className="input-box"
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            classNameName={errors.password && touched.password ? "input-error" : ""}
                                        />
                                        {touched.password && errors.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}


                                        <input
                                            placeholder="ConfirmPassword"
                                            className="input-box"
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            classNameName={
                                                errors.confirmPassword && touched.confirmPassword
                                                    ? "input-error"
                                                    : ""
                                            }
                                        />
                                        {touched.confirmPassword && errors.confirmPassword ? (
                                            <div>{errors.confirmPassword}</div>
                                        ) : null}

 */}


                                        <br />
                                        <button className="button-box" type="submit">submit</button>
                                    </form>
                                    <div>
                                        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej-760x400.webp" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >

            </section >

        </>)
};
