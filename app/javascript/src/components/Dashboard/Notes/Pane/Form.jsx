import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select as FormikSelect } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  FORM_VALIDATION_SCHEMA,
  ASSIGNED_CONTACT_DATA,
  TAGS_DATA,
} from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={FORM_VALIDATION_SCHEMA}
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
              placeholder="Enter note title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={8}
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              options={ASSIGNED_CONTACT_DATA}
              placeholder="Select Role"
              strategy="fixed"
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAGS_DATA}
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
