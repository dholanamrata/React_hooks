import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./form.css";


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
            <section class="contact-address-area">
                <div class="container">
                    <div class="sec-title-style1 text-center max-width">
                        <div class="title">Contact Us</div>
                        <div class="text"><div class="decor-left"><span></span></div><p>Quick Contact</p><div class="decor-right"><span></span></div></div>
                        <div class="bottom-text">
                            <p>A Contact Us page is essential for your site to engage with visitors and customers. Check out these helpful tips and contact us page examples.</p>
                        </div>
                    </div>
                    <div class="contact-address-box row">

                        <div class="col-sm-4 single-contact-address-box text-center">
                            <div class="icon-holder">
                                <span class="icon-clock-1">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span>
                                </span>
                            </div>
                            <h3>Lorem Ipsum</h3>
                            <h2>Lorem Ipsum is simply dummy</h2>
                        </div>

                        <div class="col-sm-4 single-contact-address-box main-branch">
                            <h3>Lorem Ipsum</h3>
                            <div class="inner">
                                <ul>
                                    <li>
                                        <div class="title">
                                            <h4>Address:</h4>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum, 40C, Lorem Ipsum dummy,<br /> Lorem Ipsum, Ch 98054</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="title">
                                            <h4>Ph & Fax:</h4>
                                        </div>
                                        <div class="text">
                                            <p>+123 456 789 <br /> test@info.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="title">
                                            <h4>Office Hrs:</h4>
                                        </div>
                                        <div class="text">
                                            <p>Mon-Fri: 9:30am - 6:30pm<br /> Sat-Sun: Closed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4 single-contact-address-box text-center">
                            <div class="icon-holder">
                                <span class="icon-question-2">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                                </span>
                            </div>
                            <h3>Lorem Ipsum</h3>
                            <h2>Lorem Ipsum is simply dummy</h2>
                        </div>

                    </div>
                </div>
            </section>
            <section class="contact-info-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="contact-form">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="sec-title-style1 float-left">
                                            <div class="title">Send Your Message</div>
                                            <div class="text"><div class="decor-left"><span></span></div><p>Contact Form</p></div>
                                        </div>
                                        <div class="text-box float-right">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="formcantainer">
                                    <form className="form" onSubmit={handleSubmit}>

                                        <input
                                            placeholder="FirstName"
                                            class="input-box"
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                            className={errors.firstname && touched.firstname ? "input-error" : ""}
                                        />
                                        {touched.firstname && errors.firstname ? (
                                            <div>{errors.firstname}</div>
                                        ) : null}

                                        <input
                                            placeholder="LastName"
                                            class="input-box"
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            className={errors.lastname && touched.lastname ? "input-error" : ""}
                                        />
                                        {touched.lastname && errors.lastname ? (
                                            <div>{errors.lastname}</div>
                                        ) : null}



                                        <input
                                            placeholder="Email"
                                            class="input-box"
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={errors.email && touched.email ? "input-error" : ""}
                                        />
                                        {touched.email && errors.email ? <div>{errors.email}</div> : null}



                                        <input
                                            placeholder="Password"
                                            class="input-box"
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={errors.password && touched.password ? "input-error" : ""}
                                        />
                                        {touched.password && errors.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}


                                        <input
                                            placeholder="ConfirmPassword"
                                            class="input-box"
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            className={
                                                errors.confirmPassword && touched.confirmPassword
                                                    ? "input-error"
                                                    : ""
                                            }
                                        />
                                        {touched.confirmPassword && errors.confirmPassword ? (
                                            <div>{errors.confirmPassword}</div>
                                        ) : null}




                                        <br />
                                        <button class="button-box" type="submit">submit</button>
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
