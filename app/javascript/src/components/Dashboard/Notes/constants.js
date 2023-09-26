import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
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

export const CARD_IMAGE_URL = "https://i.pravatar.cc/300";

export const CARD_USER_NAME = "Aishwarya";

export const FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Assigned Contact is required"),
  tags: yup.object().required("Tags is required"),
});

export const TABLE_COLUMN_DATA = [
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
