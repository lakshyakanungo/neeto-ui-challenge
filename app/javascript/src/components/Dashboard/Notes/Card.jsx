import React, { useState } from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Tag, Avatar, Dropdown } from "neetoui";

const Card = ({ note, setShowDeleteAlert, setSelectedNoteIds }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const creationTimeInPastHours =
    new Date().getHours() - new Date(note.created_at).getHours();

  const handleDelete = () => {
    setSelectedNoteIds(note.id);
    setShowDeleteAlert(true);
  };

  return (
    <div
      className="relative mx-auto flex w-full flex-col items-start gap-3
    self-stretch rounded-sm border border-[#D8DCDE] bg-white p-4
    shadow-[0_1px_4px_-1px_rgba(28,48,74,0.12)]"
    >
      <div className="flex flex-col items-start gap-0.5 self-stretch font-['SF_Pro_Text']">
        <h4
          className="text-base font-semibold text-[#2F3941]"
          style={{ color: "#2F3941" }}
        >
          {note.title}
        </h4>
        <div
          className="text-sm font-normal text-[#68737D]"
          style={{ color: "#68737D" }}
        >
          {note.description}
        </div>
        <hr className="mt-3 h-px w-full" style={{ background: "#D8DCDE" }} />
      </div>
      <div className="flex justify-between gap-3 self-stretch">
        <div className="flex items-center">
          <Tag label="Getting Started" />
        </div>
        <div className="flex items-center gap-2">
          <Clock color="#68737D" size={16} />
          Created {creationTimeInPastHours} hrs ago
          <Avatar
            showTooltip
            size="small"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
              name: "Aishwarya",
            }}
          />
        </div>
      </div>
      <button
        className="absolute top-2 right-2	h-8 w-8"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Dropdown buttonStyle="text" icon={() => <MenuVertical size={20} />}>
          <Dropdown.Menu>
            <Dropdown.MenuItem.Button>Edit</Dropdown.MenuItem.Button>
            <Dropdown.MenuItem.Button onClick={handleDelete}>
              Delete
            </Dropdown.MenuItem.Button>
          </Dropdown.Menu>
        </Dropdown>
      </button>
    </div>
  );
};

export default Card;
