import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar } from "neetoui";
import * as yup from "yup";

const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "Name and Role",
    dataIndex: "name_and_role",
    key: "name_and_role",
    render: name_and_role => (
      <div className="flex flex-row items-center">
        <Avatar
          className="mr-2"
          size="medium"
          user={{ name: `${name_and_role}` }}
        />
        <div className="-my-2 flex flex-col">
          <h5 className="text-sm">{name_and_role}</h5>
          <div className="text-xs" style={{ color: "#68737D" }}>
            Owner
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: email => (
      <div
        className="text-sm leading-4	tracking-tight"
        style={{ color: "#68737D" }}
      >
        {email}
      </div>
    ),
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    render: created_at => (
      <div
        className="text-sm leading-4	tracking-tight"
        style={{ color: "#68737D" }}
      >
        {created_at}
      </div>
    ),
  },
  {
    title: "",
    dataIndex: "icon_button",
    key: "icon_button",
    render: () => (
      <div className="flex justify-end">
        <button>
          <MenuHorizontal />
        </button>
      </div>
    ),
  },
];

const CONTACTS_TABLE_INITIAL_ROW_DATA = [
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];

export {
  CONTACTS_FORM_INITIAL_FORM_VALUES,
  CONTACTS_FORM_VALIDATION_SCHEMA,
  CONTACTS_TABLE_COLUMN_DATA,
  CONTACTS_TABLE_INITIAL_ROW_DATA,
};
