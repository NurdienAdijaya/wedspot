import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Person } from "@material-ui/icons";

export default function DropdownCategories() {
    
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <Person />
          min - max pax
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div>
              
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
