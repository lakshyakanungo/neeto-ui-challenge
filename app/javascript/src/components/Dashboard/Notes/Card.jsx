import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Tag, Avatar, Dropdown, Tooltip } from "neetoui";
import { useTranslation } from "react-i18next";

import { CARD_IMAGE_URL, CARD_USER_NAME } from "./constants";

import { findRelativeTime, dayTimeFormatter } from "../utils";

const Card = ({ note, setShowDeleteAlert, setSelectedNoteIds }) => {
  const { id, title, description, created_at: createdAt } = note;
  const { Menu, MenuItem } = Dropdown;

  const { t } = useTranslation();

  const handleDelete = () => {
    setSelectedNoteIds(id);
    setShowDeleteAlert(true);
  };

  return (
    <div
      className="neeto-ui-border-gray-300 neeto-ui-shadow-xs relative mx-auto flex w-full flex-col
    items-start gap-3 self-stretch rounded-sm border bg-white
    p-4"
    >
      <div className="flex flex-col items-start gap-0.5 self-stretch">
        <h4 className="neeto-ui-text-gray-700 text-base font-semibold">
          {title}
        </h4>
        <div className="neeto-ui-text-gray-600 text-sm font-normal">
          {description}
        </div>
        <hr className="neeto-ui-bg-gray-300 mt-3 h-px w-full" />
      </div>
      <div className="flex justify-between gap-3 self-stretch">
        <div className="flex items-center">
          <Tag label={t("note.card.tag.label")} />
        </div>
        <div className="flex items-center gap-2">
          <Clock color="#68737D" size={16} />
          <Tooltip content={dayTimeFormatter(createdAt)} position="bottom">
            {t("note.card.relativeTime", {
              time: findRelativeTime(createdAt),
            })}
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
          <Menu>
            <MenuItem.Button>
              {t("note.card.dropdown.btn.edit")}
            </MenuItem.Button>
            <MenuItem.Button onClick={handleDelete}>
              {t("note.card.dropdown.btn.delete")}
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Card;
