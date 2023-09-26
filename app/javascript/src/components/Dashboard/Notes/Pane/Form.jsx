import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select as FormikSelect } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import {
  FORM_VALIDATION_SCHEMA,
  ASSIGNED_CONTACT_DATA,
  TAGS_DATA,
} from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { t } = useTranslation();

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
              label={t("note.form.title.label")}
              name="title"
              placeholder={t("note.form.title.placeholder")}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("note.form.description.label")}
              name="description"
              placeholder={t("note.form.description.label")}
              rows={8}
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label={t("note.form.assignedContact.label")}
              name="assignedContact"
              options={ASSIGNED_CONTACT_DATA}
              placeholder={t("note.form.assignedContact.label")}
              strategy="fixed"
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label={t("note.form.tags.label")}
              name="tags"
              options={TAGS_DATA}
              placeholder={t("note.form.tags.label")}
              strategy="fixed"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              style="primary"
              type="submit"
              label={
                isEdit
                  ? t("note.form.button.label.update")
                  : t("note.form.button.label.save")
              }
            />
            <Button
              label={t("note.form.button.label.cancel")}
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
