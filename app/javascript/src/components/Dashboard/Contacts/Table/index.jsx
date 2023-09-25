import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { useHelper } from "./useHelper";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
  setShowDeleteAlert,
}) => {
  const columnData = useHelper(setShowDeleteAlert);

  return (
    <div className="contacts-table-height mt-6 w-full">
      <NeetoUITable
        rowSelection
        bordered={false}
        columnData={columnData}
        defaultPageSize={9}
        rowData={contacts}
        selectedRowKeys={selectedContactIds}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
