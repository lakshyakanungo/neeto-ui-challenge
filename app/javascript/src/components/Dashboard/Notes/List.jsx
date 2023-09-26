import React from "react";

import Card from "./Card";

const List = ({ notes, setShowDeleteAlert, setSelectedNoteIds }) => (
  <div className="mx-auto my-8 flex w-full flex-col items-start gap-4">
    {notes.map(note => (
      <Card
        key={note.id}
        note={note}
        setSelectedNoteIds={setSelectedNoteIds}
        setShowDeleteAlert={setShowDeleteAlert}
      />
    ))}
  </div>
);

export default List;
