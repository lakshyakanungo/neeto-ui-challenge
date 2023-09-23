import React, { useState, useEffect } from "react";

import { Delete } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";

import EmptyState from "components/commons/EmptyState";

import { CONTACTS_TABLE_INITIAL_ROW_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const noop = () => {};

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts, setContacts] = useState(CONTACTS_TABLE_INITIAL_ROW_DATA);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // setLoading(true);
      // const {
      //   data: { notes },
      // } = await notesApi.fetch();
      // setNotes(notes);
      setContacts;
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
        menuBarToggle={noop}
        title="Contacts"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add contact"
            size="small"
            onClick={() => setShowNewContactPane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
          placeholder: "Search Name, Email, Phone Number, Ect.",
        }}
      />
      {contacts.length ? (
        <>
          <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedContactIds.length}
                icon={Delete}
                label="Delete"
                size="small"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          />
          <Table
            contacts={contacts}
            fetchContacts={fetchContacts}
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
          />
        </>
      ) : (
        <EmptyState
          // image={EmptyContactsListImage}
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel="Add new Contact"
          subtitle="Add your Contacts to send customized emails to them."
          title="Looks like you don't have any Contacts!"
        />
      )}
      <NewContactPane
        fetchContacts={fetchContacts}
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchContacts}
          selectedContactIds={selectedContactIds}
          setSelectedContactIds={setSelectedContactIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Contacts;
