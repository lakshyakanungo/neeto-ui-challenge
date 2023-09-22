import React from "react";

import Card from "./Card";

const List = ({ notes }) => (
  <div className="mx-auto flex w-full flex-col items-start gap-4">
    {notes.map(note => (
      <Card key={note.id} note={note} />
    ))}
  </div>
);

export default List;
