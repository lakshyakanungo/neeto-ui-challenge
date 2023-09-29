import React from "react";

import { t } from "i18next";
import { Avatar } from "neetoui";

import { dateFormatter } from "components/Dashboard/utils";

import ContactDropdown from "./Dropdown";

const renderColumnHeader = text => (
  <div className="neeto-ui-text-gray-300 text-xs font-bold uppercase tracking-wide">
    {text}
  </div>
);

const renderNameColumnData = (name, role) => (
  <div className="flex flex-row items-center">
    <Avatar className="mr-2" size="medium" user={{ name: `${name}` }} />
    <div className="-my-2 flex flex-col">
      <h5 className="text-sm">{name}</h5>
      <div className="neeto-ui-text-gray-600 text-xs">{role}</div>
    </div>
  </div>
);

const renderOtherColumnData = data => (
  <div className="neeto-ui-text-gray-600 text-sm	leading-4 tracking-tight">
    {data}
  </div>
);

export const getColumnData = handleDelete => [
  {
    title: renderColumnHeader(t("contact.table.header.nameAndRole")),
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, { role }) => renderNameColumnData(name, role),
  },
  {
    title: renderColumnHeader(t("contact.table.header.email")),
    dataIndex: "email",
    key: "email",
    width: "30%",
    render: email => renderOtherColumnData(email),
  },
  {
    title: renderColumnHeader(t("contact.table.header.createdAt")),
    dataIndex: "createdAt",
    key: "createdAt",
    width: "35%",
    render: createdAt => renderOtherColumnData(dateFormatter(createdAt)),
  },
  {
    title: "",
    dataIndex: "iconButton",
    key: "iconButton",
    width: "5%",
    render: () => <ContactDropdown handleDelete={handleDelete} />,
  },
];
