import React, { useState } from "react";

import { Alert } from "neetoui";

// import ContactsApi from "apis/Contacts";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      // await contactsApi.destroy({ ids: selectedContactIds });
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
      title={`Delete ${selectedContactIds.length} ${
        selectedContactIds.length > 1 ? "Contacts" : "Contact"
      }?`}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
