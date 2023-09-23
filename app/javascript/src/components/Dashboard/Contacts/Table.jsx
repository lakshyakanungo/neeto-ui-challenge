import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA } from "./constants";
// import EditContactPane from "./Pane/Edit";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
}) => {
  const [showEditContact, setShowEditContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const huskyNeglectFn = () => {
    showEditContact;
    selectedContact;
  };
  huskyNeglectFn;

  return (
    <>
      <div className="contacts-table-height w-full">
        <NeetoUITable
          allowRowClick
          rowSelection
          columnData={CONTACTS_TABLE_COLUMN_DATA}
          currentPageNumber={1}
          defaultPageSize={9}
          rowData={contacts}
          selectedRowKeys={selectedContactIds}
          rowClassName={(_, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          onRowClick={(_, contact) => {
            setSelectedContact(contact);
            setShowEditContact(true);
          }}
          onRowSelect={selectedRowKeys =>
            setSelectedContactIds(selectedRowKeys)
          }
        />
      </div>
      {/* <EditContactPane
        fetchContacts={fetchContacts}
        Contact={selectedContact}
        setShowPane={setShowEditContact}
        showPane={showEditContact}
      /> */}
    </>
  );
};

export default Table;
