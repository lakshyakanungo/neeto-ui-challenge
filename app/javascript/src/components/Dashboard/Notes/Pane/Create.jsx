import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const { t } = useTranslation();

  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("note.pane.header")}
        </Typography>
      </Pane.Header>
      <Form
        note={INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={handleClose}
      />
    </Pane>
  );
};

export default Create;
