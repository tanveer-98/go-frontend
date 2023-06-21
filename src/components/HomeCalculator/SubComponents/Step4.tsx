import React, { useEffect } from "react";
import { IInitialState } from "../../../types";
import styled from "styled-components";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetcher, useNavigate } from "react-router-dom";
import PasswordShowHide from "../../Login/PasswordShowHide";
import { FiSend } from "react-icons/fi";
const styles = {
  label: "text-white  font-montserat text-2xl md:text-3xl font-bold pt-2 pb-1 w-full block",
  field: "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none focus:bg-gray-200",
  button: " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  errorMsg: "text-red-500 text-sm",
  textarea: "bg-gray-100 w-[300px] sm:w-[600px] lg:w-[800px] focus:shadow-outline rounded block w-full appearance-none focus:bg-gray-200 p-5",
};
interface IQuote {
  result: IInitialState;
  prevStep: () => number;
  nextStep: () => number;
  handleStepChange: (updatedValue: number) => any;
  handleResultChange: (updatedResult: IInitialState) => void;
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-gap: 2rem;
  flex-wrap: wrap;
`;
const Quote = ({
  result,
  prevStep,
  handleStepChange,
  handleResultChange
}: IQuote) => {
  // function onlyAlphabet(inputVal:any) {
  //   var patt=/^[a-zA-Z]+$/;
  //   if(patt.test(inputVal)){
  //     document.getElementById('fName')!.value  = inputVal;
  //   }
  //   else{
  //     var txt = inputVal.slice(0, -1);
  //     document.getElementById('fName')!.value = txt;
  //   }

  // }

  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };

  const formInitialValues = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
  };

  useEffect(() => {
    console.log("STEP 4 : FIRST RENDER");
    console.log(result);
  }, []);
  const handleSubmit = () => {
    return toast("Form successfully submitted ");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[80%] h-[80%] container bg-[#ffffff2c]  rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold">Get Quote</h1>
        <Formik
          initialValues={formInitialValues}
          validate={(values) => {
            const errors: any = {};
            if (!values.fName) {
              errors.fName = "First Name is Required";
            } else if (!/^[A-Za-z]{2,30}$/.test(values.fName)) {
              errors.fName =
                "First Name should not contain special characters or numbers.";
            }

            if (!values.lName) {
              errors.lName = "Last Name is Required";
            } else if (!/^[A-Za-z]{2,30}$/.test(values.lName)) {
              errors.lName =
                "Last Name should not contain special characters or numbers.";
            }

            if (!values.email) {
              errors.email = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.phone) {
              errors.phone = "Phone Number is Required";
              // //console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!#%*?&]{8,}$/i.test(values.password))
            } else if (!/^([1-9][0-9]{9})$/i.test(values.phone)) {
              errors.phone =
                "Password should contain Minimum eight characters, at least one letter, one number and one special character among @$!%*?&#";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            const requiredData = {
              name: values.fName.concat(" ", values.lName),
              email: values.email,
              phone: values.phone,
            };
            //console.log(requiredData)
            //   register(requiredData).then(()=>{
            //     alert('successfully registered , Please Login');
            //     navigate('/login')
            //   })
            //   .catch(err=>{
            //     //console.log(err)
            //     alert(`ERROR-${err.response.status} : ${err.response.data.message}`)
            //   });
            resetForm();
          }}
        >
          {({
            values,
            isSubmitting,
            isValid,
            errors,
            touched,
            setFieldValue,
          }) => (
            <div className="w-full flex justify-center my-10">
              <Form className=" form-training w-[250px] sm:w-[500px] lg:w-[800px] ">
                <div className=" py-sm-1 px-sm-3 w-full flex justify-center">
                  <div className="w-full">
                    <label className={styles.label} htmlFor="fName">
                      First Name
                      {errors.fName ? (
                        <span className={styles.errorMsg}>*</span>
                      ) : (
                        ""
                      )}
                    </label>
                    <Field
                      onInput={(e: any) => {
                        console.log(e);
                        return true;
                      }}
                      id="fName"
                      pattern="[a-zA-Z]*"
                      className={`${styles.field} ${
                        touched.fName && errors.fName ? "is-invalid" : ""
                      }`}
                      type="text"
                      name="fName"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="fName"
                      component="span"
                      className={styles.errorMsg}
                    />
                  </div>
                </div>
                <div className="form-group row py-sm-1 px-sm-3">
                  <label className={styles.label} htmlFor="lName">
                    Last Name
                    {errors.lName ? (
                      <span className={styles.errorMsg}>*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.lName && errors.lName ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="lName"
                    component="span"
                    className={styles.errorMsg}
                  />
                </div>
                <div className="form-group row py-sm-2 px-sm-3">
                  <label className={styles.label} htmlFor="email">
                    Email
                    {errors.email ? (
                      <span className={styles.errorMsg}>*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>
                <div className="form-group row py-sm-2 px-sm-3">
                  <label className={styles.label} htmlFor="phone">
                    Phone Number
                    {errors.phone ? (
                      <span className={styles.errorMsg}>*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.phone && errors.phone ? "is-invalid" : ""
                    } `}
                    name="phone"
                    type="number"
                    placeholder="Enter a Phone Number"
                  />

                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>

                <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="submit"
                    className="px-6
                  py-2.5
                  bg-orange-400
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-orange-600 hover:shadow-lg
                  focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-orange-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
                    disabled={isSubmitting}
                    style={{
                      color: "white",
                    }}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="flex gap-2">
                      REGISTER <FiSend />
                    </div>
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>

        {/* <div className="button-container"></div> */}
        <ButtonContainer>
          {/* <div className="w-full flex justify-center items-center flex-wrap gap-1"> */}
          <button
            className="w-[100px] bg-[#ffffff2c]  text-2xl text-white px-4 py-2 shadow-sm shadow-gray-800 hover:shadow-none rounded-md"
            onClick={() => handleStepChange(prevStep())}
            type="button"
          >
            Prev
          </button>
          <button
            className="w-[100px] bg-[#ffffff2c] text-2xl text-white px-4 py-2 shadow-sm shadow-gray-800 hover:shadow-none rounded-md"
            onClick={handleSubmit}
            type="submit"
          >
            Next
          </button>
          {/* </div> */}
        </ButtonContainer>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Quote;
