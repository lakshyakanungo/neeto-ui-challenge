import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Tag, Avatar, Dropdown, Tooltip } from "neetoui";

import { CARD_IMAGE_URL, CARD_USER_NAME } from "./constants";

import { getRelativeTime, getDayAndTime } from "../utils";

const Card = ({ note, setShowDeleteAlert, setSelectedNoteIds }) => {
  const { id, title, description, created_at } = note;

  const handleDelete = () => {
    setSelectedNoteIds(id);
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
          {title}
        </h4>
        <div
          className="text-sm font-normal text-[#68737D]"
          style={{ color: "#68737D" }}
        >
          {description}
        </div>
        <hr className="mt-3 h-px w-full" style={{ background: "#D8DCDE" }} />
      </div>
      <div className="flex justify-between gap-3 self-stretch">
        <div className="flex items-center">
          <Tag label="Getting Started" />
        </div>
        <div className="flex items-center gap-2">
          <Clock color="#68737D" size={16} />
          <Tooltip content={getDayAndTime(created_at)} position="bottom">
            Created {getRelativeTime(created_at)}
          </Tooltip>
          <Avatar
            showTooltip
            size="small"
            user={{
              imageUrl: CARD_IMAGE_URL,
              name: CARD_USER_NAME,
            }}
          />
        </div>
      </div>
      <div className="absolute top-2 right-2	h-8 w-8">
        <Dropdown buttonStyle="text" icon={() => <MenuVertical size={20} />}>
          <Dropdown.Menu>
            <Dropdown.MenuItem.Button>Edit</Dropdown.MenuItem.Button>
            <Dropdown.MenuItem.Button onClick={handleDelete}>
              Delete
            </Dropdown.MenuItem.Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Card;
