import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./loginform.css";


export const Login = () => {
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

            <section className="contact-info-area">
                <div className="container">

                    <div className="main">
                        <form className="formcontainer" onSubmit={handleSubmit}>
                                <div className="input-div">
                                    <input
                                        placeholder="FirstName"
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstname}
                                        className={errors.firstname && touched.firstname ? "input-error" : ""}
                                    />
                                    
                                </div>
                                {touched.firstname && errors.firstname ? (
                                        <div className="error-div">{errors.firstname}</div>
                                    ) : null}

                                <div className="input-div">
                                    <input
                                        placeholder="LastName"
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastname}
                                        className={errors.lastname && touched.lastname ? "input-error" : ""}
                                    />
                                    {touched.lastname && errors.lastname ? (
                                        <div className="error-div">{errors.lastname}</div>
                                    ) : null}
                                </div>



                                <div className="input-div">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={errors.email && touched.email ? "input-error" : ""}
                                    />
                                    {touched.email && errors.email ? <div className="error-div">{errors.email}</div> : null}
                                </div>



                                <div className="input-div">
                                    <input
                                        placeholder="Password"

                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className={errors.password && touched.password ? "input-error" : ""}
                                    />
                                    {touched.password && errors.password ? (
                                        <div className="error-div">{errors.password}</div>
                                    ) : null}
                                </div>


                                <div className="input-div">
                                    <input
                                        placeholder="ConfirmPassword"
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
                                        <div className="error-div">{errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <br />
                                <button className="loginbtn" type="submit">submit</button>
                           
                        </form>
                    </div>

                </div >

            </section >

        </>)
};
