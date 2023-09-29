import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown as NeetoDropdown } from "neetoui";
import { useTranslation } from "react-i18next";

const Dropdown = ({ handleDelete }) => {
  const { Menu, MenuItem } = NeetoDropdown;

  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <NeetoDropdown
        appendTo={() => document.body}
        buttonStyle="text"
        icon={() => <MenuHorizontal size={20} />}
        strategy="fixed"
      >
        <Menu>
          <MenuItem.Button>{t("contact.table.dropdown.edit")}</MenuItem.Button>
          <MenuItem.Button onClick={handleDelete}>
            {t("contact.table.dropdown.delete")}
          </MenuItem.Button>
        </Menu>
      </NeetoDropdown>
    </div>
  );
};

export default Dropdown;
