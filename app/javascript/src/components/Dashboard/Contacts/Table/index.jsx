import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { getColumnData, buildRowClassName } from "./utils";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
  handleDelete,
}) => (
  <div className="contacts-table-height mt-6 w-full">
    <NeetoUITable
      rowSelection
      bordered={false}
      columnData={getColumnData(handleDelete)}
      defaultPageSize={9}
      rowClassName={buildRowClassName}
      rowData={contacts}
      selectedRowKeys={selectedContactIds}
      onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
    />
  </div>
);

export default Table;
