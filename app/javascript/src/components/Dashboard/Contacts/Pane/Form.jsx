import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select as FormikSelect } from "neetoui/formik";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  CONTACTS_FORM_ROLE_DATA,
} from "../constants";

const Form = ({ onClose, contact, isEdit }) => {
  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full gap-4">
              <Input
                required
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={CONTACTS_FORM_ROLE_DATA}
              placeholder="Select Role"
              strategy="fixed"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
