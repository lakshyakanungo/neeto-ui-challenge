import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ refetch, onClose, setSelectedContactIds }) => {
  const [deleting, setDeleting] = useState(false);

  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      setDeleting(true);
      Toastr.success(t("contact.delete_alert.toaster_success"));
      onClose();
      setSelectedContactIds([]);
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={t("contact.delete_alert.message")}
      title={t("contact.delete_alert.title")}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
