import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { getColumnData } from "./utils";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
  setShowDeleteAlert,
}) => (
  <div className="contacts-table-height mt-6 w-full">
    <NeetoUITable
      rowSelection
      bordered={false}
      columnData={getColumnData(setShowDeleteAlert)}
      defaultPageSize={9}
      rowClassName={(_, index) => (index % 2 ? "bg-gray-100" : "")}
      rowData={contacts}
      selectedRowKeys={selectedContactIds}
      onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
    />
  </div>
);

export default Table;
