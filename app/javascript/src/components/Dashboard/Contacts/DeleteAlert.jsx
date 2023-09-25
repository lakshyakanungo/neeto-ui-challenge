import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ refetch, onClose, setSelectedContactIds }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      Toastr.success("Contact deleted successfully");
      onClose();
      setSelectedContactIds([]);
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
