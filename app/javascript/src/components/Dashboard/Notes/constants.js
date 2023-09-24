import * as yup from "yup";

import { buildSelectOptions } from "utils/index";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assigned_contact: "",
  tags: "",
};

export const ASSIGNED_CONTACT_DATA = buildSelectOptions([
  "Donald Trump",
  "Joe Biden",
  "Alicia Keys",
  "John Mayor",
]);

export const TAGS_DATA = buildSelectOptions([
  "Admin",
  "Developer",
  "Tester",
  "HR",
  "Sales",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contact: yup.object().required("Assigned Contact is required"),
  tags: yup.object().required("Tags is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
