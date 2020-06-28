import React, { Fragment } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

export default function SignUp(props) {
  const schema = yup.object({
    email: yup.string().required().email().lowercase().trim(),
    password: yup.string().required(),
    mobile: yup.string().required().min(10).max(10).trim(),
    addressLine1: yup.string().required().max(50).trim(),
    addressLine2: yup.string().required().max(50).trim(),
    state: yup.string().required(),
    pincode: yup.string().required().min(8).max(8).trim(),
  });

  return (
    <Fragment>
      <Modal show={props.show} onHide={() => props.close()}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{}}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group controlId="validationFormik03">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    isInvalid={!!errors.passwordConfirm}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirm}
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    isInvalid={!!errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address Line 1"
                    name="addressLine1"
                    value={values.addressLine1}
                    onChange={handleChange}
                    isInvalid={!!errors.addressLine1}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.addressLine1}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address Line 2"
                    name="addressLine2"
                    value={values.addressLine2}
                    onChange={handleChange}
                    isInvalid={!!errors.addressLine2}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.addressLine2}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={6}
                    lg={6}
                    controlId="validationFormik03"
                  >
                    <Form.Label>State</Form.Label>
                    <br />
                    <Form.Control
                      type="select"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                      as="select"
                      custom
                    >
                      {states.map((state, i) => (
                        <option key={i}>{state}</option>
                      ))}
                    </Form.Control>

                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    lg={6}
                    controlId="validationFormik03"
                  >
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="pincode"
                      name="pincode"
                      value={values.pincode}
                      onChange={handleChange}
                      isInvalid={!!errors.pincode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pincode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
