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
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Email is required"),
  role: yup.object().required("Role is required"),
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
