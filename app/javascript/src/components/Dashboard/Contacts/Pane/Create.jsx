import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { FORM_INITIAL_VALUES } from "../constants";

const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("contact.pane.header")}
        </Typography>
      </Pane.Header>
      <Form
        contact={FORM_INITIAL_VALUES}
        isEdit={false}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
