import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea } from "neetoui/formik";

// import contactsApi from "apis/contacts";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const Form = ({ onClose, contact, isEdit }) => {
  const handleSubmit = async values => {
    try {
      // if (isEdit) {
      //   await contactsApi.update(contact.id, values);
      // } else {
      //   await contactsApi.create(values);
      // }
      // refetch();
      // onClose();
      values;
    } catch (err) {
      logger.error(err);
    }
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
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={8}
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
