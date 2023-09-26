import React from "react";

import i18next from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown } from "neetoui";

import { getMonthAndDate } from "components/Dashboard/utils";

const renderColumnHeader = text => (
  <div
    className="text-xs font-bold uppercase tracking-wide"
    style={{ color: "#D8DCDE" }}
  >
    {text}
  </div>
);

const renderNameColumnData = (name, role) => (
  <div className="flex flex-row items-center">
    <Avatar className="mr-2" size="medium" user={{ name: `${name}` }} />
    <div className="-my-2 flex flex-col">
      <h5 className="text-sm">{name}</h5>
      <div className="text-xs" style={{ color: "#68737D" }}>
        {role}
      </div>
    </div>
  </div>
);

const renderOtherColumnData = data => (
  <div className="text-sm leading-4	tracking-tight" style={{ color: "#68737D" }}>
    {data}
  </div>
);

export const getColumnData = setShowDeleteAlert => [
  {
    title: renderColumnHeader(i18next.t("contact.table.header.name_and_role")),
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, { role }) => renderNameColumnData(name, role),
  },
  {
    title: renderColumnHeader(i18next.t("contact.table.header.email")),
    dataIndex: "email",
    key: "email",
    width: "30%",
    render: email => renderOtherColumnData(email),
  },
  {
    title: renderColumnHeader(i18next.t("contact.table.header.created_at")),
    dataIndex: "createdAt",
    key: "createdAt",
    width: "35%",
    render: createdAt => renderOtherColumnData(getMonthAndDate(createdAt)),
  },
  {
    title: "",
    dataIndex: "iconButton",
    key: "iconButton",
    fixed: "right",
    width: "5%",
    render: () => (
      <div className="flex justify-end">
        <Dropdown
          appendTo={() => document.body}
          buttonStyle="text"
          icon={() => <MenuHorizontal size={20} />}
          strategy="fixed"
        >
          <Dropdown.Menu>
            <Dropdown.MenuItem.Button>
              {i18next.t("contact.table.dropdown.edit")}
            </Dropdown.MenuItem.Button>
            <Dropdown.MenuItem.Button
              onClick={() => {
                setShowDeleteAlert(true);
              }}
            >
              {i18next.t("contact.table.dropdown.delete")}
            </Dropdown.MenuItem.Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    ),
  },
];
