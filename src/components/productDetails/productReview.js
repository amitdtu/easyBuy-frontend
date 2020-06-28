import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object({
  review: yup.string().required(),
  ratings: yup.string().required(),
});

export default function productReview(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.closeModal()}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write Your Review
        </Modal.Title>
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
                <Form.Label>Review</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write Your Review"
                  name="review"
                  value={values.review}
                  onChange={handleChange}
                  isInvalid={!!errors.review}
                  as="textarea"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.review}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Rating</Form.Label>
                <br />
                <Form.Control
                  type="select"
                  name="ratings"
                  placeholder="Ratings"
                  value={values.ratings}
                  onChange={handleChange}
                  isValid={touched.ratings && !errors.ratings}
                  isInvalid={!!errors.ratings}
                  feedback={errors.ratings}
                  as="select"
                  custom
                  className="select-style"
                >
                  <option>Rating</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <Form.Control.Feedback type="invalid">
                    {errors.ratings}
                  </Form.Control.Feedback>
                </Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
