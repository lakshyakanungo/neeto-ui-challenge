import React, { useState, useEffect } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";

import { CONTACT_DETAILS_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts, setContacts] = useState(CONTACT_DETAILS_DATA);

  const { t } = useTranslation();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
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
        menuBarToggle={() => {}}
        title={t("contact.header.title")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("contact.header.btn_label")}
            size="small"
            type="button"
            onClick={() => setShowNewContactPane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: event => setSearchTerm(event.target.value),
          placeholder: t("contact.header.search_placeholder"),
        }}
      />
      {contacts.length > 0 ? (
        <Table
          contacts={contacts}
          fetchContacts={fetchContacts}
          selectedContactIds={selectedContactIds}
          setSelectedContactIds={setSelectedContactIds}
          setShowDeleteAlert={setShowDeleteAlert}
        />
      ) : (
        <EmptyState
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel={t("contact.emptyPage.action_label")}
          subtitle={t("contact.emptyPage.subtitle")}
          title={t("contact.emptyPage.title")}
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
          setSelectedContactIds={setSelectedContactIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Contacts;
