import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import EmptyState from "components/commons/EmptyState";

import DeleteAlert from "./DeleteAlert";
import List from "./List";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        menuBarToggle={() => {}}
        title={t("note.header.title")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("note.header.button.label")}
            size="small"
            type="button"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: event => setSearchTerm(event.target.value),
          placeholder: t("note.header.search.placeholder"),
        }}
      />
      {notes.length > 0 ? (
        <List
          notes={notes}
          setSelectedNoteIds={setSelectedNoteIds}
          setShowDeleteAlert={setShowDeleteAlert}
        />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel={t("note.emptyPage.label")}
          subtitle={t("note.emptyPage.subtitle")}
          title={t("note.emptyPage.title")}
        />
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Notes;
