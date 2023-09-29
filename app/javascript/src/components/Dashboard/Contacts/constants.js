import { t } from "i18next";
import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const FORM_ROLE_DATA = buildSelectOptions([
  "Owner",
  "Contractor",
  "Client",
  "HR",
]);

export const FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required(t("contact.form.validations.firstName")),
  lastName: yup.string().required(t("contact.form.validations.lastName")),
  email: yup
    .string()
    .email(t("contact.form.validations.email.valid"))
    .required(t("contact.form.validations.email.required")),
  role: yup.object().required(t("contact.form.validations.role")),
});

export const CONTACT_DETAILS_DATA = [
  {
    id: 0,
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 1,
    name: "Jacob Jones",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 2,
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 3,
    name: "Jacob Jones",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 4,
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 5,
    name: "Jacob Jones",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 6,
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 7,
    name: "Jacob Jones",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
  {
    id: 8,
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021",
    role: "Owner",
  },
];
