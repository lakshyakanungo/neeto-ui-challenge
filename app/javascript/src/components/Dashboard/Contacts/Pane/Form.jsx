import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select as FormikSelect } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { FORM_VALIDATION_SCHEMA, FORM_ROLE_DATA } from "../constants";

const Form = ({ onClose, contact }) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    Toastr.success(t("contact.form.toaster_success"));
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full gap-4">
              <Input
                required
                label={t("contact.form.firstName.label")}
                name="firstName"
                placeholder={t("contact.form.firstName.placeholder")}
              />
              <Input
                required
                label={t("contact.form.lastName.label")}
                name="lastName"
                placeholder={t("contact.form.lastName.placeholder")}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("contact.form.email.label")}
              name="email"
              placeholder={t("contact.form.email.placeholder")}
            />
            <FormikSelect
              required
              className="w-full flex-grow-0"
              label={t("contact.form.role.label")}
              name="role"
              options={FORM_ROLE_DATA}
              placeholder={t("contact.form.role.placeholder")}
              strategy="fixed"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={t("contact.form.button.label.save")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("contact.form.button.label.cancel")}
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
